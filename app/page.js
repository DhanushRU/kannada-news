const news = [
  {
    id: 1,
    category: "ಸರ್ಕಾರ",
    title: "ಆಗಸ್ಟ್ ತಿಂಗಳಿನಿಂದ ಟೋಲ್ ಶುಲ್ಕ ಹೆಚ್ಚಳ",
    summary: "ಕೇಂದ್ರ ಸರ್ಕಾರವು ಆಗಸ್ಟ್ ತಿಂಗಳಿನಿಂದ ವಾರ್ಷಿಕ ಟೋಲ್ ಶುಲ್ಕವನ್ನು ಹೆಚ್ಚಿಸಲು ಯೋಜಿಸಿದೆ.",
    date: "ಮಾರ್ಚ್ 15, 2026",
  },
  {
    id: 2,
    category: "ರಾಜಕೀಯ",
    title: "ಕರ್ನಾಟಕ ವಿಧಾನಸಭೆಯಲ್ಲಿ ಹೊಸ ಮಸೂದೆ ಮಂಡನೆ",
    summary: "ರಾಜ್ಯ ಸರ್ಕಾರವು ಇಂದು ವಿಧಾನಸಭೆಯಲ್ಲಿ ಹೊಸ ಶಿಕ್ಷಣ ಮಸೂದೆಯನ್ನು ಮಂಡಿಸಿದೆ.",
    date: "ಮಾರ್ಚ್ 15, 2026",
  },
  {
    id: 3,
    category: "ಸ್ಥಳೀಯ",
    title: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಮೆಟ್ರೋ ವಿಸ್ತರಣೆ ಕಾಮಗಾರಿ ಚಾಲನೆ",
    summary: "ಬೆಂಗಳೂರು ಮೆಟ್ರೋ ರೈಲು ನಿಗಮವು ಹೊಸ ಮಾರ್ಗದ ನಿರ್ಮಾಣ ಕಾರ್ಯವನ್ನು ಪ್ರಾರಂಭಿಸಿದೆ.",
    date: "ಮಾರ್ಚ್ 14, 2026",
  },
  {
    id: 4,
    category: "ಸರ್ಕಾರ",
    title: "ರೈತರಿಗೆ ಹೊಸ ಸಹಾಯಧನ ಯೋಜನೆ ಘೋಷಣೆ",
    summary: "ಕರ್ನಾಟಕ ಸರ್ಕಾರವು ರೈತರಿಗೆ ಪ್ರತಿ ಎಕರೆಗೆ ₹5000 ಸಹಾಯಧನ ನೀಡುವ ಯೋಜನೆ ಘೋಷಿಸಿದೆ.",
    date: "ಮಾರ್ಚ್ 14, 2026",
  },
];

const categoryColors = {
  "ಸರ್ಕಾರ": "bg-red-600",
  "ರಾಜಕೀಯ": "bg-blue-600",
  "ಸ್ಥಳೀಯ": "bg-green-600",
};

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-6">
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
      <div className="grid gap-6 sm:grid-cols-2">
        {news.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <span className={`text-xs text-white ${categoryColors[item.category]} px-2 py-1 rounded`}>
              {item.category}
            </span>
            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            <p className="text-gray-600 mt-1 text-sm">{item.summary}</p>
            <p className="text-xs text-gray-400 mt-2">{item.date}</p>
          </div>
        ))}
      </div>
    </main>
  );
}