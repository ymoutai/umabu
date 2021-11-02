<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/usre', function (Request $request) {
    return $request->user();
});

// 全件取得
Route::get('/blog_get', 'api\BlogGetController@index');
// 1件取得
Route::get('/blog_get/{id}', 'api\BlogGetController@getIdBlog');

// 登録
Route::post('/post', 'api\RegisterController@store');