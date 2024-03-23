<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'user_name',
        'phone_number',
        'adresse',
        'CIN',
        'f_name',
        'l_name',
        'image'
    ];
    public function User(){
        return $this->belongsTo(User::class);
    }
    public function following()
    {
        return $this->belongsToMany(Profile::class, 'follows', 'follower_id', 'followed_id')->withTimestamps();
    }

    // Define the followers relationship
    public function followers()
    {
        return $this->belongsToMany(Profile::class, 'follows', 'followed_id', 'follower_id')->withTimestamps();
    }
    public function follow(Profile $profileToFollow)
    {
        $this->following()->attach($profileToFollow->id);
    }

    // Unfollow another profile
    public function unfollow(Profile $profileToUnfollow)
    {
        $this->following()->detach($profileToUnfollow->id);
    }
  
}
