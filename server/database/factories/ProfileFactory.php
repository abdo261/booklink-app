<?php
namespace Database\Factories;

use App\Models\ImageProfile;
use App\Models\User;
use App\Models\Profile;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::factory()->create();
        $image=ImageProfile::factory()->create();
        $fname = $this->faker->word();
        $lname = $this->faker->word();
        
        return [
            'user_id' => $user->id,
            'f_name' => $fname,
            'l_name' => $lname,
            'user_name' => $fname . "_" . $lname,
            'phone_number' => $this->faker->phoneNumber(),
            'adress' => $this->faker->address(),
            'CIN' => 'JF' . $this->faker->unique()->numberBetween(1000, 9999),
            'image' =>  $image->id
        ];
    }
}
