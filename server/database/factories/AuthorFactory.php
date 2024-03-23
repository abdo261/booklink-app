<?php

namespace Database\Factories;

use App\Models\ImageAuthor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Author>
 */
class AuthorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $image = ImageAuthor::select('id')->get();
        return [
            'name' => fake()->unique()->name(),
            'date_of_birth' => fake()->date(),
            'image' => fake()->unique()->randomElement($image)
        ];
    }
}
