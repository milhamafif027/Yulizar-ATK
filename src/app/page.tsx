"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const produkList = [
  {
    title: "Pulpen Snowman",
    description: "Pulpen tinta gelus halus.",
    price: "Rp 3.500",
    image: "/image/pulpen.jpg",
  },
  {
    title: "Pensil 2B",
    description: "Pensil 2B berkualitas.",
    price: "Rp 2.000",
    image: "/image/pensil.jpg",
  },
  {
    title: "Buku Tulis 38 Lbr",
    description: "Buku tulis ekonomis.",
    price: "Rp 3.000",
    image: "/image/buku-tulis.jpg",
  },
  {
    title: "Penghapus Staedtler",
    description: "Penghapus bersih.",
    price: "Rp 4.000",
    image: "/image/penghapus.jpg",
  },
  {
    title: "Map Folder A4",
    description: "Map plastik warna-warni.",
    price: "Rp 5.500",
    image: "/image/map.jpg",
  },
  {
    title: "Penggaris 30cm",
    description: "Penggaris plastik ukuran 30 cm.",
    price: "Rp 3.000",
    image: "/image/penggaris.jpg",
  },
];

const generateWhatsAppMessage = (title: string, price: string) => {
  const time = new Date().toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
  });
  return encodeURIComponent(
    `Halo admin Yulizar ATK,\n\nSaya tertarik dengan produk:\n📦 ${title}\n💸 Harga: ${price}\n🕓 Waktu: ${time}\n\nApakah stok masih tersedia?`
  );
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { ref: heroRef, inView: inViewHero } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: produkRef, inView: inViewProduk } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: aboutRef, inView: inViewAbout } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <main>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-r from-pink-200 via-white to-blue-100 overflow-hidden min-h-screen w-full"
      >
        {/* Background Image (kanan) */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[60%] hidden md:block z-0">
          <div className="w-full h-full bg-pink-300 relative">
            <Image
              src="/image/bg-utama.jpg"
              alt="Ilustrasi ATK"
              width={1000}
              height={1000}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain max-w-[70%] max-h-[70%] animate-floating"
              priority
            />
          </div>
        </div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={inViewHero ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between px-6 pt-6"
        >
          {/* Logo Centered on Mobile */}
          <div className="flex-1 flex justify-center sm:justify-start">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/image/logo.jpg"
                alt="Logo Yulizar ATK"
                width={50}
                height={50}
                priority
              />
              <span className="text-lg sm:text-xl font-bold text-pink-700">
                Yulizar <span className="text-gray-900">ATK</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-8 font-bold text-gray-800 text-sm">
            <a href="#produk" className="hover:text-pink-600">
              Produk
            </a>
            <a href="#about" className="hover:text-pink-600">
              Tentang
            </a>
            <a href="#kontak" className="hover:text-pink-600">
              Kontak
            </a>
            <Link
              href="/learnmore"
              className="ml-2 px-3 py-1.5 bg-pink-600 text-white rounded-md hover:bg-pink-700 text-sm"
            >
              Learn More
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex-1 flex justify-end sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-pink-700 focus:outline-none"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md mt-2 flex flex-col items-start px-6 py-4 gap-3 sm:hidden font-medium text-gray-800 z-30 text-sm">
              <a
                href="#produk"
                className="hover:text-pink-600"
                onClick={() => setMenuOpen(false)}
              >
                Produk
              </a>
              <a
                href="#about"
                className="hover:text-pink-600"
                onClick={() => setMenuOpen(false)}
              >
                Tentang
              </a>
              <a
                href="#kontak"
                className="hover:text-pink-600"
                onClick={() => setMenuOpen(false)}
              >
                Kontak
              </a>
              <Link
                href="/learnmore"
                className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
                onClick={() => setMenuOpen(false)}
              >
                Learn More
              </Link>
            </div>
          )}
        </motion.header>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inViewHero ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex items-center justify-center md:justify-start min-h-[calc(100vh-100px)] px-6 max-w-7xl mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-[10px] border border-white/30 rounded-3xl shadow-xl max-w-2xl p-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              ATK Lengkap 💕
              <br />
              Untuk Sekolah & Kantor
            </h1>
            <p className="text-gray-700 mt-4 text-base">
              Yulizar ATK siap bantu kebutuhan alat tulismu dari yang penting
              sampai yang gemesin 💖
            </p>
          </div>
        </motion.div>
      </section>

      {/* Produk Section */}
      <section
        ref={produkRef}
        id="produk"
        className="relative py-20 px-6 min-h-screen overflow-hidden bg-white"
      >
        {/* Background kiri */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[40%] hidden md:block z-0">
          <div className="w-full h-full relative">
            <Image
              src="/image/bg-produk.jpg"
              alt="Background Produk"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-pink-100 opacity-60 mix-blend-multiply" />
          </div>
        </div>

        {/* Konten utama produk */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inViewProduk ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-pink-600">
            Produk Kami
          </h2>

          {/* Wrapper scrollable */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-8 sm:overflow-visible px-4 py-4">
              {produkList.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[360px] max-w-[360px] sm:min-w-0 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col flex-shrink-0"
                >
                  <ProductCard {...item} />
                  <a
                    href={`https://wa.me/6281369016761?text=${generateWhatsAppMessage(
                      item.title,
                      item.price
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-center bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition"
                  >
                    💬 Pesan Sekarang via WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="relative h-screen w-screen overflow-hidden bg-white"
      >
        <div className="absolute inset-y-0 right-0 w-full md:w-[35%] hidden md:block z-0">
          <div className="w-full h-full relative">
            <Image
              src="/image/Bg-about.jpg"
              alt="Dekorasi ATK"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-pink-200 opacity-40 mix-blend-multiply" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inViewAbout ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full h-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4 py-10 md:py-20"
        >
          {/* Left Text Content */}
          <div className="lg:w-1/2 w-full px-4 lg:px-8">
            <h2 className="text-4xl font-extrabold text-pink-600 mb-4">
              Bikin Belanja ATK
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-transparent">
                Jadi Lebih Bahagia ✨
              </span>
            </h2>
            <hr className="w-24 border-pink-400 mb-6" />
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Sejak <strong className="text-pink-600">2015</strong>,
              <span className="font-semibold text-pink-600"> Yulizar ATK </span>
              hadir melengkapi kebutuhan alat tulis kamu — dari keperluan
              sekolah hingga kantor, dengan harga terjangkau, pilihan lengkap,
              dan pelayanan yang bersahabat. Kami percaya bahwa alat tulis yang
              tepat bisa bikin harimu lebih semangat!
            </p>
          </div>

          {/* Right Card Content */}
          <div className="lg:w-1/2 w-full flex justify-center items-center px-4">
            <div className="backdrop-blur-xl bg-white/50 shadow-xl rounded-2xl border border-white/30 px-4 py-6 w-full max-w-xs sm:max-w-sm">
              <div className="relative w-full aspect-[4/5] mx-auto overflow-hidden rounded-xl">
                <Image
                  src="/image/Rumah.jpg"
                  alt="Toko Yulizar ATK"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-5 text-center">
                <p className="text-base font-semibold text-gray-900">
                  Sejak 2015, kami berkomitmen membuat kamu
                  <span className="text-pink-600"> tersenyum 😊</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Kontak dan Lokasi Section */}
      <section
        id="kontak"
        className="relative w-full min-h-screen bg-pink-50 py-20 px-4 flex flex-col items-center justify-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl w-full"
        >
          <h2 className="text-4xl font-extrabold text-pink-600 mb-4">
            Hubungi & Kunjungi Kami
          </h2>
          <p className="text-gray-700 mb-6 text-base sm:text-lg">
            Kami siap membantu kebutuhan alat tulis Anda. Hubungi atau temui
            kami langsung di lokasi berikut:
          </p>

          <ul className="text-gray-700 text-left space-y-4 mb-10">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <strong>📞 Telepon:</strong>{" "}
              <a
                href="tel:+62 813-6901-6761"
                className="text-pink-600 hover:underline"
              >
                +62 813-6901-6761
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <strong>📧 Email:</strong>{" "}
              <a
                href="mailto:yulizaratk@gmail.com"
                className="text-pink-600 hover:underline"
              >
                yulizaratk@gmail.com
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-2"
            >
              <strong>📍 Alamat:</strong>{" "}
              <span>
                Suka Negeri, Kec. Semendawai Barat,
                <br />
                Kab. OKU Timur, Sumatera Selatan 32184
              </span>
            </motion.li>
          </ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full h-96 rounded-xl overflow-hidden shadow-xl border border-pink-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4537.521466642063!2d104.61573125430505!3d-3.8081093200069502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e39697f4de3e0b7%3A0x2ecd371e2f6c2d80!2sFoto%20Copy%20Yulizar!5e0!3m2!1sen!2sus!4v1751442862092!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
