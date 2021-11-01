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

    public function getIdBlog($id) {
        $blog = DatBlog::where('id', $id)->first();
        return response()->json($blog, 200);
    }
}
