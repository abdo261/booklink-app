<?php

namespace App\Http\Controllers;


use App\Models\ImageAuthor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ImageAuthorController extends Controller
{
    // Display a listing of the resource.

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        $validateData = Validator::make($request->only('name', 'data'), [
            'name' => 'required',
            'data' => 'required',
        ]);

        if ($validateData->fails()) {
            return response()->json($validateData->errors());
        }

        $imageFile = $request->file('data');
        $imageData = base64_encode(file_get_contents($imageFile));

        $image = ImageAuthor::create([
            'name' => $request->input('name'),
            'data' => $imageData,
        ]);

        return response()->json($image, 201);
    }


    // Display the specified resource.
    public function show($id)
    {
        $image = ImageAuthor::find($id);
        if (!$image) {
            abort(404);
        }


        $imageData = base64_decode($image->data);


        $contentType = 'image/' . pathinfo($image->name, PATHINFO_EXTENSION);

        // Return the image data as response
        return Response::make($imageData, 200, [
            'Content-Type' => $contentType,
        ]);
    }

    // Update the specified resource in storage.
    public function update(Request $request, $id)
    {
        $image = ImageAuthor::find($id);
        if (!$image) {
            return response()->json(['message' => 'Image not found'], 404);
        }

        $image->update($request->all());

        return response()->json($image);
    }

    // Remove the specified resource from storage.
    public function destroy($id)
    {
        $image = ImageAuthor::find($id);
        if (!$image) {
            return response()->json(['message' => 'Image not found'], 404);
        }


        $image->delete();

        return response()->json(['message' => 'Image deleted'], 200);
    }
}
