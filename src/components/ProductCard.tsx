type ProductCardProps = {
  title: string;
  description: string;
  price: string;
  image: string;
};

export default function ProductCard({
  title,
  description,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-xl text-pink-600">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
}
