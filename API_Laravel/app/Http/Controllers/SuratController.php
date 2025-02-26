<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Surat;

class SuratController extends Controller
{
    public function index()
    {
        return Surat::with('prodi')->get();
    }

    public function show(Surat $surat)
    {
        return $surat->load('prodi');
    }
}
