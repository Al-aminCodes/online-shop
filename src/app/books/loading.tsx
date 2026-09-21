const Loading = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl space-y-4">
        {/* Card 1 */}
        <BookCardSkeleton />

        {/* Card 2 */}
        <BookCardSkeleton />

        {/* Card 3 */}
        <BookCardSkeleton />

        {/* Card 4 */}
        <BookCardSkeleton />
      </div>
    </main>
  );
};

const BookCardSkeleton = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-5">
        {/* Book Image */}
        <div className="skeleton h-36 w-28 shrink-0 rounded-xl" />

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Title + Delete */}
          <div className="flex items-start justify-between gap-4">
            <div className="w-full">
              <div className="skeleton h-6 w-64" />
              <div className="skeleton mt-2 h-4 w-40" />
            </div>

            {/* Delete button */}
            <div className="skeleton h-9 w-9 shrink-0 rounded-xl" />
          </div>

          {/* Tags + Year */}
          <div className="mt-4 flex gap-2">
            <div className="skeleton h-6 w-10" />
            <div className="skeleton h-7 w-20 rounded-full" />
            <div className="skeleton h-7 w-20 rounded-full" />
            <div className="skeleton h-4 w-32" />
          </div>

          {/* Publisher + Pages */}
          <div className="mt-4 flex gap-6">
            <div className="skeleton h-4 w-32" />
            <div className="skeleton h-4 w-20" />
          </div>

          {/* Divider */}
          <div className="my-4 border-t border-slate-200" />

          {/* Bottom buttons */}
          <div className="flex gap-2">
            <div className="skeleton h-8 w-24 rounded-full" />
            <div className="skeleton h-8 w-20 rounded-full" />
            <div className="skeleton h-8 w-28 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
