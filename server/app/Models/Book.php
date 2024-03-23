<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
   protected $fillable = [
        'title' ,
        'date_release',
        'pages' ,
        'ISBN',
        'language',
        'summary' ,
        'stock',
        'image',
       'author_id'
    ];
    public function categorys (){
        return $this->belongsToMany(Category::class);
    }
    public function author()
    {
        return $this->belongsTo(Author::class);
    }
    
}
