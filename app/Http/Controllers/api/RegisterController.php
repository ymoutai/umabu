<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog\DatBlog;
use Illuminate\Support\Facades\DB;

class RegisterController extends Controller
{
    public function store(Request $request) {
        $req = $request->all();
        
        // validation

        // 登録
        DB::beginTransaction();
        try {
            DatBlog::create([
                'title' => $req['title'],
                'text'  => $req['text']
            ]);
            DB::commit();
        }catch(Exception $e) {
            DB::rollback();
            return response()->json($e, 500);
        }

        return response()->json('OK', 200);
    }
}
