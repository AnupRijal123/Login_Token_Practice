<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; // Import the Hash facade
use App\Models\User;

class UserController extends Controller
{
    public function createUser(Request $request)
    {
        // Directly access request data
        $email = $request->input('email');
        $password = $request->input('password');

        // Perform validation manually
        $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        // Create the user
        $user = User::create([
            'email' => $email,
            'password' => Hash::make($password),
        ]);

        // Return a response
        return response()->json([
            'message' => 'User created successfully!',
            'user' => $user
        ], 201);
    }
}