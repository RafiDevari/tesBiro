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








        <div className="flex flex-col lg:flex-row-reverse gap-4 md:gap-16">
          {/* Small Table - On Top (Mobile), On Right (Desktop) */}




          <div className="font-semibold w-full lg:w-1/4 overflow-x-auto bg-gray-100 rounded-lg p-4 flex flex-col gap-4">
            <div className="text-green-700 ">
              Filter
            </div>
            <div className="flex flex-col gap-2 text-sm">



              <div className="flex flex-col gap-2">


                <div className="flex justify-between">
                  <div className="">Fakultas</div>
                  <div className=""><button><img src="/images/arrow.svg" alt="" /></button></div>
                </div>

                <div className="flex flex-col gap-2 font-medium">
                  <div className="flex gap-4 font-medium">
                    <div className="justify-center items-center flex">
                      <input type="checkbox" name="" id="" className="w-4 h-4 " />
                    </div>
                    <div>
                      Fakultas Kedokteran
                    </div>
                  </div>
                  <div className="flex gap-4 font-medium">
                    <div className="justify-center items-center flex">
                      <input type="checkbox" name="" id="" className="w-4 h-4 " />
                    </div>
                    <div>
                      Fakultas Hukum
                    </div>
                  </div>
                </div>

                
              </div>



              <div className="flex flex-col gap-2">


                <div className="flex justify-between">
                  <div className="">Strata</div>
                  <div className=""><button><img src="/images/arrow.svg" alt="" /></button></div>
                </div>

                <div className="flex flex-col font-medium gap-2">
                  <div className="flex gap-4">
                    <div className="justify-center items-center flex">
                      <input type="checkbox" name="" id="" className="w-4 h-4 " />
                    </div>
                    <div>
                      Diploma
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="justify-center items-center flex">
                      <input type="checkbox" name="" id="" className="w-4 h-4 " />
                    </div>
                    <div>
                      Sarjana
                    </div>
                  </div>
                </div>

              
              </div>
              



            </div>
          </div>










          {/* Big Table - On Bottom (Mobile), On Left (Desktop) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-4">

            <div className="bg-white rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]"> 
                  <thead>
                    <tr className="w-full bg-green-400/10 text-green-800 text-sm">
                      <th className="text-start pl-4 py-2 ">Program Studi</th>
                      <th className="text-start pl-4 py-2 ">Jenjang</th>
                      <th className="text-start pl-4 py-2 ">Akreditas</th>
                      <th className="text-start pl-4 py-2 ">Surat Keputusan</th>
                      <th className="text-start pl-4 py-2   "></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100 hover:bg-white hover:text-black text-gray-600 text-sm">
                      <td className="pl-4 py-2">Sosiologi</td>
                      <td className="pl-4 py-2">Sarjana</td>
                      <td className="pl-4 py-2">Unggul</td>
                      <td className="pl-4 py-2">No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023</td>
                      <td className="pr-4">
                        <button className="w-6 h-6">
                          <img className="w-full h-full" src="/images/buku.svg" alt="" />
                        </button>
                      </td>
                    </tr>

                    <tr className="bg-gray-100 hover:bg-white hover:text-black text-gray-600 text-sm">
                      <td className="pl-4 py-2">Sosiologi</td>
                      <td className="pl-4 py-2">Sarjana</td>
                      <td className="pl-4 py-2">Unggul</td>
                      <td className="pl-4 py-2">No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023</td>
                      <td className="pr-4">
                        <button className="w-6 h-6">
                          <img className="w-full h-full" src="/images/buku.svg" alt="" />
                        </button>
                      </td>
                    </tr>

                    <tr className="bg-gray-100 hover:bg-white hover:text-black text-gray-600 text-sm">
                      <td className="pl-4 py-2">Sosiologi</td>
                      <td className="pl-4 py-2">Sarjana</td>
                      <td className="pl-4 py-2">Unggul</td>
                      <td className="pl-4 py-2">No. 1239/SK/BAN-PT/Ak.KP/S/IV/2023</td>
                      <td className="pr-4">
                        <button className="w-6 h-6">
                          <img className="w-full h-full" src="/images/buku.svg" alt="" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-300 p-4">
              ini nantik pagination
            </div>

          </div>


          













        </div>

    </main>
  );
}