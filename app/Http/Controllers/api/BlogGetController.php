<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// models
use App\Models\Blog\DatBlog;

class BlogGetController extends Controller
{
    public function index() {
        $blogs = DatBlog::all();
        return response()->json($blogs, 200);
    }
}
