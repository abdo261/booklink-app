<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Image;
use App\Models\ImageAuthor;
use App\Models\ImageBookCover;
use App\Models\ImageCategory;
use App\Models\ImagePost;
use App\Models\ImageProfile;
use App\Models\Like;
use App\Models\Post;
use App\Models\Profile;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(50)->create();
        Profile::factory(50)->create();
        // $profiles = Profile::all();
        // $profiles->each(function ($profile) use ($profiles) {
        //     $profile->followers()->attach(
        //         $profiles->random(rand(1, 40))->pluck('id')->toArray()
        //     );
        // });
        
        $currentUserId = auth()->id(); 
        $profiles = Profile::where('id', '!=', $currentUserId)->get(); 
        $profiles->each(function ($profile) use ($profiles, $currentUserId) {
            $followerIds = $profiles->pluck('id')->except($currentUserId)->random(rand(1, min(40, $profiles->count())));
            $followerIds = $followerIds->diff($profile->followers->pluck('id'));
            $profile->followers()->attach($followerIds);
        });

        Post::factory(50)->create();
        Comment::factory(400)->create();
        Like::factory(1000)->create();
        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        Category::factory(10)->create();
        Author::factory(10)->create();
        Book::factory(100)->create();
        $books = Book::all();
        $categories = Category::all();
        $books->each(function ($book) use ($categories) {
            $book->categorys()->attach(
                $categories->random(rand(1, 5))->pluck('id')->toArray()
            );
        });
    }
}
