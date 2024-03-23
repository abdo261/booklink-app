<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
       
        return [
            'user_id'=>fake()->unique()->randomElement(range(1,50)),
            'description'=>fake()->sentence(fake()->numberBetween(10,100)),
            'image'=> fake()->randomElement([true,false]) ? fake()->numberBetween(1,50):null
        ];
    }
}
