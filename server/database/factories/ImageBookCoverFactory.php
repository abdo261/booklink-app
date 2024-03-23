<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ImageBookCover>
 */
class ImageBookCoverFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
       
        $imageNumber = fake()->unique()->randomElement(range(1,400));
        $response = Http::get("https://covers.openlibrary.org/b/id/{$imageNumber}-L.jpg");
        $imageData = base64_encode($response->body()); 
        return [
            'name' =>fake()->word(). '.jpg',
            'data' => $imageData,
        ]; 
    }
}
