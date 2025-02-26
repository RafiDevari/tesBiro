<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prodi extends Model
{
    use HasFactory;

    protected $fillable = ['id_fakultas', 'nama', 'strata', 'akreditasi'];

    public function fakultas()
    {
        return $this->belongsTo(Fakultas::class, 'id_fakultas');
    }

    public function surat()
    {
        return $this->hasMany(Surat::class, 'id_prodi');
    }
    protected $table = 'prodi';
}