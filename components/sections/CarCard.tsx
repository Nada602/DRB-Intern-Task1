import { StaticImageData } from "next/image";

interface CarCardProps {
  img: StaticImageData;
  title?: string;
  description?: string;
  badge?: string;
}

function CarCard({ 
  img, 
  title = "Luxurious Auto Mobile",
  description = "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
  badge = "HOT SELLS"
}: CarCardProps) {
  return (
    <div className="px-3">
      <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${img.src})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 text-white">
          {/* Top Content */}
          <div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Bottom Badge */}
          <div className="flex items-center gap-3">
            <span className="text-orange-500 font-bold text-xl">
              {badge}
            </span>
            <div className="flex-1 h-[3px] rounded-xl bg-white/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;