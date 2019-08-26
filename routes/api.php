<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/ideas/getall', 'IdeaController@getAll')->name('ideas.getall');
Route::resource('ideas', 'IdeaController');
Route::get('/thoughts/getall', 'ThoughtController@getAll')->name('thoughts.getall');;
Route::resource('thoughts', 'ThoughtController');
Route::resource('solutions', 'SolutionController');
Route::resource('products', 'ProductController');
