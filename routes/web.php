<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



// Frontend Controller
Route::get('blog', [App\Http\Controllers\BlogPageController::class , 'showBlogPage']);




// Admin template load
Route::get('/admin/login', [App\Http\Controllers\AdminController::class, 'showAdminLoginForm']) -> name('admin.login');
Route::get('/admin/register', [App\Http\Controllers\AdminController::class, 'showAdminRegisterForm']) -> name('admin.register');
Route::get('/admin/dashboard', [App\Http\Controllers\AdminController::class, 'showAdminDashboard']) -> name('admin.dashboard');

Route::post('admin/login', [App\Http\Controllers\Auth\LoginController::class, 'login']) -> name('admin.login');
Route::post('admin/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout']) -> name('admin.logout');
Route::post('admin/register', [App\Http\Controllers\Auth\RegisterController::class, 'register']) -> name('admin.register');



// Post Route
Route::resource('post' , 'App\Http\Controllers\PostController');
Route::get('post-trash' , 'App\Http\Controllers\PostController@postTrashShow') -> name('post.trash');
Route::get('post-trash-update/{id}' , 'App\Http\Controllers\PostController@postTrashUpdate') -> name('post.trash.update');



// Post Category Route
Route::resource('category' , 'App\Http\Controllers\CategoryController');
Route::get('category/status-inactive/{id}' , 'App\Http\Controllers\CategoryController@statusUpdateInactive');
Route::get('category/status-active/{id}' , 'App\Http\Controllers\CategoryController@statusUpdateActive');




// Post Tag Route
Route::resource('tag' , 'App\Http\Controllers\TagController');

