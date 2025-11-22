import About from "@/components/sections/About";
import CarGallery from "@/components/sections/CarGallery";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/services";
import BlogPosts from "@/components/sections/BlogPosts";


export default function Home() {
  return (<>
    
    <Hero/>
    <About/>
    <Services/>
    <CarGallery/>
    <BlogPosts/>
    </>
  );
}
