export default function ThirdPageHero() {
  return (
    <div
      className="relative flex flex-col items-start min-h-[69vh] justify-center py-24 md:py-32 text-[#54453E] bg-no-repeat w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/hero2.png)" }}
    >
      <div className="ml-8 md:ml-16">
        <h1 className="font-display text-2xl md:text-4xl text-left z-10 px-4">
          Got a theory? Let’s test it.
        </h1>
        <h2 className="text-left text-md md:text-2xl mt-2 max-w-xl z-10 px-4">
          Collab ideas, curious queries, or hypotheses about how we can work
          together — type away, genius.
        </h2>
      </div>
    </div>
  );
}
