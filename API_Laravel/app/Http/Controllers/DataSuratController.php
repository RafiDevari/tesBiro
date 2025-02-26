<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prodi;
use App\Models\Surat;
use App\Models\Fakultas;

class DataSuratController extends Controller
{
    public function index(Request $request)
    {
        $query = Surat::with('prodi');

        // Apply filters if present
        if ($request->has('fakultas')) {
            $query->whereHas('prodi', function ($q) use ($request) {
                $q->whereIn('id_fakultas', explode(',', $request->fakultas));
            });
        }

        if ($request->has('strata')) {
            $query->whereHas('prodi', function ($q) use ($request) {
                $q->whereIn('strata', explode(',', $request->strata));
            });
        }

        $data = $query->get()->map(function ($surat) {
            return [
                'fakultas_id' => $surat->prodi->fakultas->id,
                'nama_prodi' => $surat->prodi->nama,
                'strata' => $surat->prodi->strata,
                'akreditasi' => $surat->prodi->akreditasi,
                'surat' => $surat->surat
            ];
        });

        return response()->json($data);
    }

    public function faculties()
    {
        $faculties = Fakultas::select('id', 'nama')->get();
        return response()->json($faculties);
    }

}
