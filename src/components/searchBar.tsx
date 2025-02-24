interface SearchBarProps {
    title: string;
}

export default function SearchBar({title}: SearchBarProps) {
    return (
      <div className="border border-gray-500 flex items-center rounded-md px-3 py-2 w-full md:w-fit">
        <input
          type="text"
          placeholder={title}
          className="bg-transparent outline-none placeholder-gray-400 text-xs font-medium font-sans w-full md:w-80"
        />
        <button>
            <img src="/images/searchIcon.svg" alt="Search" width="16" height="16" className="ml-2" />
        </button>
      </div>
    );
  }
  