<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::controller(PageController::class)->group(function () {
    Route::get('/', 'home')->name('home');
});

Route::controller(AuthController::class)->group(function () {

    Route::middleware('guest')->group(function () {

        Route::get('/login', 'login')->name('login');
        Route::post('/loginForm', 'loginForm')->name('loginForm');

        Route::get('/register', 'register')->name('register');
        Route::post('/registerForm', 'registerForm')->name('registerForm');

        Route::name('password.')->prefix('password')->group(function () {
            Route::get('/forgot', 'passwordForgot')->name('request');
            Route::post('/email', 'passwordEmail')->name('email');
            Route::get('/reset/{token}', 'passwordReset')->name('reset');
            Route::post('/reset', 'passwordResetForm')->name('resetForm');
        });
    });

    Route::middleware('auth')->group(function () {

        Route::name('verification.')->prefix('verification')->middleware('notVerified')->group(function () {
            Route::get('/notice', 'verificationNotice')->name('notice');
            Route::post('/resend', 'verificationResend')->name('resend');
            Route::get('/email/verify/{id}/{hash}', 'verificationVerify')->name('verify')->middleware('signed');
        });

        Route::post('/logout', 'logout')->name('logout');
    });
});

// Route::middleware(['auth', 'verified'])->group(function () {
// });

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__ . '/settings.php';
