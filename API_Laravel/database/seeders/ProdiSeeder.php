<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProdiSeeder extends Seeder
{
    public function run()
    {
        DB::table('prodi')->insert([
            ['id_fakultas' => 1, 'nama' => 'Teknik Informatika', 'strata' => 'Master', 'akreditasi' => 'A'],
            ['id_fakultas' => 1, 'nama' => 'Teknik Sipil', 'strata' => 'Sarjana', 'akreditasi' => 'B'],
        
            ['id_fakultas' => 2, 'nama' => 'Ilmu Hukum', 'strata' => 'Doktoral', 'akreditasi' => 'A'],
            ['id_fakultas' => 2, 'nama' => 'Hukum Tata Negara', 'strata' => 'Diploma', 'akreditasi' => 'B'],
        
            ['id_fakultas' => 3, 'nama' => 'Kedokteran Umum', 'strata' => 'Sarjana', 'akreditasi' => 'A'],
            ['id_fakultas' => 3, 'nama' => 'Kedokteran Gigi', 'strata' => 'Master', 'akreditasi' => 'A'],
        
            ['id_fakultas' => 4, 'nama' => 'Manajemen', 'strata' => 'Diploma', 'akreditasi' => 'A'],
            ['id_fakultas' => 4, 'nama' => 'Akuntansi', 'strata' => 'Sarjana', 'akreditasi' => 'A'],
        
            ['id_fakultas' => 5, 'nama' => 'Sosiologi', 'strata' => 'Doktoral', 'akreditasi' => 'B'],
            ['id_fakultas' => 5, 'nama' => 'Ilmu Komunikasi', 'strata' => 'Sarjana', 'akreditasi' => 'A'],
        
            ['id_fakultas' => 6, 'nama' => 'Matematika', 'strata' => 'Master', 'akreditasi' => 'A'],
            ['id_fakultas' => 6, 'nama' => 'Fisika', 'strata' => 'Diploma', 'akreditasi' => 'B'],
        
            ['id_fakultas' => 7, 'nama' => 'Agribisnis', 'strata' => 'Sarjana', 'akreditasi' => 'A'],
            ['id_fakultas' => 7, 'nama' => 'Agroteknologi', 'strata' => 'Doktoral', 'akreditasi' => 'A'],
        
            ['id_fakultas' => 8, 'nama' => 'Kehutanan', 'strata' => 'Diploma', 'akreditasi' => 'A'],
            ['id_fakultas' => 8, 'nama' => 'Konservasi Sumber Daya Alam', 'strata' => 'Master', 'akreditasi' => 'B'],
        
            ['id_fakultas' => 9, 'nama' => 'Sistem Informasi', 'strata' => 'Sarjana', 'akreditasi' => 'A'],
            ['id_fakultas' => 9, 'nama' => 'Teknologi Informasi', 'strata' => 'Doktoral', 'akreditasi' => 'B'],
        
            ['id_fakultas' => 10, 'nama' => 'Psikologi Klinis', 'strata' => 'Diploma', 'akreditasi' => 'A'],
            ['id_fakultas' => 10, 'nama' => 'Psikologi Industri', 'strata' => 'Master', 'akreditasi' => 'B'],
        
            ['id_fakultas' => 11, 'nama' => 'Pendidikan Bahasa Inggris', 'strata' => 'Sarjana', 'akreditasi' => 'A'],
            ['id_fakultas' => 11, 'nama' => 'Pendidikan Matematika', 'strata' => 'Doktoral', 'akreditasi' => 'A'],
        
            ['id_fakultas' => 12, 'nama' => 'Keperawatan', 'strata' => 'Master', 'akreditasi' => 'A'],
            ['id_fakultas' => 12, 'nama' => 'Kebidanan', 'strata' => 'Diploma', 'akreditasi' => 'B'],
        
            ['id_fakultas' => 13, 'nama' => 'Kesehatan Lingkungan', 'strata' => 'Sarjana', 'akreditasi' => 'A'],
            ['id_fakultas' => 13, 'nama' => 'Gizi Masyarakat', 'strata' => 'Doktoral', 'akreditasi' => 'B'],
        
            ['id_fakultas' => 14, 'nama' => 'Seni Musik', 'strata' => 'Diploma', 'akreditasi' => 'A'],
            ['id_fakultas' => 14, 'nama' => 'Seni Tari', 'strata' => 'Master', 'akreditasi' => 'A'],
        
            ['id_fakultas' => 15, 'nama' => 'Sastra Inggris', 'strata' => 'Sarjana', 'akreditasi' => 'A'],
            ['id_fakultas' => 15, 'nama' => 'Sastra Jepang', 'strata' => 'Diploma', 'akreditasi' => 'B'],
        ]);
        
        
    }
}
