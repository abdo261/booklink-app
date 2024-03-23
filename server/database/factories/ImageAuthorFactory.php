<?php

namespace Database\Factories;

use App\Models\Image;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ImageAuthor>
 */
class ImageAuthorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        // $imagePath = public_path('images'); // Assuming your images are stored in the 'images' folder in the public directory
        // $images = File::allFiles($imagePath);

        //     $randomImage = fake()->randomElement($images);
        // $imageName = pathinfo($randomImage->getPathname(), PATHINFO_FILENAME);
        // $imageExtension = $randomImage->getExtension();
        // $imageData = base64_encode(file_get_contents($randomImage->getPathname()));
        $imageNumber = fake()->unique()->randomElement(range(1, 30));
        $response = Http::get("https://randomuser.me/api/portraits/men/{$imageNumber}.jpg");
        $imageData = base64_encode($response->body());
        return [
            'name' => fake()->word() . '.jpg',
            'data' => $imageData,
        ];
    }
}
