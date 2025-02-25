"use client";
import Image from "next/image";
import Card from "@/components/card";
import myImage from "@/public/images/bunga.png";
import SearchBar from "@/components/searchBar";
import React, { useState } from "react";
import TableBesar from "@/components/tableBesar";
import TableKecil from "@/components/tableKecil";

export default function HomePage() {
  const [filters, setFilters] = useState<{ faculties: string[]; strata: string[] }>({
    faculties: [],
    strata: [],
  });

  const [searchQuery, setSearchQuery] = useState(""); // Add search state

  return (
    <main className="bg-blue-30 my-12 mx-16 flex flex-col gap-4">
      {/* Komponen Card */}
      <div>
        <Card title="Sertifikat Akreditasi" />
      </div>

      {/* Text */}
      <div>
        <p>
          UI GreenMetric World University Rankings adalah peringkat universitas yang berfokus pada kinerja universitas dalam pengelolaan lingkungan dan keberlanjutan. Peringkat diterbitkan setiap tahun oleh Universitas Indonesia berdasarkan indikator seperti energi, limbah, transportasi, air, dan pendidikan lingkungan.
        </p>
      </div>

      {/* Search Bar */}
      <div>
        <SearchBar title="CARI PROGRAM STUDI" setSearchQuery={setSearchQuery} /> {/* Pass search setter */}
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-4 md:gap-16">
        <TableKecil setFilters={(faculties, strata) => setFilters({ faculties, strata })} />

        <TableBesar filters={filters} searchQuery={searchQuery} /> {/* Pass search query */}
      </div> 
    </main>
  );
}
