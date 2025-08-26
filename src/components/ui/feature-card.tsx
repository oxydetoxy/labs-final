import Image from "next/image";

interface FeatureCardProps {
  imageUrl: string;
  imageAlt: string;
  number: string;
  title: string;
  description: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function FeatureCard({
  imageUrl,
  imageAlt,
  number,
  title,
  description,
  imageWidth,
  imageHeight,
}: FeatureCardProps) {
  return (
    <div className="bg-[#54453E] text-white px-4 py-4 rounded-lg relative min-w-[240px] snap-center">
      <div
        className="flex items-center justify-center rounded-full mb-6 mx-auto"
        style={{
          width: imageWidth ? `${imageWidth}px` : "80px",
          height: imageHeight ? `${imageHeight}px` : "80px",
        }}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={imageWidth || 300}
          height={imageHeight || 300}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="text-left">
        <div className="text-sm text-gray-300 mb-2">{number}</div>
        <h3
          className="text-lg sm:text-xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
