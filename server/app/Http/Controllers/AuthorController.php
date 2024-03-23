<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $authors = Author::with('books.categorys')->get();
        return response()->json($authors);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = Validator::make($request->all(), [
            'name' => 'required|string|unique:authors,name',
            'date_of_birth' => 'nullable|date',
            'image' => 'nullable|integer',
        ]);

        if ($validateData->fails()) {
            return response()->json($validateData->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $author = Author::create($request->all());

        return response()->json(['message' => 'Author created successfully', 'author' => $author]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $author = Author::with('books.categorys')->find($id);

        if (!$author) {
            return response()->json(['message' => 'Author not found'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($author);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validateData = Validator::make($request->all(), [
            'name' => 'string|unique:authors,name,' . $id,
            'date_of_birth' => 'nullable|date',
            'image' => 'nullable|integer',
        ]);

        if ($validateData->fails()) {
            return response()->json($validateData->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $author = Author::find($id);

        if (!$author) {
            return response()->json(['message' => 'Author not found'], Response::HTTP_NOT_FOUND);
        }

        $author->update($request->all());

        return response()->json(['message' => 'Author updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $author = Author::find($id);

        if (!$author) {
            return response()->json(['message' => 'Author not found'], Response::HTTP_NOT_FOUND);
        }

        $author->delete();

        return response()->json(['message' => 'Author deleted successfully']);
    }
}
