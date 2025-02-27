"use client";

import { useState, useEffect } from "react";

interface TableKecilProps {
  setFilters: (faculties: string[], strata: string[]) => void;
}

export default function TableKecil({ setFilters }: TableKecilProps) {
  interface Faculty {
    id: string;
    nama: string;
  }

  const [faculties, setFaculties] = useState<Faculty[]>([]);
  const [selectedFaculties, setSelectedFaculties] = useState<string[]>([]);
  const [selectedStrata, setSelectedStrata] = useState<string[]>([]);
  const [isFakultasOpen, setIsFakultasOpen] = useState(false);
  const [isStrataOpen, setIsStrataOpen] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/faculties")
      .then((res) => res.json())
      .then((data) => setFaculties(data))
      .catch((error) => console.error("Error fetching faculties:", error));
  }, []);

  const handleFacultyChange = (facultyName: string) => {
    const updated = selectedFaculties.includes(facultyName)
      ? selectedFaculties.filter((f) => f !== facultyName)
      : [...selectedFaculties, facultyName];

    setSelectedFaculties(updated);
    setFilters(updated, selectedStrata);
  };

  const handleStrataChange = (strata: string) => {
    const updated = selectedStrata.includes(strata)
      ? selectedStrata.filter((s) => s !== strata)
      : [...selectedStrata, strata];

    setSelectedStrata(updated);
    setFilters(selectedFaculties, updated);
  };

  return (  
    <div className="font-semibold w-full lg:w-1/4 overflow-x-auto bg-gray-100/70 rounded-lg p-4 flex flex-col gap-4 h-fit">
      <div className="text-green-700">Filter</div>

      <div className="flex flex-col gap-4 text-sm">
        {/* Fakultas */}
        <div className="flex flex-col">
          <button
            onClick={() => setIsFakultasOpen(!isFakultasOpen)}
            className="flex justify-between items-center hover"
          >
            <div>Fakultas</div>
            <div>
              <img
                src="/images/arrow.svg"
                alt=""
                className={`transition-transform duration-300 h-full ${isFakultasOpen ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isFakultasOpen ? " opacity-100 max-h-[2000px]" : "max-h-0 opacity-0"
            }`}
          >
            {faculties.map((faculty) => (
              <div key={faculty.id} className="flex gap-4 mt-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selectedFaculties.includes(faculty.id)}
                  onChange={() => handleFacultyChange(faculty.id)}
                />
                <div className="font-normal text-gray-600">{faculty.nama}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Strata */}
        <div className="flex flex-col">
          <button
            onClick={() => setIsStrataOpen(!isStrataOpen)}
            className="flex justify-between items-center"
          >
            <div>Strata</div>
            <div>
              <img
                src="/images/arrow.svg"
                alt=""
                className={`transition-transform duration-300 h-full ${isStrataOpen ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isStrataOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {["Diploma", "Sarjana", "Master", "Doktoral"].map((strata) => (
              <div key={strata} className="flex gap-4 mt-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selectedStrata.includes(strata)}
                  onChange={() => handleStrataChange(strata)}
                />
                <div className="font-normal text-gray-600">{strata}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}