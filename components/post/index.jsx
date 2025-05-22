"use client";
import React, { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, FilterIcon, BookOpen } from "lucide-react";
import { blogPosts } from "../data";
import Image from "next/image";


const PostPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = ["Frontend", "Git", "Backend", "Dev Tools", "UI/UX"];

  const filteredPosts = blogPosts.filter(post => {
    const matchCategory = selectedCategory ? post.category === selectedCategory : true;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen dark:bg-primary bg-gray-100 py-10 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mt-[5rem] mb-10">
        <h1 className=" text-3xl dark:text-[#ADFF2F]  text-[#22c55e] flex align-middle justify-center font-semibold ">Blog Posts</h1>
      </div>

      {/* Filter/Search */}
      <div className="mb-10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg font-semibold text-black/70 dark:text-slate-50">
            Total Blogs: <span >{blogPosts.length}</span>
            <span className="flex gap-3 ">
              <FilterIcon /> Filter by Category
            </span>
          </h2>
          <div className="w-full sm:max-w-xs">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/70 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-3 py-2 w-full border text-black/70 dark:text-slate-50 bg-white dark:bg-primary dark:border-gray-300 border-black/60 rounded-md focus:outline-none focus:ring-2 dark:focus:ring-[#ADFF2F] focus:ring-[#22c55e]"
              />
            </div>
            <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">
              Eg: frontend (not case sensitive)
            </span>
          </div>

        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-1 rounded-full text-sm ${!selectedCategory ? "dark:bg-[#ADFF2F] bg-[#22c55e] text-gray-700" : "bg-gray-200 text-gray-700"}`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm ${selectedCategory === cat ? "dark:bg-[#ADFF2F] bg-[#22c55e] text-gray-700" : "bg-gray-200 text-gray-700"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      {currentPosts.length === 0 ? (
        <div className="text-center text-gray-500 py-16 flex flex-col items-center justify-center">
          <Image
            src="/assets/error/no-result.svg"
            alt="No result found"
            width={200}
            height={200}
            className="mb-6"
          />
          <p className="text-lg">No Data was Found!</p>
        </div>

      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map(post => (
            <div key={post.id} className="bg-white dark:bg-[#27272c] rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <div className="h-48 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <span className="inline-block dark:bg-slate-50 bg-black/70 text-white dark:text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black/70 dark:text-white mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-black/70 dark:text-slate-50 mb-4 line-clamp-3">{post.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a href={post.link} target="_blank" className="flex items-center dark:text-[#ADFF2F]  text-[#22c55e]">
                    <span>Read More</span>
                    <BookOpen size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {filteredPosts.length > postsPerPage && (
        <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">

          {/* Previous button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
              } text-gray-700`}
          >
            <ChevronLeft size={16} />
          </button>

          {/* Page number buttons */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-2 rounded ${currentPage === i + 1
                  ? "dark:bg-[#ADFF2F] bg-[#22c55e] text-gray-700"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
              } text-gray-700`}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

    </div>
  );
};

export default PostPage;
