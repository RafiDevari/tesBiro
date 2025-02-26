<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FakultasSeeder extends Seeder
{
    public function run()
    {
        DB::table('fakultas')->insert([
            ['nama' => 'Fakultas Teknik', 'dekan' => 'Dr. Andi', 'email' => 'andi@univ.ac.id'],
            ['nama' => 'Fakultas Hukum', 'dekan' => 'Dr. Budi', 'email' => 'budi@univ.ac.id'],
            ['nama' => 'Fakultas Kedokteran', 'dekan' => 'Dr. Siti', 'email' => 'siti@univ.ac.id'],
            ['nama' => 'Fakultas Ekonomi', 'dekan' => 'Dr. Rina', 'email' => 'rina@univ.ac.id'],
            ['nama' => 'Fakultas Ilmu Sosial', 'dekan' => 'Dr. Joko', 'email' => 'joko@univ.ac.id'],
            ['nama' => 'Fakultas MIPA', 'dekan' => 'Dr. Lestari', 'email' => 'lestari@univ.ac.id'],
            ['nama' => 'Fakultas Pertanian', 'dekan' => 'Dr. Agus', 'email' => 'agus@univ.ac.id'],
            ['nama' => 'Fakultas Kehutanan', 'dekan' => 'Dr. Wati', 'email' => 'wati@univ.ac.id'],
            ['nama' => 'Fakultas Ilmu Komputer', 'dekan' => 'Dr. Rizal', 'email' => 'rizal@univ.ac.id'],
            ['nama' => 'Fakultas Psikologi', 'dekan' => 'Dr. Mega', 'email' => 'mega@univ.ac.id'],
            ['nama' => 'Fakultas Pendidikan', 'dekan' => 'Dr. Tono', 'email' => 'tono@univ.ac.id'],
            ['nama' => 'Fakultas Keperawatan', 'dekan' => 'Dr. Fitri', 'email' => 'fitri@univ.ac.id'],
            ['nama' => 'Fakultas Kesehatan Masyarakat', 'dekan' => 'Dr. Slamet', 'email' => 'slamet@univ.ac.id'],
            ['nama' => 'Fakultas Seni', 'dekan' => 'Dr. Diah', 'email' => 'diah@univ.ac.id'],
            ['nama' => 'Fakultas Ilmu Budaya', 'dekan' => 'Dr. Bambang', 'email' => 'bambang@univ.ac.id'],
        ]);
    }
}