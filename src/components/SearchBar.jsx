import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;
    window.open(searchUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        placeholder="百度一下..."
        className="flex-1 p-2 border rounded-l"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
      >
        搜索
      </button>
    </form>
  );
}
