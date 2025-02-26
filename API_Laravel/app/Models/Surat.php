<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Surat extends Model
{
    use HasFactory;

    protected $fillable = ['id_prodi', 'surat'];

    public function prodi()
    {
        return $this->belongsTo(Prodi::class, 'id_prodi');
    }
    protected $table = 'surat';
}
