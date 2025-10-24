import React, { useState } from "react";



export default function SortAndSearch({
  categories,
  onSearch ,
  onFilter  ,
  onSort ,
}) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <header className="w-full bg-white rounded-2xl shadow-md p-4 flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
      {/* Search Input */}
      <div className="w-full md:w-1/3">
        <label className="block text-sm text-gray-600 mb-1">Search Products</label>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleSearch}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Filter Dropdown */}
      <div className="w-full md:w-1/3">
        <label className="block text-sm text-gray-600 mb-1">Filter by Category</label>
        <select
          onChange={(e) => onFilter(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Dropdown */}
      <div className="w-full md:w-1/3">
        <label className="block text-sm text-gray-600 mb-1">Sort by</label>
        <select
          onChange={(e) => onSort(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rating</option>
          <option value="newest">Newest First</option>
        </select>
      </div>
    </header>
  );
}
