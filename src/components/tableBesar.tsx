export default function TableBesar() {
    return (
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
    )
}
