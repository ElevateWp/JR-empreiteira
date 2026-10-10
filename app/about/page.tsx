import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import PanelWipe from '@/components/motion/PanelWipe';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import DentistCard from '@/components/sections/dentists/DentistCard';
import { CLINIC_INFO, DENTISTS } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Sobre a JR Empreiteira',
  description:
    'Conheça a JR Empreiteira e sua equipe de reparos de telhados.',
  pathname: '/about/',
});

const TIMELINE = [
  {
    year: 'área de atendimento',
    title: 'JR Empreiteira',
    description: 'Atendimento demonstrativo em área de atendimento; confirme a área real de serviço.',
  },
];

const APPROACH_STEPS = [
  {
    title: 'Diagnóstico e Planejamento Preciso',
    description: 'Inspeção da cobertura para localizar sinais visíveis de desgaste e explicar as opções de reparo.',
  },
  {
    title: 'Transparência e Custo-Benefício',
    description: 'Escopo, materiais, valores e prazos são apresentados para confirmação antes do início do serviço.',
  },
  {
    title: 'Reparos de telhado conforme a necessidade',
    description: 'Técnicas modernas de reparos que devolvem a função da cobertura e a estética com rapidez e conforto.',
  },
  {
    title: 'Atendimento e avaliação no local',
    description: 'Atendimento demonstrativo em imóveis residenciais; confirme a área de serviço e a disponibilidade.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Sobre a empresa', path: '/about/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 font-medium uppercase tracking-wider">
                  Sobre a JR Empreiteira
                </span>
                <WordRevealH1 text="Reparos de telhados com cuidado, clareza e atenção à segurança." />
                <div className="mt-8">
                  <ScrubbedParagraph text="Na JR Empreiteira, nosso telhadista oferece atendimento de telhados." />
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>equipe de reparos de telhados</span>
                    <span className="font-medium text-forest">Equipe JR Empreiteira</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Story */}
      <PanelWipe className="py-20 md:py-32">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-2xl mb-16">
              <span className="font-body text-13 text-paper/60 uppercase tracking-wider block mb-2 font-medium">
                Trajetória da Prática
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                A trajetória da empresa
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="relative border-l border-mist/30 pl-8 md:pl-12 space-y-12 max-w-3xl">
            {TIMELINE.map((item, idx) => (
              <AnimateOnScroll
                key={item.year}
                animation="fade-up"
                delay={idx * 0.1}
                className="relative"
              >
                {/* Year Marker */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-forest border-2 border-lime flex items-center justify-center" />
                <span className="font-display text-21 text-lime block mb-1">
                  {item.year}
                </span>
                <h3 className="font-display text-21 md:text-26 text-paper mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-15 text-paper/80 leading-relaxed">
                  {item.description}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </PanelWipe>

      {/* SECTION 3: Our Approach */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Como trabalhamos
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Quatro pilares do nosso atendimento
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {APPROACH_STEPS.map((step, idx) => (
              <AnimateOnScroll
                key={step.title}
                animation={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                delay={idx * 0.1}
              >
                <div className="p-8 border border-mist bg-paper flex flex-col justify-between h-full hover:border-forest/40 transition-colors shadow-sm">
                  <div>
                    <span className="font-body text-13 text-forest block mb-3 font-medium">
                      Pilar 0{idx + 1}
                    </span>
                    <h3 className="font-display text-21 md:text-26 text-forest-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Equipe JR Empreiteira */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Nossa equipe
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink">
                  Conheça a equipe JR Empreiteira
                </h2>
              </div>
              <Link
                href="/dentists/"
                className="font-body text-15 text-forest font-medium hover:underline underline-offset-4"
              >
                Ver perfil detalhado →
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {DENTISTS.map((dentist, idx) => (
              <DentistCard key={dentist.id} dentist={dentist} offsetY={idx === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Clinic Facilities (with Media Parallax) */}
      <section className="py-20 md:py-32 border-b border-mist overflow-hidden">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Nosso trabalho em telhados
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  Inspeção e reparo com segurança
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                  A JR Empreiteira oferece, como conteúdo demonstrativo, serviços de inspeção, manutenção e reparo de telhados. Confirme os dados reais da empresa antes de publicar.
                </p>
                <div className="space-y-2 font-body text-13 text-forest-ink/70">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>Acesso e medidas de segurança são combinados antes do serviço</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>Ferramentas adequadas ao tipo de cobertura e reparo</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.08} className="w-full h-full">
                    <Image
                      src="https://images.unsplash.com/photo-1773438406512-e1ee0f194af1?auto=format&fit=crop&w=1600&q=85"
                      alt="Sala de atendimento de telhados da empresa JR Empreiteira"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
                    equipe de reparos de telhados
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Visual Tour */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Ambiente técnico
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Nosso Espaço
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <AnimateOnScroll animation="zoom-in" delay={0.1}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1653831926031-ad9a03f65354?auto=format&fit=crop&w=1600&q=85"
                  alt="Área de espera da empresa"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Recepção
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" delay={0.2}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1712947090314-ca7da0b90f24?auto=format&fit=crop&w=1600&q=85"
                  alt="Banheiro da empresa"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  equipe
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" delay={0.3}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1600&q=85"
                  alt="Entrada da empresa JR Empreiteira"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Fachada
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Orçamento
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Solicite sua avaliação com a equipe de reparos de telhados
              </h2>
              <p className="font-body text-15 text-paper/80 mt-2 max-w-xl">
                Atendimento no equipe e serviço de serviços de telhados domiciliar com agilidade e qualidade.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/book-appointment/" variant="lime" size="lg">
                Solicitar Orçamento
              </Button>
              <Button href="/contact/" variant="ghost" size="lg" className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10">
                Ver Contatos
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
