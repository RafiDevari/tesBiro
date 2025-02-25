"use client";

import { useEffect, useState } from "react";

export default function TableBesar() {
    interface DataItem {
        nama_prodi: string;
        strata: string;
        akreditasi: string;
        surat: string;
    }

    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                                    Error fetching data
                                </tr>
                            ) : (
                                data.map((item, index) => (
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
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-yellow-300 p-4">ini nanti pagination</div>
        </div>
    );
}
