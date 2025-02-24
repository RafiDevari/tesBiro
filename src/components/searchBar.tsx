interface SearchBarProps {
    title: string;
}

export default function SearchBar({title}: SearchBarProps) {
    return (
      <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 w-fit">
        <input
          type="text"
          placeholder={title}
          className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-80"
        />
        <button>
            <img src="/images/searchIcon.svg" alt="Search" width="16" height="16" className="ml-2" />
        </button>
      </div>
    );
  }
  