<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

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
        $validateData = Validator::make($request->only('user_id', 'post_id'), [
            'user_id' => 'required|exists:users,id',
            'post_id' => 'required|exists:posts,id',
        ]);
    
        if ($validateData->fails()) {
            return response()->json(['error' => $validateData->errors()]);
        }
    
        $likeData = [
            'user_id' => $request->user_id,
            'post_id' => $request->post_id,
        ];
    
        $like = Like::create($likeData);
    
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
