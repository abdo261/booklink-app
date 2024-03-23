<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ImageAuthorController;
use App\Http\Controllers\ImageBookCoverController;
use App\Http\Controllers\ImageCategoryController;
use App\Http\Controllers\ImagePostController;
use App\Http\Controllers\ImageProfileController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('images')->group(function () {
    Route::resource('authors', ImageAuthorController::class)->except('index');
    Route::resource('book_covers', ImageBookCoverController::class)->except('index');
    Route::resource('categorys', ImageCategoryController::class)->except('index');
    Route::resource('posts', ImagePostController::class)->except('index');
    Route::resource('profile', ImageProfileController::class)->except('index');
});

Route::prefix('categorys')->group(function () {
    Route::get('/', [CategoryController::class, 'index']);
    Route::post('/', [CategoryController::class, 'store']);
    Route::get('/{id}', [CategoryController::class, 'show']);
    Route::match(['put', 'patch'], '/{id}', [CategoryController::class, 'update']);
    Route::delete('/{id}', [CategoryController::class, 'destroy']);
});
Route::prefix('books')->group(function () {
    Route::get('/', [BookController::class, 'index']);
    Route::post('/', [BookController::class, 'store']);
    Route::get('/{id}', [BookController::class, 'show']);
    Route::match(['put', 'patch'], '/{id}', [BookController::class, 'update']);
    Route::delete('/{id}', [BookController::class, 'destroy']);
});
Route::prefix('authors')->group(function () {
    Route::get('/', [AuthorController::class, 'index']);
    Route::post('/', [AuthorController::class, 'store']);
    Route::get('/{id}', [AuthorController::class, 'show']);
    Route::match(['put', 'patch'], '/{id}', [AuthorController::class, 'update']);
    Route::delete('/{id}', [AuthorController::class, 'destroy']);
});
Route::prefix('posts')->group(function () {
    Route::get('/', [PostController::class, 'index']);
    Route::post('/', [PostController::class, 'store']);
    Route::get('/{id}', [PostController::class, 'show']);
    Route::match(['put', 'patch'], '/{id}', [PostController::class, 'update']);
    Route::delete('/{id}', [PostController::class, 'destroy']);
});
Route::prefix('comments')->group(function () {
    Route::get('/', [CommentController::class, 'index']);
    Route::post('/', [CommentController::class, 'store']);
    Route::get('/{id}', [CommentController::class, 'show']);
    Route::match(['put', 'patch'], '/{id}', [CommentController::class, 'update']);
    Route::delete('/{id}', [CommentController::class, 'destroy']);
});
Route::prefix('likes')->group(function () {
    Route::get('/', [LikeController::class, 'index']);
    Route::post('/', [LikeController::class, 'store']);
    Route::delete('/{id}', [LikeController::class, 'destroy']);
});
Route::prefix('profiles')->group(function () {
    Route::get('/', [ProfileController::class, 'index']);
    Route::post('/', [ProfileController::class, 'store']);
    Route::get('/{id}', [ProfileController::class, 'show']);
    Route::match(['put', 'patch'], '/follow/{id}', [ProfileController::class, 'followProfile']);
    Route::match(['put', 'patch'], '/unfollow/{id}', [ProfileController::class, 'unfollowProfile']);
    Route::delete('/{id}', [ProfileController::class, 'destroy']);
});