<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;
use Pusher\Pusher;

class NotificationsController extends Controller
{
    public function send(Request $request)
    {
        // Extract notification from the request
        $notification = $request->input('notification');

        // Establish connection to RabbitMQ
        $connection = new AMQPStreamConnection(env('RABBITMQ_HOST'), env('RABBITMQ_PORT'), env('RABBITMQ_USER'), env('RABBITMQ_PASSWORD'), env('RABBITMQ_VHOST'));
        $channel = $connection->channel();

        // Declare queue
        $queueName = 'notifications'; // Name of the queue
        $channel->queue_declare($queueName, false, true, false, false);

        // Create notification
        $msg = new AMQPMessage($notification);

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
    
        $pusher->trigger('notifications', 'notification-sent', ['notification' => $notification]);

        return response()->json(['status' => 'Notification sent to RabbitMQ']);
    }
    public function getOldNotifications()
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
        $queueName = 'notifications'; // Name of the queue
        $channel->queue_declare($queueName, false, true, false, false);
    
        $notifications = [];
    
        // Consume notifications from the queue and store them
        while ($message = $channel->basic_get($queueName)) {
            $notifications[] = $message->getBody();
        }
    
        // Close channel and connection
        $channel->close();
        $connection->close();
    
        return response()->json(['notifications' => $notifications]);
    }
}
