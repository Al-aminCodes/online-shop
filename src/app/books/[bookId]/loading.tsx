const BookDetailsLoading = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Back Button Skeleton */}
        <div className="skeleton mb-6 h-5 w-28 bg-slate-800" />

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          <div className="grid md:grid-cols-2">
            {/* ================= IMAGE ================= */}
            <div className="flex min-h-125 items-center justify-center bg-slate-900 p-8 md:p-12">
              <div className="skeleton h-107.5 w-72.5 rounded-2xl bg-slate-800" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="p-6 md:p-10">
              {/* Category */}
              <div className="skeleton h-7 w-20 rounded-full bg-slate-800" />

              {/* Title */}
              <div className="skeleton mt-5 h-12 w-4/5 bg-slate-800" />

              {/* Author */}
              <div className="skeleton mt-4 h-5 w-48 bg-slate-800" />

              {/* Rating */}
              <div className="mt-6 flex gap-3">
                <div className="skeleton h-8 w-20 rounded-full bg-slate-800" />
                <div className="skeleton h-5 w-24 bg-slate-800" />
              </div>

              {/* Divider */}
              <div className="my-7 border-t border-slate-800" />

              {/* About */}
              <div>
                <div className="skeleton mb-4 h-5 w-32 bg-slate-800" />

                <div className="space-y-2">
                  <div className="skeleton h-4 w-full bg-slate-800" />
                  <div className="skeleton h-4 w-full bg-slate-800" />
                  <div className="skeleton h-4 w-11/12 bg-slate-800" />
                  <div className="skeleton h-4 w-4/5 bg-slate-800" />
                </div>
              </div>

              {/* Tags */}
              <div className="mt-7">
                <div className="skeleton mb-3 h-5 w-16 bg-slate-800" />

                <div className="flex gap-2">
                  <div className="skeleton h-7 w-20 rounded-full bg-slate-800" />
                  <div className="skeleton h-7 w-24 rounded-full bg-slate-800" />
                </div>
              </div>

              {/* Book Information */}
              <div className="mt-7 grid grid-cols-2 gap-5 border-y border-slate-800 py-6">
                <div>
                  <div className="skeleton h-3 w-12 bg-slate-800" />
                  <div className="skeleton mt-2 h-5 w-16 bg-slate-800" />
                </div>

                <div>
                  <div className="skeleton h-3 w-16 bg-slate-800" />
                  <div className="skeleton mt-2 h-5 w-28 bg-slate-800" />
                </div>

                <div>
                  <div className="skeleton h-3 w-16 bg-slate-800" />
                  <div className="skeleton mt-2 h-5 w-14 bg-slate-800" />
                </div>

                <div>
                  <div className="skeleton h-3 w-14 bg-slate-800" />
                  <div className="skeleton mt-2 h-5 w-20 bg-slate-800" />
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 flex gap-3">
                <div className="skeleton h-12 flex-1 rounded-xl bg-slate-800" />
                <div className="skeleton h-12 w-32 rounded-xl bg-slate-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsLoading;
