"use client";

import { useState } from "react";

export default function TableKecil() {
  const [isFakultasOpen, setIsFakultasOpen] = useState(true);
  const [isStrataOpen, setIsStrataOpen] = useState(true);

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

          {isFakultasOpen && (
            <div className="flex flex-col gap-2 font-medium">
              <div className="flex gap-4 font-medium">
                <div className="justify-center items-center flex">
                  <input type="checkbox" className="w-4 h-4" />
                </div>
                <div>Fakultas Kedokteran</div>
              </div>
              <div className="flex gap-4 font-medium">
                <div className="justify-center items-center flex">
                  <input type="checkbox" className="w-4 h-4" />
                </div>
                <div>Fakultas Hukum</div>
              </div>
            </div>
          )}
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

          {isStrataOpen && (
            <div className="flex flex-col font-medium gap-2">
              <div className="flex gap-4">
                <div className="justify-center items-center flex">
                  <input type="checkbox" className="w-4 h-4" />
                </div>
                <div>Diploma</div>
              </div>
              <div className="flex gap-4">
                <div className="justify-center items-center flex">
                  <input type="checkbox" className="w-4 h-4" />
                </div>
                <div>Sarjana</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
