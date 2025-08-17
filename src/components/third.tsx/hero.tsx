export default function ThirdPageHero() {
    return (
        <div className="relative flex flex-col items-center justify-center py-24 md:py-32 text-[#54453E] bg-cover bg-center" style={{backgroundImage: 'url(/hero2.png)'}}>
        <h1 className="font-display text-2xl md:text-4xl text-center z-10 px-4">
            Got a theory? Let’s test it.
        </h1>
        <h2 className="text-center text-md md:text-2xl mt-2 max-w-xl z-10 px-4">
        Collab ideas, curious queries, or hypotheses about how we can work together — type away, genius.
        </h2>
        <button className="z-10 mt-5 bg-[#54453E] text-white px-4 py-2 rounded-md">Begin the Experiment</button>
    </div>
    );
}