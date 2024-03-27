<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
        $posts = Post::with('likes.user.profile','comments.user.profile','user.profile.followers')->paginate(10);
        return response()->json($posts);
    }
    public function indexNextPage(Request $request)
    {
        $nextPage = $request->input('next_page');
        $posts = Post::with('likes.user.profile','comments.user.profile','user.profile.followers')->paginate(10 ,['*'], 'page', $nextPage);
        return response()->json($posts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|numeric',
            'description' => 'nullable|string',
            'user_id' => 'required|exists:users,id'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $post = Post::create($request->only(['image', 'description', 'user_id']));

        return response()->json(['message' => 'Post created successfully', 'post' => $post]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = Post::with('likes.user.profile','comments.user.profile','user.profile.followers')->find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($post);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'nullable|numeric',
            'description' => 'nullable|string',
            'user_id' => 'exists:users,id'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $post = Post::find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found'], Response::HTTP_NOT_FOUND);
        }

        $post->update($request->only(['image', 'description', 'user_id']));

        return response()->json(['message' => 'Post updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found'], Response::HTTP_NOT_FOUND);
        }

        $post->delete();

        return response()->json(['message' => 'Post deleted successfully']);
    }
}
