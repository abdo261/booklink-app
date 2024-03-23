<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $likes = Like::with('user.profile')->get();
        return response()->json($likes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'post_id' => 'required|exists:posts,id',
        ]);

        $like = Like::create($request->all());

        return response()->json(['message' => 'Like created successfully', 'like' => $like]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         // No need to get like by id, so this method remains empty
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // No need to update likes, so this method remains empty
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $like = Like::find($id);

        if (!$like) {
            return response()->json(['message' => 'Like not found'], Response::HTTP_NOT_FOUND);
        }

        $like->delete();

        return response()->json(['message' => 'Like deleted successfully']);
    }
}
