import HeroPhoto from "@/public/HeroPhoto.png";

function Hero() {
    return (
        <section 
            id="hero" 
            className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HeroPhoto.src})` 
            }}
        >
            {/* Content */}
            <div className="max-w-7xl mx-20   px-6 text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    PURCHASE YOUR<br />
                    <span className="text-orange-500">PERFECT CAR</span>
                </h1>
                <h3 className="text-3xl mb-3 mt-10 max-w-3xl">
                    Over 1000+ New Cars Available Here
                </h3>
                <p className="mb-8 max-w-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae pellentesque sed etiam tortor.
                </p>
                <div className="flex gap-4">
                    <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded w-fit transition-colors font-semibold">
                        Explore More
                    </button>
                    <button style={{backgroundColor:"transparent"}} className=" border-orange-500 border-2 hover:bg-orange-600 px-8 py-3 rounded w-fit transition-colors font-semibold">
                        See Cars
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;