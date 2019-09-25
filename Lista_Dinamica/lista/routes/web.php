<?php

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

Route::resource('/lista_dinamica', 'ListaController');
Route::get('lista_dinamica/{item}/delete', 'ListaController@destroy')->name('lista_dinamica.destroy');
