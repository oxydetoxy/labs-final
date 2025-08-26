export default function SecondPageHero() {
  return (
    <div
      className="relative flex min-h-[68vh] flex-col items-start justify-center py-24 md:py-32 text-[#54453E] bg-cover bg-center"
      style={{ backgroundImage: "url(/servicesheader.png)" }}
    >
      <div className="ml-8 md:ml-16">
        <h1 className="font-display text-2xl md:text-4xl text-left z-10 px-4">
          Services That Power Up Your Performance.
        </h1>
        <h2 className="text-left text-md md:text-2xl mt-2 max-w-xl z-10 px-4">
          Whether it’s paid ads, SEO, or web development, each service is
          optimized to connect, convert, and compound results over time.
        </h2>
        <button
          className="z-10  ml-4 mt-5 bg-[#54453E] text-white rounded-[15px] text-base font-semibold"
          style={{
            width: "150px",
            height: "45px",
          }}
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
}
