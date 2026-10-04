"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f8f2] text-[#243528]">
      {" "}
      {/* Navbar */}{" "}
      <header className="sticky top-0 z-50 border-b border-[#dfe7dc] bg-[#f7f8f2]/95 backdrop-blur">
        {" "}
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {" "}
          <a href="/" className="flex items-center gap-3">
            {" "}
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2f6b3b] text-2xl">
              {" "}
              🌿{" "}
            </div>{" "}
            <div>
              {" "}
              <h1 className="text-xl font-bold tracking-tight text-[#244c2d] sm:text-2xl">
                {" "}
                Dangi Farm{" "}
              </h1>{" "}
              <p className="text-[10px] font-medium tracking-[0.18em] text-[#71806f] sm:text-xs">
                {" "}
                FROM SOIL TO SOUL{" "}
              </p>{" "}
            </div>{" "}
          </a>{" "}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {" "}
            <a href="#" className="text-[#2f6b3b]">
              {" "}
              হোম{" "}
            </a>{" "}
            <a href="#about" className="transition hover:text-[#2f6b3b]">
              {" "}
              আমাদের সম্পর্কে{" "}
            </a>{" "}
            <a href="#activities" className="transition hover:text-[#2f6b3b]">
              {" "}
              কার্যক্রম{" "}
            </a>{" "}
            <a href="#gallery" className="transition hover:text-[#2f6b3b]">
              {" "}
              গ্যালারি{" "}
            </a>{" "}
            <a href="#contact" className="transition hover:text-[#2f6b3b]">
              {" "}
              যোগাযোগ{" "}
            </a>{" "}
          </nav>{" "}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-[#2f6b3b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#24552e] sm:inline-flex sm:px-5"
            >
              যোগাযোগ
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cdddc9] bg-white text-xl text-[#315337] md:hidden"
              aria-label="মেনু খুলুন"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-[#dfe7dc] bg-[#f7f8f2] md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#e1e8de] py-3 font-medium text-[#2f6b3b]"
              >
                হোম
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#e1e8de] py-3 font-medium text-[#49634d]"
              >
                আমাদের সম্পর্কে
              </a>

              <a
                href="#activities"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#e1e8de] py-3 font-medium text-[#49634d]"
              >
                কার্যক্রম
              </a>

              <a
                href="#gallery"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#e1e8de] py-3 font-medium text-[#49634d]"
              >
                গ্যালারি
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="py-3 font-medium text-[#49634d]"
              >
                যোগাযোগ
              </a>
            </nav>
          </div>
        )}
      </header>
      {/* Hero Section */}{" "}
      <section className="relative overflow-hidden">
        {" "}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#dcebd6] blur-3xl" />{" "}
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#e8dfc5] blur-3xl" />{" "}
        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
          {" "}
          <div>
            {" "}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cdddc9] bg-white/70 px-4 py-2 text-sm font-medium text-[#4d694f]">
              {" "}
              <span>🌱</span> <span>প্রকৃতির কাছাকাছি, জীবনের জন্য</span>{" "}
            </div>{" "}
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-[#203d27] sm:text-5xl lg:text-6xl">
              {" "}
              মাটির টানে, <br />{" "}
              <span className="text-[#3d7b48]">সবুজের প্রাণে</span> <br />{" "}
              আমাদের ডাঙী ফার্ম{" "}
            </h2>{" "}
            <p className="mt-6 max-w-xl text-base leading-8 text-[#667367] sm:text-lg">
              {" "}
              গ্রামের মাটিতে প্রকৃতির ছোঁয়ায় শাক-সবজি চাষ, মাছ ও মুরগি
              পালন—স্বাস্থ্যকর ও টেকসই কৃষির মাধ্যমে একটি সুন্দর আগামী গড়ার
              ছোট্ট প্রয়াস।{" "}
            </p>{" "}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {" "}
              <a
                href="#activities"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#2f6b3b] px-7 font-semibold text-white shadow-lg shadow-[#2f6b3b]/15 transition hover:-translate-y-0.5 hover:bg-[#24552e]"
              >
                {" "}
                আমাদের কার্যক্রম <span className="ml-2">→</span>{" "}
              </a>{" "}
              <a
                href="#about"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#bfcfba] bg-white px-7 font-semibold text-[#35563b] transition hover:bg-[#edf3ea]"
              >
                {" "}
                আরও জানুন{" "}
              </a>{" "}
            </div>{" "}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#dce4d9] pt-7">
              {" "}
              <div>
                {" "}
                <p className="text-2xl font-bold text-[#2f6b3b]">১০০%</p>{" "}
                <p className="text-sm text-[#788378]">প্রকৃতিনির্ভর</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-2xl font-bold text-[#2f6b3b]">🌱</p>{" "}
                <p className="text-sm text-[#788378]">সবুজ উদ্যোগ</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-2xl font-bold text-[#2f6b3b]">🐟</p>{" "}
                <p className="text-sm text-[#788378]">মৎস্য চাষ</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Hero Visual */}{" "}
          <div className="relative mx-auto w-full max-w-xl">
            {" "}
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-[#dfe9d9] shadow-2xl">
              {" "}
              <Image
                src="/images/farm.jpg"
                alt="Dangi Farm-এর সবুজ কৃষি ক্ষেত"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16351d]/70 via-transparent to-transparent" />
              <div className="absolute bottom-24 left-6 right-6 text-white sm:left-8 sm:right-8">
                <p className="text-sm font-medium tracking-wide text-[#e2f0df]">
                  DANGI FARM
                </p>

                <p className="mt-2 text-2xl font-bold sm:text-3xl">
                  আমাদের মাটি • আমাদের স্বপ্ন
                </p>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-white/85 p-4 shadow-lg backdrop-blur">
                {" "}
                <div className="flex items-center gap-3">
                  {" "}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5f0df] text-xl">
                    {" "}
                    🥬{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="text-sm font-bold text-[#294d30]">
                      {" "}
                      তাজা ও সবুজ{" "}
                    </p>{" "}
                    <p className="text-xs text-[#718071]">
                      {" "}
                      প্রকৃতির যত্নে বেড়ে ওঠা{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="absolute -right-3 top-10 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
              {" "}
              <div className="text-2xl">🥦</div>{" "}
              <p className="mt-1 text-xs font-semibold text-[#49634d]">
                {" "}
                সবজি চাষ{" "}
              </p>{" "}
            </div>{" "}
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
              {" "}
              <div className="text-2xl">🐟</div>{" "}
              <p className="mt-1 text-xs font-semibold text-[#49634d]">
                {" "}
                মাছ চাষ{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* About */}{" "}
      <section id="about" className="bg-white py-20 sm:py-24">
        {" "}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {" "}
          <div className="mx-auto max-w-2xl text-center">
            {" "}
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5c815f]">
              {" "}
              আমাদের গল্প{" "}
            </p>{" "}
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#25442b] sm:text-4xl">
              {" "}
              কৃষি শুধু কাজ নয়, <br /> এটি আমাদের জীবন{" "}
            </h2>{" "}
            <p className="mt-5 leading-8 text-[#6d786e]">
              {" "}
              ডাঙী ফার্মের লক্ষ্য হলো গ্রামের কৃষি ও প্রাণিসম্পদকে ঘিরে একটি
              সুন্দর, টেকসই ও স্বনির্ভর উদ্যোগ গড়ে তোলা।{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Activities */}{" "}
      <section id="activities" className="bg-[#f1f5ed] py-20 sm:py-24">
        {" "}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {" "}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            {" "}
            <div>
              {" "}
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5c815f]">
                {" "}
                আমাদের কার্যক্রম{" "}
              </p>{" "}
              <h2 className="mt-2 text-3xl font-bold text-[#25442b] sm:text-4xl">
                {" "}
                ডাঙী ফার্মে যা করি{" "}
              </h2>{" "}
            </div>{" "}
            <p className="max-w-md text-sm leading-7 text-[#718071]">
              {" "}
              কৃষির বিভিন্ন ক্ষেত্রকে একসঙ্গে নিয়ে আমাদের ছোট্ট এই উদ্যোগ।{" "}
            </p>{" "}
          </div>{" "}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {" "}
            <ActivityCard
              image="/images/vegetables.jpg"
              title="শাক-সবজি চাষ"
              description="মাটির গুণাগুণ ও মৌসুম বিবেচনায় বিভিন্ন ধরনের শাক-সবজি চাষ।"
            />
            <ActivityCard
              image="/images/fishcatch.jpg"
              title="মৎস্য চাষ"
              description="পুকুরের সঠিক ব্যবস্থাপনার মাধ্যমে মাছ চাষ ও পরিচর্যা।"
            />
            <ActivityCard
              image="/images/chicken.jpg"
              title="মুরগি পালন"
              description="যত্ন ও পরিচ্ছন্ন পরিবেশে মুরগি পালন ও পরিচর্যার কার্যক্রম।"
            />
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Gallery */}{" "}
      <section id="gallery" className="bg-white py-20 sm:py-24">
        {" "}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {" "}
          <div className="text-center">
            {" "}
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5c815f]">
              {" "}
              আমাদের ফার্ম{" "}
            </p>{" "}
            <h2 className="mt-2 text-3xl font-bold text-[#25442b] sm:text-4xl">
              {" "}
              মাটি, পানি আর সবুজের গল্প{" "}
            </h2>{" "}
          </div>{" "}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {" "}
            <GalleryBox emoji="🌱" title="সবুজের সমারোহ" />{" "}
            <GalleryBox emoji="🥬" title="সবজি ক্ষেত" />{" "}
            <GalleryBox emoji="🐟" title="ফার্মের পুকুর" />{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Contact Section */}
      <section id="contact" className="bg-[#f1f5ed] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section Heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5c815f]">
              যোগাযোগ
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#25442b] sm:text-4xl">
              আমাদের সাথে যোগাযোগ করুন
            </h2>

            <p className="mt-4 leading-8 text-[#6d786e]">
              ডাঙী ফার্মে আসতে, আমাদের কার্যক্রম সম্পর্কে জানতে অথবা যেকোনো
              প্রয়োজনে যোগাযোগ করুন।
            </p>
          </div>

          {/* Contact Details + Map */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="rounded-3xl border border-[#dce6d9] bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-2xl font-bold text-[#25442b]">ডাঙী ফার্ম</h3>

              <p className="mt-2 text-sm leading-7 text-[#718071]">
                আমাদের ঠিকানা ও যোগাযোগের তথ্য
              </p>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eaf2e5] text-xl">
                    📍
                  </div>

                  <div>
                    <h4 className="font-bold text-[#315337]">ফার্মের ঠিকানা</h4>

                    <p className="mt-2 text-sm leading-7 text-[#718071]">
                      গ্রাম: খাল বাটবিলা
                      <br />
                      রাস্তা: বাটবিলা-দূর্বাডাঙ্গা রাস্তা (ডাঙী)
                      <br />
                      উপজেলা: মণিরামপুর
                      <br />
                      জেলা: যশোর, বাংলাদেশ
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eaf2e5] text-xl">
                    📞
                  </div>

                  <div>
                    <h4 className="font-bold text-[#315337]">মোবাইল নম্বর</h4>

                    <a
                      href="tel:+8801984474356"
                      className="mt-2 inline-block text-sm font-medium text-[#4f7a54] transition hover:text-[#244c2d]"
                    >
                      ০১৯৮৪-৪৭৪৩৫৬
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eaf2e5] text-xl">
                    ✉️
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-bold text-[#315337]">ইমেইল</h4>

                    <a
                      href="mailto:dangi.khamar@gmail.com"
                      className="mt-2 inline-block break-all text-sm font-medium text-[#4f7a54] transition hover:text-[#244c2d]"
                    >
                      dangi.khamar@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="mt-8 flex flex-col gap-3 border-t border-[#e5ebe2] pt-6 sm:flex-row">
                <a
                  href="tel:+8801984474356"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-[#2f6b3b] px-5 text-sm font-semibold text-white transition hover:bg-[#24552e]"
                >
                  📞 কল করুন
                </a>

                <a
                  href="mailto:dangi.khamar@gmail.com"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-[#cdddc9] bg-white px-5 text-sm font-semibold text-[#315337] transition hover:bg-[#edf3ea]"
                >
                  ✉️ ইমেইল করুন
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="overflow-hidden rounded-3xl border border-[#dce6d9] bg-white shadow-sm">
              <div className="flex items-center justify-between gap-3 p-5 sm:p-6">
                <div>
                  <h3 className="text-xl font-bold text-[#25442b]">
                    আমাদের অবস্থান
                  </h3>

                  <p className="mt-1 text-sm text-[#718071]">মণিরামপুর, যশোর</p>
                </div>

                <span className="text-2xl">🗺️</span>
              </div>

              <div className="h-[300px] bg-[#eaf2e5] sm:h-[380px]">
                <iframe
                  title="Dangi Farm Google Maps Location"
                  src="https://maps.google.com/maps?q=22.9473156,89.2687244&t=k&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-sm leading-7 text-[#718071]">
                  Google Maps-এ ডাঙী ফার্মের অবস্থান ও যাওয়ার দিকনির্দেশনা দেখতে
                  নিচের বাটনে ক্লিক করুন।
                </p>

                <a
                  href="https://maps.app.goo.gl/ovqWDm2hAYwuZUF4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#2f6b3b] px-5 text-sm font-semibold text-white transition hover:bg-[#24552e]"
                >
                  <span>📍</span>
                  Google Maps-এ দেখুন
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}{" "}
      <footer className="bg-[#183720] py-7 text-center text-sm text-[#b9cbb8]">
        {" "}
        <p>
          {" "}
          © {new Date().getFullYear()} Dangi Farm. আমাদের মাটি, আমাদের
          স্বপ্ন।{" "}
        </p>{" "}
      </footer>{" "}
    </main>
  );
}

function ActivityCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-[#dce6d9] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {" "}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#dcebd6]">
        {" "}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />{" "}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />{" "}
        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#315337] backdrop-blur">
          {" "}
          Dangi Farm{" "}
        </div>{" "}
      </div>{" "}
      <div className="p-6">
        {" "}
        <h3 className="text-xl font-bold text-[#2b4d31]">{title}</h3>{" "}
        <p className="mt-3 leading-7 text-[#718071]"> {description} </p>{" "}
        <button
          type="button"
          className="mt-5 text-sm font-semibold text-[#4f7a54] transition hover:text-[#2f6b3b]"
        >
          {" "}
          আরও জানুন →{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

function GalleryBox({ emoji, title }: { emoji: string; title: string }) {
  return (
    <div className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#dcebd6] to-[#a9c89e]">
      {" "}
      <div className="text-7xl transition duration-500 group-hover:scale-110 sm:text-8xl">
        {" "}
        {emoji}{" "}
      </div>{" "}
      <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-[#315337] shadow">
        {" "}
        {title}{" "}
      </div>{" "}
    </div>
  );
}
