<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ImageProfile>
 */
class ImageProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $response = Http::get("https://i.pravatar.cc/300");
        $imageData = base64_encode($response->body());
        return [
            'name' => fake()->word() . '.jpg',
            'data' => $imageData,
        ];
    }
}
