<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profile>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $fname=fake()->word();
        $lname=fake()->word();
        
        return [
            'user_id'=>fake()->unique(true)->numberBetween(1,50),
            'f_name'=>$fname,
            'l_name'=>$lname,
            'user_name'=>$fname."_".$lname,
            'phone_number'=>fake()->phoneNumber(),
            'adress'=>fake()->address(),
            'CIN'=>'JF'.fake()->unique()->numberBetween(1000,9999),
            'image'=>fake()->unique(true)->numberBetween(1,50)
        ];
    }
}
