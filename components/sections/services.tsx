import servicesPhoto from "@/public/servicePhoto.png"

function Services() {
    return ( <>
    
    <section 
            id="services" 
            className="h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat flex "
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${servicesPhoto.src})` 
            }}
        >
<h1 className="text-5xl font-bold w-4xl mt-auto m-20 text-white">WE ARE PROVIDE PROFESSIONAL
 <span className="text-orange-500"> CAR SERVICES</span>
</h1>


        </section>
    </> );
}

export default Services;