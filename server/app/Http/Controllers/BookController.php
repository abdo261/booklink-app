<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::with('categorys', 'author')->get();
        return response()->json($books);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = Validator::make($request->all(), [
            'title' => 'required|string|unique:books,title|min:3',
            'date_release' => 'required|date',
            'pages' => 'required|integer|min:1',
            'ISBN' => 'required|string|unique:books,ISBN',
            'language' => 'required|string',
            'summary' => 'required|string',
            'stock' => 'required|integer|min:0',
            'image' => 'nullable|integer',
            'categorys' => 'nullable|array',
            'author_id' => 'required|exists:authors,id',
        ]);

        if ($validateData->fails()) {
            return response()->json($validateData->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $book = Book::create($request->only('title', 'date_release', 'pages', 'ISBN', 'language', 'summary', 'stock', 'image','author_id'));

        if ($request->has('categorys')) {
            $book->categorys()->attach($request->input('categorys'));
        }
        return response()->json(['message' => 'Book created successfully', 'book' => $book]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $book = Book::with('categorys', 'author')->find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($book);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validateData = Validator::make($request->all(), [
            'title' => [
                'string',
                'min:3',
                Rule::unique('books')->ignore($id),
            ],
            'ISBN' => [
                'string',
                Rule::unique('books')->ignore($id),
            ],
            'date_release' => 'date',
            'pages' => 'integer|min:1',
            'language' => 'string',
            'summary' => 'string',
            'stock' => 'integer|min:0',
            'image' => 'nullable|integer',
            'author_id' => 'nullable|exists:authors,id',
        ]);

        if ($validateData->fails()) {
            return response()->json($validateData->errors(), 400);
        }

        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], Response::HTTP_NOT_FOUND);
        }

        $book->update($request->all());
        if ($request->has('categorys')) {
            $book->categorys()->sync($request->input('categorys'));
        }
        return response()->json(['message' => 'Book updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], Response::HTTP_NOT_FOUND);
        }

        $book->delete();

        return response()->json(['message' => 'Book deleted successfully']);
    }
}
