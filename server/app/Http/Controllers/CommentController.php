<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $comments = Comment::with('user.profile')->get();
        return response()->json($comments);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'post_id' => 'required|exists:posts,id',
            'description' => 'required|string',
        ]);

        $comment = Comment::create($request->all());

        return response()->json(['message' => 'Comment created successfully', 'comment' => $comment]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $comment = Comment::with('user.profile')->find($id);

        if (!$comment) {
            return response()->json(['message' => 'Comment not found'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($comment);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'description' => 'required|string',
        ]);

        $comment = Comment::find($id);

        if (!$comment) {
            return response()->json(['message' => 'Comment not found'], Response::HTTP_NOT_FOUND);
        }

        $comment->update($request->only('description'));

        return response()->json(['message' => 'Comment updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $comment = Comment::find($id);

        if (!$comment) {
            return response()->json(['message' => 'Comment not found'], Response::HTTP_NOT_FOUND);
        }

        $comment->delete();

        return response()->json(['message' => 'Comment deleted successfully']);
    }
}
