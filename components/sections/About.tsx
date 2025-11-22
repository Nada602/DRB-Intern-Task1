import Image from "next/image";
import AboutPhoto from "@/public/AboutPhoto.png";

function About() {
    return (
        <section id="about" className="py-20 px-6 ">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <Image 
                            src={AboutPhoto} 
                            alt="About Us" 
                            width={600} 
                            height={400} 
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                    
                    {/* Content Section */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                            About Us
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare vestibulum diam sit adipiscing elit adipiscing elit.
                        </p>
                        <p className="text-base text-gray-600 mb-6 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros nibh elementum eget. Integer dolor urna egestas sit donec neque, mi elit. Diam praesent mi blandit uices vel amet. Sapien, ac tortor vel ut pharetra, celerisqd sklois kias rabs raffead book.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded transition-colors font-semibold">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;