import Image from "next/image";
import React from "react";
import banner from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="relative overflow-hidden rounded-3xl bg-slate-50 px-6 py-12 md:px-12 lg:px-16 lg:py-16">
        {/* Decorative background */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-100/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left">
            {/* Small Badge */}
            <span className="mb-5 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              📚 Discover your next favorite book
            </span>

            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Books to
              <span className="block text-green-600">freshen up</span>
              your bookshelf
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
              Explore a carefully selected collection of books and discover
              stories, ideas, and knowledge that deserve a place on your shelf.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <button className="rounded-xl bg-green-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-xl">
                View The List →
              </button>

              <button className="rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all duration-200 hover:border-green-300 hover:bg-green-50">
                Explore Categories
              </button>
            </div>

            {/* Small Stats */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm md:justify-start">
              <div>
                <p className="font-bold text-slate-900">100+</p>
                <p className="text-slate-500">Books</p>
              </div>

              <div className="h-8 w-px bg-slate-200" />

              <div>
                <p className="font-bold text-slate-900">20+</p>
                <p className="text-slate-500">Categories</p>
              </div>

              <div className="h-8 w-px bg-slate-200" />

              <div>
                <p className="font-bold text-slate-900">4.8★</p>
                <p className="text-slate-500">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex w-full max-w-md items-center justify-center">
            {/* Image Background */}
            <div className="absolute h-72 w-72 rounded-full bg-green-100/70 blur-2xl md:h-80 md:w-80" />

            <div className="relative rounded-3xl bg-white/70 p-6 shadow-2xl backdrop-blur-sm">
              <Image
                src={banner}
                alt="Bookshelf collection"
                className="h-64 w-auto object-contain sm:h-72 md:h-80 lg:h-96"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
