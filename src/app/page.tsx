import Image from "next/image";
import Card from "@/components/card";
import myImage from "@/public/images/bunga.png";
import SearchBar from "@/components/searchBar";

export default function HomePage() {
  return (
    <main className="bg-blue-300 my-12 mx-16 flex flex-col gap-4">

        {/* Komponen Card */}
        <div>
          <Card title="Sertifikat Akreditasi"/>
        </div>

        {/* Text */}
        <div>
          <p>
            UI GreenMetric World University Rankings adalah peringkat universitas yang berfokus pada kinerja universitas dalam pengelolaan lingkungan dan keberlanjutan. Peringkat diiterbitkan setiap tahun oleh Universitas Indonesia berdasarkan indikator seperti energi, limbah, transportasi, air, dan pendidikan lingkungan.
          </p>
        </div>

        {/* Search Bar */}
        <div>
          <SearchBar title="Cari Program Studi" />
        </div>

    </main>
  );
}