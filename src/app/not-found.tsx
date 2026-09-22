import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card bg-base-100 shadow-2xl max-w-lg w-full">
        <div className="card-body items-center text-center py-12">
          {/* 404 */}
          <div className="text-8xl font-extrabold text-primary">404</div>

          {/* Icon */}
          <div className="text-6xl mt-4">📚</div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold mt-4">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-base-content/60 max-w-md mt-2">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. The
            page may have been removed, renamed, or doesn&apos;t exist.
          </p>

          {/* Buttons */}
          <div className="card-actions mt-6 gap-3">
            <Link href="/" className="btn btn-primary">
              🏠 Go Home
            </Link>

            <button className="btn btn-outline">← Go Back</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
