<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('surat', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_prodi')->constrained('prodi')->onDelete('cascade');
            $table->string('surat');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('surat');
    }
};
