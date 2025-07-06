"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProdukDetailPage() {
  const features = [
    {
      title: "📦 Produk Lengkap",
      desc: "Dari pulpen, pensil, hingga perlengkapan kantor. Semua ada di satu tempat.",
      img: "/image/card-lm.jpg",
    },
    {
      title: "💰 Harga Bersahabat",
      desc: "Kami jaga harga tetap terjangkau, tanpa mengurangi kualitas.",
      img: "/image/card-lm-harga.jpg",
    },
    {
      title: "🤝 Pelayanan Ramah",
      desc: "Butuh bantuan? Tim kami siap melayani dengan sepenuh hati.",
      img: "/image/card-lm-pelayanan.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-white px-6 py-16 text-gray-800">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-pink-600 mb-3">
          Mengapa Belanja di Yulizar ATK?
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Temukan alasan mengapa pelanggan mempercayakan kebutuhan alat tulisnya
          kepada kami. Kualitas, harga terjangkau, dan pelayanan ramah jadi
          komitmen kami sejak 2015 💕
        </p>
      </motion.div>

      {/* Card Section */}
      <section className="flex overflow-x-auto scroll-smooth gap-6 px-2 py-4 lg:grid lg:grid-cols-3 lg:gap-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            className="min-w-[300px] max-w-[300px] lg:min-w-0 flex-shrink-0 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col"
          >
            <div className="relative w-full h-48 mb-5 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-pink-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Back Button */}
      <div className="text-center mt-16">
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-pink-600 text-white font-semibold shadow-md hover:bg-pink-700 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
