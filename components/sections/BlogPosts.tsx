import React from 'react';
import Image, { StaticImageData } from 'next/image';
import car1 from "../../public/Gallery/Rectangle1.png";
import car2 from "../../public/Gallery/Rectangle2.png";
import car3 from "../../public/Gallery/Rectangle3.png";
import car4 from "../../public/Gallery/Rectangle4.png";
import car5 from "../../public/Gallery/Rectangle5.png";
import car6 from "../../public/Gallery/Rectangle6.png";

interface BlogPost {
  id: number;
  image:StaticImageData ;
  title:string ;
  description?: string;
  category?: string;
}

export default function BlogPosts() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: car1,
      title: 'Sed ut perspiciatis',
      description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut.',
    },
    {
      id: 2,
      image: car2,
      title: 'Totam Rem Velit',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
      category: 'POPULAR RECENT OLDER'
    },
    {
      id: 3,
      image: car3,
      title: 'Sed ut perspiciatis unde omnis',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
    },
    {
      id: 4,
      image: car4,
      title: 'Sed ut perspiciatis unde omnis',
      description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut.',
    },
    {
      id: 5,
      image: car5,
      title: 'Sed ut perspiciatis',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    },
    {
      id: 6,
      image: car6,
      title: 'Totam Rem Aperiam',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.description}
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-semibold transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}