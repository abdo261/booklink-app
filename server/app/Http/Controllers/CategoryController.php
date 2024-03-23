<?php

namespace App\Http\Controllers;

use App\Models\Category;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Category::with("books")->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = Validator::make($request->only('name', 'image'), [
            'name' => 'required|string|min:3',
            'image' => 'nullable|numeric',

        ]);
        if ($validateData->fails()) {
            return response()->json($validateData->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        $category = Category::create($request->only(['name', 'image']));

        return response()->json(['message' => 'Category created successfully', 'category' => $category]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::with('books')->find($id);
        if (!$category) {
            return response()->json(['message' => 'Category not found'], Response::HTTP_NOT_FOUND);
        }
        return response()->json($category);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validateData = Validator::make($request->only('name', 'image'), [
            'name' => 'string|min:3', 'image' => 'nullable|numeric'
        ]);
        if ($validateData->fails()) {
            return response()->json($validateData->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        $category = Category::find($id);
        if (!$category) {
            return response()->json(['message' => 'Category not found'], Response::HTTP_NOT_FOUND);
        }
        $category->update($request->only(['name', 'image']));

        return response()->json(['message' => 'Category updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json(['message' => 'Category not found'], Response::HTTP_NOT_FOUND);
        }
        $category->delete();

        return response()->json(['message' => 'Category deleted successfully']);
    }
}
