function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;