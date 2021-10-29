<?php

namespace App\Models\Blog;

use Illuminate\Database\Eloquent\Model;

class DatBlog extends Model
{
    protected $table = 'blogs';

    protected $guarded = [
        'id'
    ];
}
