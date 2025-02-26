<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fakultas;

class FakultasController extends Controller
{
    public function index()
    {
        return Fakultas::with('prodi')->get();
    }

    public function show(Fakultas $fakultas)
    {
        return $fakultas->load('prodi');
    }
}

