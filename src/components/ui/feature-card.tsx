import Image from "next/image";

interface FeatureCardProps {
    imageUrl: string;
    imageAlt: string;
    number: string;
    title: string;
    description: string;
}

export default function FeatureCard({ imageUrl, imageAlt, number, title, description }: FeatureCardProps) {
    return (
        <div className="bg-[#54453E] text-white px-4 py-4 rounded-lg relative min-w-[240px] snap-center">
            <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-6 mx-auto">
                <Image 
                    src={imageUrl} 
                    alt={imageAlt} 
                    width={200} 
                    height={200}
                    className="object-contain"
                />
            </div>
            <div className="text-sm text-gray-300 mb-2">{number}</div>
            <h3 className="text-lg sm:text-xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: title }}></h3>
            <p className="text-sm text-gray-300 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
