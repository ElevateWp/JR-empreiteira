import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'Quais serviços a JR Empreiteira realiza?',
    answer: 'A empresa informa serviços de construção e alvenaria, revestimento, instalação de portas, preparação de paredes e pintura. Entre em contato para conversar sobre o seu projeto.',
    relatedLink: { href: '/contact/', label: 'Falar com a empresa →' },
  },
  {
    question: 'Como confirmar se a equipe atende minha região?',
    answer: 'Entre em contato pelo telefone ou WhatsApp para confirmar se a equipe atende sua região.',
    relatedLink: { href: '/contact/', label: 'Consultar área de atendimento →' },
  },
  {
    question: 'Como solicitar um orçamento?',
    answer: 'Entre em contato pelo telefone ou WhatsApp para explicar o serviço desejado e solicitar um orçamento sem compromisso.',
    relatedLink: { href: '/contact/', label: 'Pedir um orçamento →' },
  },
  {
    question: 'Como solicitar uma avaliação?',
    answer: `Você pode entrar em contato diretamente pelo WhatsApp (${CLINIC_INFO.contact.phone}) ou preencher o formulário de Orçamento online com antecedência.`,
    relatedLink: { href: '/book-appointment/', label: 'Solicitar orçamento →' },
  },
  {
    question: 'Onde fica localizada a JR Empreiteira?',
    answer: CLINIC_INFO.primaryLocation.directions,
    relatedLink: { href: '/contact/', label: 'Consultar área de atendimento →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Dúvidas Frequentes
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Perguntas frequentes sobre nossos serviços
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
              Informações sobre construções, reformas e como falar com a JR Empreiteira.
            </p>
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Tem alguma outra pergunta?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Fale diretamente conosco pelo WhatsApp e tire todas as suas dúvidas.
              </p>
              <a
                href={`https://api.whatsapp.com/send?phone=5511941943696`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
