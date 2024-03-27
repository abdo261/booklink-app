<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use Illuminate\Http\Request;

use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;
use Pusher\Pusher;
class MessageController extends Controller
{
    // Method to send a message to RabbitMQ
    public function send(Request $request)
    {
        // Extract message from the request
        $message =  [
            'message' =>  $request->input('message'),
            'isRead' => false, // Assuming initially the message is not read
            'producer' =>$request->input('producer'), // Assuming the producer user Id that send the message
            'consumer' => $request->input('consumer'), // Assuming consumer user ID will resive the message
        ];
       
        // Establish connection to RabbitMQ
        $connection = new AMQPStreamConnection(env('RABBITMQ_HOST'), env('RABBITMQ_PORT'), env('RABBITMQ_USER'), env('RABBITMQ_PASSWORD'), env('RABBITMQ_VHOST'));
        $channel = $connection->channel();

        // Declare queue
        $queueName = 'messages'; // Name of the queue
        $channel->queue_declare($queueName, false, true, false, false);

        // Create message
        $msg = new AMQPMessage(json_encode($message));

        // Publish message to queue
        $channel->basic_publish($msg, '', $queueName);

        // Close channel and connection
        $channel->close();
        $connection->close();

        // broadcast(new MessageSent($message));
        $pusher = new Pusher(
            env('PUSHER_APP_KEY'),
            env('PUSHER_APP_SECRET'),
            env('PUSHER_APP_ID'),
            [
                'cluster' => env('PUSHER_APP_CLUSTER'),
                'encrypted' => true,
            ]
        );
    
        $pusher->trigger('messages', 'message-sent', json_encode($message));

        return response()->json(['status' => 'Message sent to RabbitMQ']);
    }

    // Method to consume messages from RabbitMQ
    public function consume()
    {
       
        // Establish connection to RabbitMQ
        $connection = new AMQPStreamConnection(env('RABBITMQ_HOST'), env('RABBITMQ_PORT'), env('RABBITMQ_USER'), env('RABBITMQ_PASSWORD'), env('RABBITMQ_VHOST'));
        $channel = $connection->channel();

        // Declare queue
        $queueName = 'messages'; // Name of the queue
        $channel->queue_declare($queueName, false, true, false, false);

        echo ' [*] Waiting for messages. To exit press CTRL+C', "\n";

        // Callback function to handle incoming messages
        $callback = function ($msg) {
            
            echo " [x] Received ", $msg->body, "\n";
        };

        // Consume messages from the queue
        $channel->basic_consume($queueName, '', false, true, false, false, $callback);

        // Keep consuming messages until manually stopped
        while ($channel->is_consuming()) {
            $channel->wait();
        }

        // Close channel and connection
        $channel->close();
        $connection->close();
    }
    public function getOldMessages()
    {
        // Establish connection to RabbitMQ
        $connection = new AMQPStreamConnection(
            env('RABBITMQ_HOST'),
            env('RABBITMQ_PORT'),
            env('RABBITMQ_USER'),
            env('RABBITMQ_PASSWORD'),
            env('RABBITMQ_VHOST')
        );
        $channel = $connection->channel();
    
        // Declare queue
        $queueName = 'messages'; // Name of the queue
        $channel->queue_declare($queueName, false, true, false, false);
    
        $messages = [];
    
        // Consume messages from the queue without acknowledging them
        while ($message = $channel->basic_get($queueName, false)) {
            // Decode the JSON string to an associative array
            $decodedMessage = json_decode($message->getBody(), true);
            // Push the decoded message to the messages array
            $messages[] = $decodedMessage;
        }
    
        // Close channel and connection
        $channel->close();
        $connection->close();
    
        // Update the 'isRead' field of the messages to true
        $this->updateIsReadField($messages);
    
        return response()->json(['messages' => $messages]);
    }
    public function updateIsReadField($messages)
    {
        // Establish connection to RabbitMQ
        $connection = new AMQPStreamConnection(
            env('RABBITMQ_HOST'),
            env('RABBITMQ_PORT'),
            env('RABBITMQ_USER'),
            env('RABBITMQ_PASSWORD'),
            env('RABBITMQ_VHOST')
        );
        $channel = $connection->channel();
    
        // Declare queue
        $queueName = 'messages'; // Name of the queue
        $channel->queue_declare($queueName, false, true, false, false);
        $channel->queue_purge($queueName);
         // Buffer for updated messages

    // Buffer for updated messages
    $updatedMessages = [];

    // Process messages
    foreach ($messages as $message) {
        if (!$message['isRead']) {
            $message['isRead'] = true;
        }
        $updatedMessages[] = $message;
    }

    // Republish the updated messages to the queue
    foreach ($updatedMessages as $updatedMessage) {
        $updatedMsg = new AMQPMessage(json_encode($updatedMessage));
        $channel->basic_publish($updatedMsg, '', $queueName);
    }
    // Close channel and connection
    $channel->close();
    $connection->close();
    }
    
public function updateUnreadMessages()
{
    // Establish connection to RabbitMQ
    $connection = new AMQPStreamConnection(
        env('RABBITMQ_HOST'),
        env('RABBITMQ_PORT'),
        env('RABBITMQ_USER'),
        env('RABBITMQ_PASSWORD'),
        env('RABBITMQ_VHOST')
    );
    $channel = $connection->channel();

    // Declare queue
    $queueName = 'messages'; // Name of the queue
    $channel->queue_declare($queueName, false, true, false, false);

    // Consume messages from the queue and update unread messages
    while ($message = $channel->basic_get($queueName)) {
        $decodedMessage = json_decode($message->getBody(), true);

        if (!$decodedMessage['isRead']) {
            $decodedMessage['isRead'] = true;

            // Publish the updated message back to the queue
            $updatedMsg = new AMQPMessage(json_encode($decodedMessage));
            $channel->basic_publish($updatedMsg, '', $queueName);
        }

        // Acknowledge the message
        $channel->basic_ack($message->delivery_info['delivery_tag']);
    }

    // Close channel and connection
    $channel->close();
    $connection->close();

    return response()->json(['status' => 'Unread messages updated']);
}

public function removeAllMessages()
{
    // Establish connection to RabbitMQ
    $connection = new AMQPStreamConnection(
        env('RABBITMQ_HOST'),
        env('RABBITMQ_PORT'),
        env('RABBITMQ_USER'),
        env('RABBITMQ_PASSWORD'),
        env('RABBITMQ_VHOST')
    );
    $channel = $connection->channel();

    // Declare queue
    $queueName = 'messages'; // Name of the queue
    $channel->queue_declare($queueName, false, true, false, false);

    // Consume and acknowledge each message until the queue is empty
    while ($message = $channel->basic_get($queueName)) {
        // Acknowledge the message
        $channel->basic_ack($message->getDeliveryTag());
    }

    // Close channel and connection
    $channel->close();
    $connection->close();

    return response()->json(['status' => 'All messages removed from the queue']);
}
}
