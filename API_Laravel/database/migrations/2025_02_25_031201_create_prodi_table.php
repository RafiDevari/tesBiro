<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('prodi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_fakultas')->constrained('fakultas')->onDelete('cascade');
            $table->string('nama');
            $table->string('strata');
            $table->string('akreditasi');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('prodi');
    }
};

