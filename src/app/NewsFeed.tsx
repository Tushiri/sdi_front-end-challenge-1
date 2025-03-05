import articles from '@/data/articles.json';
import authors from '@/data/authors.json';
import { Article, Author } from "@/type";
import { FaShareAlt } from "react-icons/fa"

export default function Newsfeed() {
  const article: Article = articles[0];
  const author: Author | undefined = authors.find(a => a.id === article.author_id);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Article Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
        {/* Header Image */}
        <div className="relative">
          <img
            src={article.image_url}
            alt="Article Image"
            className="w-full p-5"
          />
          {/* Date Badge */}
          <div className="absolute bottom-0 left-15 flex items-center">
            <div className="bg-red-600 text-white px-4 py-1 transform -skew-x-12 shadow-lg">
              <p className="text-3xl font-bold mt-2">{new Date(article.created_at).getDate()}</p>
              <p className="text-xs pl-2 mb-2 mt-[-8px]">{new Date(article.created_at).toLocaleString('default', { month: 'short' }).toUpperCase()}</p>
            </div>
          </div>
          {/* Share Button */}
          <div className="absolute bottom-[-20px] right-4 flex items-center space-x-2 text-gray-600 cursor-pointer">
            <FaShareAlt className="w-5 h-5" />
            <span className="text-sm font-semibold">SHARE</span>
          </div>
        </div>
        {/* Article Content */}
        <div className="p-6">
          <hr className="border-gray-300 mt-5" />
          <p className="text-red-600 font-semibold">{author?.name}</p>
          <h1 className="text-2xl font-extrabold mt-1 text-black">
            {article.title}
          </h1>
          <p className="text-black mt-2 text-sm">
            {article.body}
          </p>
          <a href="#" className="text-xs text-gray-800 font-semibold mt-3 inline-block relative">
            READ ARTICLE
            <span className="block w-full h-[2px] bg-gray-800 mt-1"></span>
          </a>
          
      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-20">
            <button className="px-3 py-1 border rounded text-gray-500">&lt;</button>
            {[1, 2, '...', 8, 9, 10, 11, 12, 13, 14, '...', 56, 57].map((num, index) => (
              <button
                key={index}
                className={`px-3 py-1 border rounded ${num === 11 ? 'bg-red-600 text-white' : 'text-gray-500'}`}
              >
                {num}
              </button>
            ))}
            <button className="px-3 py-1 border rounded text-gray-500">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

