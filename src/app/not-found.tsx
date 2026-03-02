import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-[#F6F1E9] text-[#1E1C1A]">
        <div className="text-center px-6">
          <h1 className="text-6xl font-light tracking-[0.2em] text-[#B08A62] mb-4">
            404
          </h1>
          <p className="text-lg text-[#6E655B] mb-8">
            Page not found
          </p>
          <Link
            href="/en"
            className="inline-flex items-center px-6 py-3 text-sm tracking-wider uppercase border border-[#B08A62] text-[#B08A62] rounded-full hover:bg-[#B08A62]/5 transition-colors duration-200"
          >
            Go Home
          </Link>
        </div>
      </body>
    </html>
  );
}
