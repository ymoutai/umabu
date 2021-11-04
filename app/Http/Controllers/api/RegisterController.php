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

        // ファイル保存
        // return response()->json($req, 200);
        // $filename = $req['image']->name;
        $image_path = $req['image']->store('public');

        // 登録
        DB::beginTransaction();
        try {
            DatBlog::create([
                'title' => $req['title'],
                'text'  => $req['text'],
                'image' => basename($image_path),
            ]);
            DB::commit();
        }catch(Exception $e) {
            DB::rollback();
            return response()->json($e, 500);
        }

        return response()->json('OK', 200);
    }
}
