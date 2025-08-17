import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative flex flex-col items-center justify-center pt-12 pb-32 md:pb-48 text-[#54453E] bg-cover bg-bottom bg-no-repeat" style={{backgroundImage: 'url(/bg.svg)'}}>
            <h1 className="font-display text-2xl md:text-4xl text-center z-10 px-4">
                Welcome to the Lab.
            </h1>
            <h2 className="text-center text-md md:text-2xl mt-2 max-w-xl z-10 px-4">
                Where strategy is tested, results are proven, and growth is the only constant.
            </h2>
            <button className="z-10 mt-5 bg-[#54453E] text-white px-4 py-2 rounded-md">Begin the Experiment</button>
            <Image src="/logo.png" alt="hero" width={200} height={200} className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/3 sm:translate-y-1/2 z-20 w-28 sm:w-40 md:w-[200px] h-auto" />
        </div>
    );
}