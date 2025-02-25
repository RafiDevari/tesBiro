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
    setFilters(updated, selectedStrata); // Pass faculty names instead of IDs
  };

  // Handle Strata Checkbox Change
  const handleStrataChange = (strata: string) => {
    const updated = selectedStrata.includes(strata)
      ? selectedStrata.filter((s) => s !== strata)
      : [...selectedStrata, strata];

    setSelectedStrata(updated);
    setFilters(selectedFaculties, updated);
  };

  return (
    <div className="font-semibold w-full lg:w-1/4 overflow-x-auto bg-gray-100 rounded-lg p-4 flex flex-col gap-4 h-fit">
      <div className="text-green-700">Filter</div>

      <div className="flex flex-col gap-2 text-sm">
        {/* Fakultas Section */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div>Fakultas</div>
            <button onClick={() => setIsFakultasOpen(!isFakultasOpen)}>
              <img
                src="/images/arrow.svg"
                alt=""
                className={`transition-transform duration-300 ${
                  isFakultasOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {isFakultasOpen &&
            faculties.map((faculty) => (
              <div key={faculty.id} className="flex gap-4">
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

        {/* Strata Section */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div>Strata</div>
            <button onClick={() => setIsStrataOpen(!isStrataOpen)}>
              <img
                src="/images/arrow.svg"
                alt=""
                className={`transition-transform duration-300 ${
                  isStrataOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {isStrataOpen &&
            ["Diploma", "Sarjana"].map((strata) => (
              <div key={strata} className="flex gap-4">
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
  );
}