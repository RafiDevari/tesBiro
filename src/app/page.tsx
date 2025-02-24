import Image from "next/image";
import Card from "@/components/card";
import myImage from "@/public/images/bunga.png";
import SearchBar from "@/components/searchBar";
import React from "react";

export default function HomePage() {
  return (
    <main className="bg-blue-30 my-12 mx-16 flex flex-col gap-4">

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
          <SearchBar title="CARI PROGRAM STUDI" />
        </div>








        <div className="flex flex-col md:flex-row-reverse gap-16">
          {/* Small Table - On Top (Mobile), On Right (Desktop) */}
          <div className="w-full md:w-1/4 overflow-x-auto bg-slate-300 rounded-lg">
            ss
          </div>

          {/* Big Table - On Bottom (Mobile), On Left (Desktop) */}
          <div className="w-full md:w-3/4 overflow-x-auto rounded-lg">

            <table className="w-full ">
              <thead>
                <tr className="w-full bg-green-400/10 text-green-800 text-sm">
                  <th className="text-start px-4 py-2 min-w-[100px] ">Program Studi</th>
                  <th className="text-start px-4 py-2 min-w-[100px] ">Jenjang</th>
                  <th className="text-start px-4 py-2 min-w-[100px] ">Akreditas</th>
                  <th className="text-start px-4 py-2 min-w-[100px] ">Surat Keputusan</th>
                  <th className=""></th>
                </tr>
              </thead>


              <tbody >
                <tr className="bg-gray-100 hover:bg-white hover:text-black text-gray-600 text-sm">
                  <td className="px-4 py-2">Sosiologi</td>
                  <td className="px-4 py-2">Sarjana</td>
                  <td className="px-4 py-2">Unggul</td>
                  <td className="px-4 py-2">No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023</td>
                  <td className="pr-6">
                    <button>
                      <img src="/images/buku.svg" alt="" />
                    </button>
                  </td>

                </tr>
                <tr className="bg-gray-100 hover:bg-white hover:text-black text-gray-600 text-sm">
                <td className="px-4 py-2">Sosiologi</td>
                  <td className="px-4 py-2">Sarjana</td>
                  <td className="px-4 py-2">Unggul</td>
                  <td className="px-4 py-2">No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023</td>
                  <td className="pr-6">
                    <button>
                      <img src="/images/buku.svg" alt="" />
                    </button>
                  </td>

                </tr>
                <tr className="bg-gray-100 hover:bg-white hover:text-black text-gray-600 text-sm">
                  <td className="px-4 py-2">Sosiologi</td>
                  <td className="px-4 py-2">Sarjana</td>
                  <td className="px-4 py-2">Unggul</td>
                  <td className="px-4 py-2">No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023</td>
                  <td className="pr-6">
                    <button>
                      <img src="/images/buku.svg" alt="" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

      
          </div>













        </div>

    </main>
  );
}