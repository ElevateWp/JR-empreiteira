import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const gallery = [
  { src: '/images/jr-45.jpg', alt: 'Fachada de casa reformada em São Paulo', label: 'Fachada' },
  { src: '/images/jr-44.jpg', alt: 'Lareira de alvenaria com revestimento escuro', label: 'Lareira em alvenaria' },
  { src: '/images/jr-43.jpg', alt: 'Sala reformada com piso claro e acabamento nas paredes', label: 'Reforma de sala' },
  { src: '/images/jr-42.jpg', alt: 'Sala com piso claro após reforma', label: 'Acabamento interno' },
  { src: '/images/jr-41.jpg', alt: 'Fachada de imóvel com portão de garagem', label: 'Fachada e garagem' },
  { src: '/images/jr-40.jpg', alt: 'Banheiro com revestimento decorativo e nicho', label: 'Revestimento de banheiro' },
  { src: '/images/jr-39.jpg', alt: 'Banheiro com box e revestimento claro', label: 'Banheiro' },
  { src: '/images/jr-38.jpg', alt: 'Box de banheiro com nichos de vidro', label: 'Box e nichos' },
  { src: '/images/jr-37.jpg', alt: 'Sala com piso amadeirado e paredes em cimento queimado', label: 'Sala com piso amadeirado' },
  { src: '/images/jr-36.jpg', alt: 'Área coberta com revestimento de parede e piso claro', label: 'Área coberta' },
];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12 md:mb-16">
          <span className="font-body text-13 text-forest-ink block mb-2 font-medium uppercase tracking-wider">
            Trabalhos realizados
          </span>
          <h2 className="font-display text-33 md:text-41 text-forest-ink">
            Construções e reformas em imagens
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {gallery.map((item, index) => (
            <AnimateOnScroll
              key={item.src}
              animation={index % 2 === 0 ? 'fade-up' : 'zoom-in'}
              duration={0.75}
              delay={(index % 3) * 0.08}
              className={`relative overflow-hidden border border-mist bg-paper-secondary ${index === 0 || index === 8 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'}`}
            >
              <MediaParallax speed={0.04} className="w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </MediaParallax>
              <div className="absolute bottom-3 left-3 rounded-full bg-deep/90 backdrop-blur-sm text-paper font-body text-12 px-4 py-2 font-medium">
                {item.label}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
