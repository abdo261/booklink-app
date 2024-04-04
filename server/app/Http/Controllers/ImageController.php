<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // adjust the validation rules as needed
        ]);

        // Retrieve the uploaded file
        $image = $request->file('image');

        // Generate a unique identifier for the image
        $imageId = Str::uuid()->toString();

        // Get the original extension of the uploaded image
        $imageExtension = $image->getClientOriginalExtension();

        // Generate the filename using the unique identifier and original extension
        $imageName = $imageId . '.' . $imageExtension;

        // Store the image in the storage/app/public/images/test directory
        $image->storeAs('public/images/test', $imageName);

        // Return a response
        return response()->json(['image_id' => $imageId, 'image_path' => 'storage/' . $imageName], 201);
    }
}
