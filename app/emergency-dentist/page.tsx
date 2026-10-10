import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CLINIC_INFO, EMERGENCY_CONDITIONS } from '@/lib/clinic-data';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { createMetadata, generateFaqSchema } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Atendimento de telhados de Urgência',
  description:
    'Atendimento demonstrativo para infiltrações e danos na cobertura em área de atendimento. Contato: +55 11 94194-3696.',
  pathname: '/emergency-dentist/',
});

const EMERGENCY_FAQS = [
  {
    question: 'Como funciona o atendimento de urgência para dor de telhado?',
    answer: 'clientes com dor aguda, trauma ou inchaço são priorizados para atendimento rápido. Entre em contato pelo WhatsApp (+55 11 94194-3696) para orientação e Orçamento.',
  },
  {
    question: 'A equipe oferece atendimento domiciliar de urgência?',
    answer: 'Sim, o A equipe de reparos de telhados realiza serviços de telhados domiciliar para clientes acamados ou com limitações de locomoção.',
  },
  {
    question: 'O que fazer caso um telhado quebre ou caia por trauma?',
    answer: 'Segure o telhado apenas pela coroa, nunca pela raiz. Guarde-o em leite ou saliva e venha imediatamente ao equipe ou entre em contato pelo nosso WhatsApp (+55 11 94194-3696).',
  },
];

