import { getArticles } from "../../lib/sheets";
import Image from "next/image";
import Link from "next/link";

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const articles = await getArticles();
  const article = articles.find((a) => String(a.id) === String(id));

  if (!article) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-6">
        <p>ಲೇಖನ ಕಂಡುಬಂದಿಲ್ಲ</p>
        <Link href="/" className="text-red-600 underline">ಹೋಮ್ ಪೇಜ್‌ಗೆ ಹಿಂತಿರುಗಿ</Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-6">
      {/* Back Button */}
      <Link href="/" className="text-red-600 text-sm mb-4 inline-block hover:underline">
        ← ಹಿಂತಿರುಗಿ
      </Link>

      {/* Category */}
      <span className="text-xs text-white bg-red-600 px-2 py-1 rounded">
        {article.category}
      </span>

      {/* Title */}
      <h1 className="text-3xl font-bold mt-3 mb-2">{article.title}</h1>

      {/* Date */}
      <p className="text-xs text-gray-400 mb-4">{article.date}</p>

      {/* Image */}
      {article.image && (
        <div className="relative w-full h-72 mb-6 rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Summary */}
      <p className="text-lg font-medium text-gray-700 mb-4 border-l-4 border-red-600 pl-3">
        {article.summary}
      </p>

      {/* Body */}
      <div className="text-gray-800 leading-8 whitespace-pre-line">
        {article.body}
      </div>
    </main>
  );
}