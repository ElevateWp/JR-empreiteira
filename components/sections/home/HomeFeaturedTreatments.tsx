import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#1A1A1A] block mb-2 font-medium uppercase tracking-wider">
            Construção, reforma e acabamento
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#1A1A1A]">
            Serviços para transformar seu imóvel
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Construção e acabamento */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#1A1A1A] uppercase tracking-wider block mb-2 font-medium">
                Construção e revestimento
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#1A1A1A] mb-4">
                Alvenaria com acabamento interno e externo
              </h3>
              <p className="font-body text-15 md:text-17 text-[#1A1A1A]/80 leading-relaxed mb-6">
                A empresa informa a execução de balcão de alvenaria com laje e revestimento interno e externo, incluindo acabamento em 45°.
              </p>
              <div className="p-4 bg-[#F5F5F5] border-l-4 border-[#1A1A1A] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#1A1A1A]/80">
                  <strong className="text-[#1A1A1A] font-semibold">Serviços:</strong> Alvenaria, laje e revestimento.
                </span>
              </div>
              <Button href="/dental-implants/" variant="ghost" size="md">
                Saiba mais sobre reparos
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/jr-44.jpg"
                  alt="Lareira de alvenaria revestida"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Instalação de portas e pintura */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/jr-43.jpg"
                  alt="Sala reformada com acabamento nas paredes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#1A1A1A] uppercase tracking-wider block mb-2 font-medium">
                Instalação e acabamento
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#1A1A1A] mb-4">
                Portas, paredes e pintura fina
              </h3>
              <p className="font-body text-15 md:text-17 text-[#1A1A1A]/80 leading-relaxed mb-6">
                O serviço descrito pela empresa inclui remoção e instalação de portas, fechamento e abertura de vãos, preparação das paredes e pintura fina.
              </p>
              <div className="p-4 bg-[#F5F5F5] border-l-4 border-[#1A1A1A] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#1A1A1A]/80">
                  <strong className="text-[#1A1A1A] font-semibold">Acabamento:</strong> Fundo preparador, seladora, massa corrida e pintura.
                </span>
              </div>
              <Button href="/braces/" variant="ghost" size="md">
                Saiba mais sobre inspeção preventiva
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
