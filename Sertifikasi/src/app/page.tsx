"use client";
import Card from "@/components/Card";
import SearchBar from "@/components/searchBar";
import React, { useState } from "react";
import TableBesar from "@/components/TableSertifikasi";
import TableKecil from "@/components/FilterSertifikasi";

export default function HomePage() {
  const [filters, setFilters] = useState<{ faculties: string[]; strata: string[] }>({
    faculties: [],
    strata: [],
  });

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className=" my-12 mx-8 md:mx-16 flex flex-col gap-4">
      {/* Komponen Card */}
      <header>
        <Card title="Sertifikat Akreditasi" />
      </header>

      {/* Text */}
      <article className="text-sm lg:text-base text-justify">
          UI GreenMetric World University Rankings adalah peringkat universitas yang berfokus pada kinerja universitas dalam pengelolaan lingkungan dan keberlanjutan. Peringkat diterbitkan setiap tahun oleh Universitas Indonesia berdasarkan indikator seperti energi, limbah, transportasi, air, dan pendidikan lingkungan.
      </article>

      {/* Search Bar */}
      <section>
        <SearchBar title="Cari Program Studi" setSearchQuery={setSearchQuery} /> {/* Pass search setter */}
      </section>

      {/* table  */}
      <section className="flex flex-col lg:flex-row-reverse gap-4 lg:gap-16">
        <TableKecil setFilters={(faculties, strata) => setFilters({ faculties, strata })} />

        <TableBesar filters={filters} searchQuery={searchQuery} /> {/* Pass search query */}
      </section> 
    </main>
  );
}
