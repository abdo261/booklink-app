<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ImageAuthorController;
use App\Http\Controllers\ImageBookCoverController;
use App\Http\Controllers\ImageCategoryController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ImagePostController;
use App\Http\Controllers\ImageProfileController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\Cors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register', [RegisteredUserController::class, 'store']);
Route::post('/login', [RegisteredUserController::class, 'login']);
Route::get('/posts/next', [PostController::class, 'indexNextPage']);

Route::prefix('images')->group(function () {
    Route::resource('authors', ImageAuthorController::class)->except('index');
    Route::resource('book_covers', ImageBookCoverController::class)->except('index');
    Route::resource('categorys', ImageCategoryController::class)->except('index');
    Route::resource('posts', ImagePostController::class)->except('index');
    Route::resource('profiles', ImageProfileController::class)->except('index');
});
Route::resource('categorys', CategoryController::class);
Route::resource('books', BookController::class);
Route::resource('authors', AuthorController::class);
Route::resource('posts', PostController::class);
Route::resource('comments', CommentController::class);
Route::resource('profiles', ProfileController::class)->except(['update']);
Route::resource('likes', LikeController::class)->except(['update', 'show']);


Route::get('books-categorys', [BookController::class, 'indexByCategorys']);

Route::get('authors-books',[AuthorController::class,'indexByBooks']);

Route::prefix('profiles')->group(function () {
    Route::match(['put', 'patch'], '/follow/{id}', [ProfileController::class, 'followProfile']);
    Route::match(['put', 'patch'], '/unfollow/{id}', [ProfileController::class, 'unfollowProfile']);
});



Route::post('/sendMessage', [MessageController::class, 'send']);
Route::get('/oldMesssages', [MessageController::class, 'getOldMessages']);
Route::put('/updateUnreadMessages', [MessageController::class, 'updateUnreadMessages']);
Route::delete('/removeAllMessages', [MessageController::class, 'removeAllMessages']);

Route::post('/sendNotification', [NotificationsController::class, 'send']);
Route::get('/oldNotifications', [NotificationsController::class, 'getOldNotifications']);

Route::post('/images/test',[ImageController::class,'store']);
