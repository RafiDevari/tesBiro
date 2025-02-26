<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FakultasController;
use App\Http\Controllers\ProdiController;
use App\Http\Controllers\SuratController;
use App\Http\Controllers\DataSuratController;

Route::get('/data-surat', [DataSuratController::class, 'index']);
Route::get('/faculties', [DataSuratController::class, 'faculties']);

Route::get('fakultas', [FakultasController::class, 'index']);
Route::get('fakultas/{fakultas}', [FakultasController::class, 'show']);

Route::get('prodi', [ProdiController::class, 'index']);
Route::get('prodi/{prodi}', [ProdiController::class, 'show']);

Route::get('surat', [SuratController::class, 'index']);
Route::get('surat/{surat}', [SuratController::class, 'show']);