export default function EmergencyDentistPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={generateFaqSchema(EMERGENCY_FAQS)} />



      {/* SECTION 1: Urgência Introduction & Immediate Action */}
      <section className="py-12 md:py-16 bg-paper border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Reparo Emergencial', path: '/emergency-dentist/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-forest font-semibold block mb-2 uppercase tracking-wider">
                Reparos urgentes de telhado
              </span>
              <h1 className="font-display text-33 sm:text-41 md:text-52 text-forest-ink leading-tight mb-4">
                Reparo emergencial para goteiras e danos na cobertura.
              </h1>
              <p className="font-body text-17 text-forest-ink/90 leading-relaxed mb-6 max-w-2xl">
                Se houver goteira ativa ou dano após chuva e vento, mantenha distância de áreas inseguras e solicite uma avaliação da cobertura.
              </p>

              {/* Direct Immediate Call Action */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                  variant="lime"
                  size="lg"
                  className="font-bold text-17"
                >
                  Telefone: {CLINIC_INFO.contact.emergencyPhone}
                </Button>
                <Button href="/book-appointment/" variant="ghost" size="lg">
                  Solicitar avaliação
                </Button>
              </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 p-6 bg-forest text-paper">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <span className="font-body text-13 text-lime font-medium uppercase tracking-wider block mb-2">
                Walk-In técnica Área de atendimento
              </span>
              <address className="not-italic font-body text-15 text-paper leading-relaxed mb-4">
                {CLINIC_INFO.name}
                <br />
                {CLINIC_INFO.primaryLocation.street}
                <br />
                {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.state} {CLINIC_INFO.primaryLocation.postalCode}
              </address>
              <div className="pt-3 border-t border-mist/20 text-13 text-paper/80 font-body">
                Área de atendimento e endereço a confirmar
              </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 4: Common Dental Emergencies & Immediate Pre-Visit Actions */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Sinais de danos e cuidados iniciais
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              O que fazer enquanto aguarda a avaliação do telhado
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EMERGENCY_CONDITIONS.map((cond, idx) => (
              <AnimateOnScroll key={cond.id} animation="fade-up" delay={idx * 0.1}>
              <div
                className="p-8 border border-mist bg-paper flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-display text-21 text-forest-ink">
                      {cond.title}
                    </span>
                    <span className="font-body text-13 text-forest font-semibold bg-mist/60 px-2.5 py-1">
                      {cond.urgency}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="font-body text-13 text-forest-ink/60 uppercase tracking-wider block mb-1 font-medium">
                      Sinais observados:
                    </span>
                    <ul className="space-y-1 font-body text-13 text-forest-ink/80">
                      {cond.symptoms.map((s, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-forest">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-mist/30 border-l-2 border-forest mb-4">
                    <span className="font-body text-13 text-forest font-semibold block mb-1">
                      Cuidados imediatos:
                    </span>
                    <ul className="space-y-1 font-body text-13 text-forest-ink/90">
                      {cond.immediateAction.map((act, i) => (
                        <li key={i}>• {act}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-mist text-13 font-body text-forest-ink/70">
                  <strong className="text-forest font-medium">Avaliação do serviço:</strong> {cond.clinicTreatment}
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: When You Should Seek Immediate Care */}
      <section className="py-16 md:py-24 border-b border-mist bg-paper">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="max-w-3xl mb-8">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Sinais que exigem atenção rápida
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
              Quando um dano no telhado exige atenção rápida
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
              Goteiras ativas, partes da cobertura expostas ou água perto da instalação elétrica exigem cuidado. Afaste-se de áreas inseguras e peça uma avaliação.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnScroll animation="zoom-in" duration={0.8}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Forro cedendo ou deformado</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Um forro cedendo pode indicar acúmulo de água ou dano. Afaste-se do local e não tente pressionar a estrutura.
              </p>
            </div></AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.1}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Goteira próxima à instalação elétrica</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Não toque em luminárias, tomadas ou fiação atingidas pela umidade. Afaste-se e procure um profissional qualificado.
              </p>
            </div></AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.2}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Telhas deslocadas após ventania</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Não suba no telhado para recolocar peças. Registre os danos do chão somente se for seguro.
              </p>
            </div></AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.3}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Goteira ativa durante a chuva</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Afaste objetos da água e recolha a água apenas se não houver risco elétrico ou estrutural.
              </p>
            </div></AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 5: Opções de reparo urgente */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Serviços para danos urgentes
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              Serviços que podem ser avaliados
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" duration={0.8}><div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Reparo de infiltrações</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                Avaliação dos pontos de entrada de água e definição do reparo indicado.
              </p>
              <Link href="/root-canal/" className="font-body text-13 text-forest underline">
                Saiba mais sobre infiltrações →
              </Link>
            </div></AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.1}><div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Substituição de telhas</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                Inspeção das peças deslocadas e avaliação de substituição, com acesso seguro à cobertura.
              </p>
              <Link href="/dental-implants/" className="font-body text-13 text-forest underline">
                Saiba mais sobre reparo de telhados →
              </Link>
            </div></AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.2}><div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Vedação e revisão de rufos</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                Revisão dos encontros da cobertura e dos pontos de vedação que podem permitir a entrada de água.
              </p>
              <Link href="/contact/" className="font-body text-13 text-forest underline">
                Fale com a equipe →
              </Link>
            </div></AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7: Same-Day Information & Direct Urgência Contact */}
      <section className="py-16 md:py-24 border-b border-mist bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Solicite uma avaliação
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper mb-4">
                Fale com a equipe sobre danos no telhado
              </h2>
              <p className="font-body text-17 text-paper/90 leading-relaxed mb-8 max-w-2xl">
                Entre em contato para solicitar uma avaliação. A disponibilidade, o acesso e o escopo do reparo são confirmados com a equipe.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                  variant="lime"
                  size="lg"
                  className="font-bold text-17"
                >
                  Telefone: {CLINIC_INFO.contact.emergencyPhone}
                </Button>
                <Button
                  href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  variant="ghost"
                  size="lg"
                  className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10"
                >
                  WhatsApp
                </Button>
              </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 p-6 bg-paper/10 border border-mist/20">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <span className="font-body text-13 text-lime block mb-2 font-medium">
                Área de atendimento
              </span>
              <p className="font-body text-13 text-paper/80 leading-relaxed">
                Consulte a equipe sobre a área de atendimento.
              </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Área de atendimento & Opening Hours */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Área de atendimento</span>
              <h2 className="font-display text-26 md:text-33 text-forest-ink mb-4">
                Área de atendimento
              </h2>
              <address className="not-italic font-body text-15 text-forest-ink/80 leading-relaxed mb-4">
                {CLINIC_INFO.name}
                <br />
                {CLINIC_INFO.primaryLocation.street}
                <br />
                {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.state} {CLINIC_INFO.primaryLocation.postalCode}
              </address>
              <p className="font-body text-13 text-forest-ink/70">
                {CLINIC_INFO.primaryLocation.directions}
              </p>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Horários de atendimento</span>
              <div className="border border-mist divide-y divide-mist bg-paper font-body text-13">
                {CLINIC_INFO.schedule.map((item) => (
                  <div key={item.day} className="p-3 flex justify-between">
                    <span>{item.day}</span>
                    <span className="tabular-nums">{item.hours}</span>
                  </div>
                ))}
              </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Urgência Dúvidas frequentes */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Dúvidas frequentes</span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Urgência care Dúvidas frequentes
              </h2>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <Accordion items={EMERGENCY_FAQS} />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Final Urgência Action CTA */}
      <section className="py-16 md:py-24 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="flex flex-col items-center">
          <h2 className="font-display text-33 md:text-41 text-paper mb-4">
            Não suba no telhado em condições inseguras.
          </h2>
          <p className="font-body text-15 md:text-17 text-paper/80 mb-8 max-w-xl">
            A equipe pode avaliar os danos visíveis e explicar as opções de reparo para a cobertura.
          </p>
          <Button
            href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
            variant="lime"
            size="lg"
            className="font-bold text-17"
          >
            Telefone: {CLINIC_INFO.contact.emergencyPhone}
          </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
