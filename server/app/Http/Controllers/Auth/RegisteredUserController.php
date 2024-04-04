<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\profile;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;
use Laravel\Sanctum\PersonalAccessTokenFactory;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'password_confirmation' => 'required|string|min:8|same:password', // Ensure password_confirmation matches password
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::create([
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        event(new Registered($user));

        return response()->json(['message' => 'User registered successfully.'], 201);
    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $user->load('profile');
            $token = $user->createToken('AuthToken', [
                'id' => $user->id,
                'email' => $user->email,
                'is_admin' => $user->is_admin,
            ])->plainTextToken;
            if ($user->profile) {
                return response()->json([
                    'user' => $user,
                    'token' => $token,
                    'message' => " login successefely welcome back " . $user->profile->user_name
                ], 200);
            } else {
                return response()->json([
                    'user' => $user,
                    'token' => $token,
                    'message' => 'You do not have a profile. Please create one first.'
                ], 200);
            }
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }
}
