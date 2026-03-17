import { getArticles } from "./lib/sheets";
import Link from "next/link";
import Image from "next/image";

const categoryColors = {
  "ಸರ್ಕಾರ": "bg-red-600",
  "ರಾಜಕೀಯ": "bg-blue-600",
  "ಸ್ಥಳೀಯ": "bg-green-600",
};

export default async function Home() {
  const news = await getArticles();

  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      {/* Header */}
      <header className="border-b pb-4 mb-6 text-center">
        <h1 className="text-4xl font-bold text-red-700">ಕನ್ನಡ ಸುದ್ದಿ</h1>
        <p className="text-gray-500 text-sm mt-1">ನಿಖರ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಸುದ್ದಿ</p>
      </header>

      {/* Category Bar */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {["ಎಲ್ಲಾ", "ಸರ್ಕಾರ", "ರಾಜಕೀಯ", "ಸ್ಥಳೀಯ"].map((cat) => (
          <button
            key={cat}
            className="px-4 py-1 rounded-full border text-sm hover:bg-red-600 hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <Link href={`/article/${item.id}`} key={item.id}>
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer h-full">
              {item.image && (
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <span className={`text-xs text-white ${categoryColors[item.category] || "bg-gray-600"} px-2 py-1 rounded`}>
                  {item.category}
                </span>
                <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                <p className="text-gray-600 mt-1 text-sm line-clamp-2">{item.summary}</p>
                <p className="text-xs text-gray-400 mt-2">{item.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}