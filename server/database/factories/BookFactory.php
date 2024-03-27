<?php

namespace Database\Factories;

use App\Models\Author;
use App\Models\ImageBookCover;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $authors = Author::select('id')->get();
        $image = ImageBookCover::factory()->create();
        return [
            'title' => fake()->unique()->sentence(3),
            'date_release' => fake()->date(),
            'pages' => fake()->numberBetween(10, 500),
            'ISBN' => fake()->unique()->isbn10(),
            'language' => fake()->languageCode(),
            'summary' => fake()->text(),
            'stock' => fake()->numberBetween(0, 20),
            'image' => $image->id,
            'author_id' => fake()->randomElement($authors)

        ];
    }
}
