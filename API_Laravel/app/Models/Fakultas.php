<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fakultas extends Model
{
    use HasFactory;

    protected $fillable = ['nama', 'dekan', 'email'];

    public function prodi()
    {
        return $this->hasMany(Prodi::class, 'id_fakultas');
    }
    protected $table = 'fakultas';
}