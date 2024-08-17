<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginLogoutController;

Route::post('/create_user',[UserController::class,'createUser']);
Route::post('/login',[LoginLogoutController::class,'login']);
Route::middleware('auth:sanctum')->post('/logout', [LoginLogoutController::class, 'logout']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
