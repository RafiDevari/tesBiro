interface SearchBarProps {
  title: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ title, setSearchQuery }: SearchBarProps) {
  return (
    <div className="border border-gray-500 flex items-center rounded-md px-3 py-2 w-full lg:w-fit">
      <input
        type="text"
        placeholder={title}
        className="bg-transparent outline-none placeholder-gray-400 text-xs font-medium font-sans w-full lg:w-80"
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
      />
      <button>
        <img src="/images/searchIcon.svg" alt="Search" width="16" height="16" className="ml-2" />
      </button>
    </div>
  );
}
