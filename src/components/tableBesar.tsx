"use client";

import { useEffect, useState } from "react";

interface TableBesarProps {
  filters: { faculties: string[]; strata: string[] };
  searchQuery: string;
}

export default function TableBesar({ filters, searchQuery }: TableBesarProps) {
  interface DataItem {
    nama_prodi: string;
    strata: string;
    akreditasi: string;
    surat: string;
    fakultas_id: string;
  }

  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/data-surat")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchQuery, itemsPerPage]);

  const filteredData = data.filter(
    (item) =>
      (filters.faculties.length === 0 || filters.faculties.includes(item.fakultas_id)) &&
      (filters.strata.length === 0 || filters.strata.includes(item.strata)) &&
      item.nama_prodi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [1];
    if (totalPages <= 5) {
      for (let i = 2; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage > 3) pages.push("...");
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="w-full lg:w-3/4 flex flex-col gap-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="w-full bg-green-400/10 text-green-800 text-sm">
                <th className="text-start pl-4 py-2">Program Studi</th>
                <th className="text-start pl-4 py-2">Jenjang</th>
                <th className="text-start pl-4 py-2">Akreditasi</th>
                <th className="text-start pl-4 py-2">Surat Keputusan</th>
                <th className="text-start pl-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan={5} className="text-red-500 text-center">Error fetching data</td>
                </tr>
              ) : paginatedData.length > 0 ? (
                paginatedData.map((item, index) => (
                  <tr key={index} className="bg-gray-100 hover:bg-white hover:text-black text-gray-600 text-sm">
                    <td className="pl-4 py-2">{item.nama_prodi}</td>
                    <td className="pl-4 py-2">{item.strata}</td>
                    <td className="pl-4 py-2">{item.akreditasi}</td>
                    <td className="pl-4 py-2">{item.surat}</td>
                    <td className="pr-4">
                      <button className="w-6 h-6">
                        <img className="w-full h-full" src="/images/buku.svg" alt="Detail" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-gray-500 text-center">No matching data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-4 grid grid-rows-2 md:grid-cols-3 md:gap-4">
        <div className="hidden md:flex p-2 text-center"></div>
        <div className="p-2 text-center justify-center flex gap-4">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            <img className="-rotate-90" src="images/arrow.svg" alt="Previous" />
          </button>
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`${currentPage === page ? "font-bold text-black" : "text-gray-600"}`}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              disabled={typeof page !== "number"}
            >
              {page}
            </button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
            <img className="rotate-90" src="images/arrow.svg" alt="Next" />
          </button>
        </div>
        <div className="bg-white p-2 justify-center md:justify-end flex gap-4">
          <div className="text-sm flex items-center">Tampilkan</div>
          <select
            className="font-semibold bg-green-400/30 px-3 gap-2 items-center text-xs rounded-md text-green-700"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>
    </div>
  );
}
