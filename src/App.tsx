/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  User, 
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';

// Constants
const EXPERT_NAME = "Dra. Jéssyca Hayanny";
const PROFESSION = "Cirurgiã Dentista • Esp. Implantes • Prótese";
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5562995086824&text=vim+do+Instagram+e+gostaria+de+mais+informações+por+favor!&type=phone_number&app_absent=0";
const INSTAGRAM_URL = "https://www.instagram.com/drajessycasilva/";

const IMAGES = {
  hero: "https://i.imgur.com/A7AFSJh.png",
  about: "https://i.imgur.com/YedW6iq.png",
  results: [
    "https://i.imgur.com/bBUja1X.png",
    "https://i.imgur.com/mYhwDrd.png",
    "https://i.imgur.com/HiRpHJf.png",
    "https://i.imgur.com/z6YO1DR.png",
    "https://i.imgur.com/gxFUcgA.png",
    "https://i.imgur.com/KzDXFIL.png",
    "https://i.imgur.com/2vNAO35.png",
    "https://i.imgur.com/AN8EEh4.png"
  ]
};

// Components
const Container = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`max-w-7xl mx-auto px-5 sm:px-10 ${className}`}>
    {children}
  </div>
);

const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

const ButtonCTA = ({ className = "", text = "Agendar primeira consulta gratuita" }: { className?: string, text?: string }) => (
  <a 
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`button-premium inline-flex items-center justify-center gap-2 w-full sm:w-auto text-lg ${className}`}
  >
    <MessageCircle className="w-6 h-6" />
    {text}
  </a>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Resultado" 
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-10 pb-0 md:pt-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-8 lg:col-start-3 z-10 text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-medium text-sm mb-6 uppercase tracking-wider">
                Especialista em Reabilitação Oral
              </span>
              <h1 className="heading-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 font-medium text-brand-primary">
                Eu sou <span className="italic">{EXPERT_NAME}</span>, sua Dentista em Goiânia e Inhumas.
              </h1>

              {/* Hero Image moved here */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative max-w-lg mx-auto mb-10"
              >
                <div className="relative z-10 aspect-[4/5] rounded-[60px] md:rounded-[100px] overflow-hidden bg-brand-accent/5 shadow-2xl">
                  <img 
                    src={IMAGES.hero} 
                    alt={EXPERT_NAME} 
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl -z-10" />
              </motion.div>

              <p className="text-xl md:text-2xl text-brand-primary/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Especialista em Implantes e Próteses, meu foco é devolver sua autoestima através de um sorriso natural e seguro.
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <ButtonCTA text="Agendar primeira consulta gratuita no WhatsApp" />
                <p className="text-sm text-brand-primary/50 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                  Resposta rápida • Sem compromisso
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Quem Sou Eu */}
      <Section className="bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative group">
                <img 
                  src={IMAGES.about} 
                  alt="Dra. Jéssyca Silva" 
                  className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 glass-card !p-8 hidden sm:block">
                  <p className="text-brand-accent font-serif text-4xl mb-1">100%</p>
                  <p className="text-brand-primary/60 text-sm uppercase tracking-widest font-semibold">Foco no Paciente</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="heading-serif text-4xl md:text-5xl mb-8 leading-tight">
                Transformando vidas através da <span className="italic">odontologia humanizada</span>.
              </h2>
              <div className="space-y-6 text-brand-primary/80 lg:text-lg leading-relaxed">
                <p>
                  Acredito que um tratamento odontológico vai muito além da estética. Trata-se de recuperar a confiança de sorrir, falar e se relacionar sem medos.
                </p>
                <p>
                  Minha abordagem une a precisão cirúrgica de anos de especialização com um olhar atento às necessidades individuais de cada paciente.
                </p>
                
                <ul className="grid grid-cols-1 gap-4 pt-4">
                  {[
                    "Especialista em Implantes e Próteses",
                    "Atendimento personalizado em Goiânia e Inhumas",
                    "Tecnologia de ponta para resultados naturais",
                    "Foco em conforto e zero dor"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 bg-brand-accent/10 border border-brand-accent/20 p-1 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Resultados Reais */}
      <Section id="resultados" className="bg-brand-bg/50 overflow-hidden">
        <Container>
          <div className="text-center mb-16 px-4">
            <h2 className="heading-serif text-4xl md:text-6xl mb-6">Transformações Reais</h2>
            <p className="text-xl text-brand-primary/60 max-w-2xl mx-auto font-light">
              Veja alguns dos sorrisos que devolvemos aos nossos pacientes.
            </p>
          </div>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {IMAGES.results.map((url, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white border border-black/5 break-inside-avoid"
                onClick={() => setSelectedImage(url)}
              >
                <img 
                  src={url} 
                  alt={`Resultado ${idx + 1}`} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full shadow-lg">
                    <Maximize2 className="w-5 h-5 text-brand-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-brand-primary/40 italic">
              * Resultados podem variar de pessoa para pessoa.
            </p>
          </div>
        </Container>
      </Section>

      {/* Diferenciais */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-20">
            <h2 className="heading-serif text-4xl md:text-6xl mb-6">Por que confiar em mim?</h2>
            <p className="text-lg text-brand-primary/60">Excelência técnica combinada com cuidado genuíno.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Segurança Total",
                desc: "Protocolos rígidos de biossegurança e materiais de altíssima qualidade internacional."
              },
              {
                icon: Star,
                title: "Sorriso Natural",
                desc: "Especialista em próteses que se assemelham perfeitamente aos dentes naturais."
              },
              {
                icon: User,
                title: "Atendimento Comigo",
                desc: "Avaliação e execução realizadas diretamente por mim, sem intermediários clínicos."
              },
              {
                icon: MapPin,
                title: "Duas Unidades",
                desc: "Atendimentos em Goiânia e Inhumas para sua maior conveniência."
              },
              {
                icon: Calendar,
                title: "Avaliação Honesta",
                desc: "Clareza total sobre o seu tratamento, sem custos escondidos ou promessas irreais."
              },
              {
                icon: MessageCircle,
                title: "Acompanhamento Pós",
                desc: "Suporte contínuo após o procedimento para garantir sua adaptação perfeita."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-3xl border border-brand-primary/5 hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 transition-all group"
              >
                <div className="bg-brand-bg w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="heading-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-brand-primary/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Intermediário */}
      <Section className="bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/10 blur-[100px] rounded-full translate-x-1/2" />
        <Container className="relative z-10 text-center">
          <h2 className="heading-serif text-4xl md:text-5xl mb-8 leading-tight max-w-3xl mx-auto">
            Pronto para recuperar a confiança de <span className="italic text-brand-accent">sorrir para o mundo?</span>
          </h2>
          <div className="flex flex-col items-center gap-6">
            <ButtonCTA text="Falar no WhatsApp agora" className="!bg-white !text-brand-primary hover:!bg-brand-accent hover:!text-white shadow-none" />
            <p className="text-white/60 text-sm">Tire suas dúvidas agora mesmo, sem compromisso.</p>
          </div>
        </Container>
      </Section>

      {/* Como funciona */}
      <Section className="bg-brand-bg/30">
        <Container>
          <div className="text-center mb-20">
            <h2 className="heading-serif text-4xl md:text-5xl mb-6">Como funciona a primeira consulta?</h2>
            <p className="text-brand-primary/60">Um processo simples e transparente para o seu novo sorriso.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/3 left-[20%] right-[20%] h-[1px] bg-brand-accent/20 z-0" />
            
            {[
              {
                step: "01",
                icon: MessageCircle,
                title: "Contato Inicial",
                desc: "Clique no botão e nos envie uma mensagem. Agendaremos seu horário preferido."
              },
              {
                step: "02",
                icon: Calendar,
                title: "Avaliação Gratuita",
                desc: "Analisarei seu caso detalhadamente, ouvindo suas queixas e desejos."
              },
              {
                step: "03",
                icon: ArrowRight,
                title: "Planejamento",
                desc: "Apresentarei o melhor plano para o seu caso, com total transparência de valores."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-10 rounded-3xl relative z-10 shadow-sm border border-black/5 text-center"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Passo {item.step}
                </div>
                <div className="bg-brand-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="heading-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-brand-primary/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-brand-accent/5 p-8 rounded-3xl text-center border border-brand-accent/10">
            <p className="text-brand-primary font-medium">A primeira avaliação é 100% gratuita e sem compromisso.</p>
          </div>
        </Container>
      </Section>

      {/* Galeria Expert */}
      <Section className="bg-white pb-10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl"
            >
              <img 
                src="https://i.imgur.com/YedW6iq.png" 
                alt="Expert" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="text-sm uppercase tracking-widest bg-brand-accent/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block mb-2">Atendimento Premium</p>
              </div>
            </motion.div>
            <div className="aspect-square rounded-3xl overflow-hidden grayscale-[30%] hover:grayscale-0 transition-all">
              <img src="https://i.imgur.com/A7AFSJh.png" alt="Consultório" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-3xl border border-brand-accent/20 flex flex-col items-center justify-center text-center p-4 bg-brand-accent/5">
              <Star className="w-8 h-8 text-brand-accent mb-3" />
              <p className="font-serif text-xl">Foco em Estética</p>
            </div>
            <div className="col-span-2 rounded-3xl overflow-hidden grayscale-[30%] hover:grayscale-0 transition-all border border-black/5">
              <img src="https://i.imgur.com/mYhwDrd.png" alt="Procedimento" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section className="bg-brand-bg relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto text-center py-10 md:py-20 border-y border-brand-accent/20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-serif text-5xl md:text-7xl mb-10 leading-[1.1]">
                O seu novo sorriso começa com uma <span className="italic">decisão agora.</span>
              </h2>
              <p className="text-xl md:text-2xl text-brand-primary/60 mb-12 font-light">
                Agende sua avaliação gratuita e descubra como podemos transformar sua vida.
              </p>
              <div className="flex flex-col items-center gap-4">
                <ButtonCTA text="Agendar minha consulta gratuita" className="scale-110" />
                <p className="text-brand-accent flex items-center gap-2 font-medium">
                  <MessageCircle className="w-5 h-5" />
                  Envie uma mensagem no WhatsApp
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-black/5">
        <Container>
          <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
            <div>
              <h3 className="heading-serif text-3xl mb-2">{EXPERT_NAME}</h3>
              <p className="text-brand-primary/60 text-sm">{PROFESSION}</p>
            </div>
            
            <div className="flex justify-center gap-6">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-bg rounded-full hover:bg-brand-accent hover:text-white transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-bg rounded-full hover:bg-brand-accent hover:text-white transition-all">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            
            <div className="md:text-right">
              <p className="text-brand-primary/40 text-sm mb-1 uppercase tracking-widest font-semibold">Atendimento em:</p>
              <p className="text-brand-primary">Goiânia • Inhumas</p>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-black/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-primary/30 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} {EXPERT_NAME}. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest text-brand-primary/30 font-bold">
              <a href="#" className="hover:text-brand-accent transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Privacidade</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
