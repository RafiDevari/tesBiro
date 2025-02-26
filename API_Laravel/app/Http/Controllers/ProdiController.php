<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prodi;

class ProdiController extends Controller
{
    public function index()
    {
        return Prodi::with('fakultas', 'surat')->get();
    }

    public function show(Prodi $prodi)
    {
        return $prodi->load('fakultas', 'surat');
    }
}

