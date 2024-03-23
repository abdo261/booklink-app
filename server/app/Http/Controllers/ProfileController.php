<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $profiles = Profile::with('user','followers',"following")->get();
        return response()->json($profiles);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'f_name' => 'required|string',
            'l_name' => 'required|string',
            'user_name' => 'required|string|unique:profiles,user_name',
            'phone_number' => 'required|string',
            'image' => 'nullable|string',
            'address' => 'required|string',
            'CIN' => 'required|string|unique:profiles,CIN',
        ]);

        $profile = Profile::create($request->all());

        return response()->json(['message' => 'Profile created successfully', 'profile' => $profile]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $profile = Profile::with('user','followers',"following")->find($id);
        if (!$profile) {
            return response()->json(['message' => 'Profile not found'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($profile);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'f_name' => 'string',
            'l_name' => 'string',
            'user_name' => 'string|unique:profiles,user_name,'.$id,
            'phone_number' => 'string',
            'image' => 'nullable|string',
            'address' => 'string',
            'CIN' => 'string|unique:profiles,CIN,'.$id,
        ]);

        $profile = Profile::find($id);

        if (!$profile) {
            return response()->json(['message' => 'Profile not found'], Response::HTTP_NOT_FOUND);
        }

        $profile->update($request->all());

        return response()->json(['message' => 'Profile updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $profile = Profile::find($id);

        if (!$profile) {
            return response()->json(['message' => 'Profile not found'], Response::HTTP_NOT_FOUND);
        }

        $profile->delete();

        return response()->json(['message' => 'Profile deleted successfully']);
    }
    public function followProfile(Request $request, $id)
    {
        $profile = Profile::find($id);
        if (!$profile) {
            return response()->json(['error' => 'Profile not found'], 404);
        }

        auth()->user()->profile->follow($profile);

        return response()->json(['message' => 'Profile followed successfully']);
    }

    /**
     * Unfollow another profile.
     */
    public function unfollowProfile(Request $request, $id)
    {
        $profile = Profile::find($id);
        if (!$profile) {
            return response()->json(['error' => 'Profile not found'], 404);
        }

        auth()->user()->profile->unfollow($profile);

        return response()->json(['message' => 'Profile unfollowed successfully']);
    }
}
