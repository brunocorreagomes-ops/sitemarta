import { MapPin, Leaf, Compass, Hash, Radar, CalendarHeart } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      {/* 1. Página inicial (Home) / Apresentação */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-blush-sand">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-rose-gold/10 blur-[120px] rounded-full mix-blend-multiply"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] bg-rose-gold/15 blur-[140px] rounded-full mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full fade-in flex flex-col md:flex-row items-center gap-12">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1] text-bordeaux tracking-tight">
              O Refúgio de Quietude que Você Procura em Indaiatuba.
            </h1>
            <p className="text-lg md:text-xl font-light mb-8 leading-relaxed text-bordeaux/80">
              Um espaço exclusivo de Terapia Integrativa desenhado para o seu acolhimento, equilíbrio profundo e autoconhecimento estratégico.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12 opacity-90 font-medium">
              <span className="flex items-center gap-2"><Leaf size={18} className="text-rose-gold"/> Bem-estar</span>
              <span className="hidden sm:block text-rose-gold/50">•</span>
              <span className="flex items-center gap-2"><Compass size={18} className="text-rose-gold"/> Equilíbrio</span>
              <span className="hidden sm:block text-rose-gold/50">•</span>
              <span className="flex items-center gap-2"><Hash size={18} className="text-rose-gold"/> Autoconhecimento</span>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-bordeaux text-white px-10 py-5 uppercase tracking-[0.2em] text-xs hover:bg-rose-gold transition-colors shadow-sm rounded-sm focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none">
              Agendar Sua Sessão
            </a>
          </div>
        </div>
      </section>

      {/* 2. Sobre Marta Ana Chiconato */}
      <section id="sobre" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-rose-gold/10 rounded-full blur-[40px] pointer-events-none"></div>
            <div className="aspect-[4/5] lg:aspect-square bg-blush-sand relative rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-xl border border-rose-gold/20 group">
                <img 
                  src="https://i.ibb.co/cKBF730Y/Marta.webp" 
                  alt="Marta Ana Chiconato" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
            </div>
          </div>
          <div className="order-2 lg:order-2">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 uppercase tracking-widest text-bordeaux">Sobre Marta Ana Chiconato</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-bordeaux/90">
              <p>
                Marta Ana Chiconato dedica décadas de estudo às sabedorias ancestrais e técnicas contemporâneas. Sua jornada é pautada por um compromisso gentil com a cura e a expansão da consciência.
              </p>
              <p>
                A conexão com as terapias integrativas nasceu de forma intuitiva, transformando uma vocação em uma abordagem acolhedora e ética. Cada pessoa é recebida no seu "agora", honrando o tempo e a sensibilidade de seus processos.
              </p>
            </div>
            
            <div className="mt-10 border-l-2 border-rose-gold pl-8 py-4 bg-blush-sand/40 rounded-r-sm">
              <p className="italic text-lg text-bordeaux/80">
                "Não existe um único caminho para o equilíbrio. O essencial é oferecer um espaço de acolhimento seguro, livre de julgamentos, onde o silêncio e o respeito orientam a transformação."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Serviços */}
      <section id="servicos" className="py-24 bg-blush-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="font-serif text-3xl md:text-4xl mb-4 uppercase tracking-widest text-bordeaux">Serviços Integrativos</h2>
             <div className="w-24 h-px bg-rose-gold mx-auto mb-6"></div>
             <p className="text-bordeaux/70 max-w-2xl mx-auto font-light">
                Descubra portais de sabedoria para alinhar a sua jornada, reduzir bloqueios e reacender o seu propósito autêntico.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Reiki */}
            <div className="bg-white p-10 border border-rose-gold/20 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blush-sand flex items-center justify-center text-rose-gold">
                   <Leaf strokeWidth={1.5} size={28} />
                </div>
                <h3 className="font-serif text-2xl text-bordeaux">Reiki</h3>
              </div>
              <div className="space-y-4 font-light text-bordeaux/80 text-sm leading-relaxed">
                <p><strong>O que é:</strong> Uma prática terapêutica milenar de imposição de mãos que canaliza a energia vital universal.</p>
                <p><strong>Para que serve:</strong> Promove reequilíbrio profundo, reduz o stress, alivia dores emocionais e restaura a vitalidade natural do corpo.</p>
                <p><strong>Como funciona:</strong> Durante a sessão, o paciente repousa de forma confortável, absorvendo o fluxo de paz interior através do toque sutil ou aproximação.</p>
              </div>
            </div>

            {/* Numerologia */}
            <div className="bg-white p-10 border border-rose-gold/20 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm">
               <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blush-sand flex items-center justify-center text-rose-gold">
                  <Hash strokeWidth={1.5} size={28} />
                </div>
                <h3 className="font-serif text-2xl text-bordeaux">Numerologia Terapêutica</h3>
              </div>
              <div className="space-y-4 font-light text-bordeaux/80 text-sm leading-relaxed">
                <p><strong>O que é:</strong> O estudo profundo da vibração dos números presentes no seu nome e data de nascimento.</p>
                <p><strong>Para que serve:</strong> Decifra o mapa da sua essência. Ajuda a compreender seus talentos ocultos, desafios cíclicos e propósito de vida.</p>
                <p><strong>Como funciona:</strong> A sessão inclui a leitura e interpretação do seu mapa numerológico, servindo como uma bússola para tomadas de decisão conscientes.</p>
              </div>
            </div>

            {/* Baralho Cigano */}
            <div className="bg-white p-10 border border-rose-gold/20 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blush-sand flex items-center justify-center text-rose-gold">
                  <Compass strokeWidth={1.5} size={28} />
                </div>
                <h3 className="font-serif text-2xl text-bordeaux">Baralho Cigano</h3>
              </div>
              <div className="space-y-4 font-light text-bordeaux/80 text-sm leading-relaxed">
                <p><strong>O que é:</strong> Um oráculo terapêutico riquíssimo em simbolismos que atua como um espelho da mente e do momento atual.</p>
                <p><strong>Para que serve:</strong> Substitui o cunho adivinhatório pelo ganho estratégico de clareza, revelando tendências e mapeando caminhos bloqueados.</p>
                <p><strong>Como funciona:</strong> A leitura das lâminas guia uma conversa acolhedora que traz diagnóstico e aconselhamento prático sobre suas questões.</p>
              </div>
            </div>

            {/* Radiestesia */}
            <div className="bg-white p-10 border border-rose-gold/20 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm">
               <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blush-sand flex items-center justify-center text-rose-gold">
                   <Radar strokeWidth={1.5} size={28} />
                </div>
                <h3 className="font-serif text-2xl text-bordeaux">Radiestesia</h3>
              </div>
              <div className="space-y-4 font-light text-bordeaux/80 text-sm leading-relaxed">
                <p><strong>O que é:</strong> Técnica capaz de identificar e medir vibrações e frequências energéticas do indivíduo ou de ambientes.</p>
                <p><strong>Para que serve:</strong> Diagnosticar desequilíbrios não visíveis e neutralizar ruídos que atrapalham a prosperidade e a vitalidade.</p>
                <p><strong>Como funciona:</strong> Utilizando instrumentos de harmonização, como pêndulos e gráficos, limpamos as anomalias detectadas para que a energia volte a fluir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Agendamento */}
      <section id="agendar" className="py-24 bg-white relative">
         <div className="max-w-4xl mx-auto px-6 relative z-10">
           <div className="bg-bordeaux text-white rounded-xl shadow-2xl overflow-hidden shadow-rose-gold/10">
             <div className="p-12 md:p-16 text-center border-b border-white/10">
                <CalendarHeart strokeWidth={1} size={48} className="mx-auto mb-6 text-rose-gold opacity-90" />
                <h2 className="font-serif text-3xl md:text-4xl mb-6 uppercase tracking-widest">Renove Sua Energia</h2>
                <p className="text-lg font-light text-white/80 max-w-xl mx-auto leading-relaxed">
                  Dê o primeiro passo para o seu equilíbrio interior contemplando o espaço exclusivo feito para você.
                </p>
             </div>
             <div className="bg-white/5 p-10 md:p-14 text-center">
                <h3 className="font-serif text-xl mb-8 tracking-widest text-white/90">COMO FUNCIONA O ATENDIMENTO?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto mb-12">
                   <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-rose-gold mt-2 shrink-0"></div>
                      <div>
                        <strong className="block mb-1 font-medium tracking-wide">Modalidade Flexível</strong>
                        <p className="text-white/70 font-light text-sm">Os atendimentos ocorrem preferencialmente no nosso santuário presencial em Indaiatuba, podendo ser realizados também de forma online.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-rose-gold mt-2 shrink-0"></div>
                      <div>
                        <strong className="block mb-1 font-medium tracking-wide">Sessões Descomplicadas</strong>
                        <p className="text-white/70 font-light text-sm">As sessões são avulsas e combinadas diretamente no momento do seu agendamento, respeitando o seu tempo.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-rose-gold mt-2 shrink-0"></div>
                      <div>
                        <strong className="block mb-1 font-medium tracking-wide">Privacidade Garantida</strong>
                        <p className="text-white/70 font-light text-sm">Um ambiente meticulosamente desenhado para garantir seu total sigilo e conforto absoluto.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-rose-gold mt-2 shrink-0"></div>
                      <div>
                        <strong className="block mb-1 font-medium tracking-wide">Contato Direto</strong>
                        <p className="text-white/70 font-light text-sm">Toda a comunicação, planejamento da sua visita ou dúvida é feita via WhatsApp de forma gentil e orgânica.</p>
                      </div>
                   </div>
                </div>
                
                <a 
                  href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-white text-bordeaux px-10 py-5 uppercase tracking-[0.2em] text-sm hover:bg-rose-gold hover:text-white transition-all shadow-xl rounded-sm font-medium focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none"
                >
                  Agendar pelo WhatsApp
                </a>
                
                <div className="mt-8 flex justify-center text-xs text-white/50 tracking-widest font-bold items-center">
                  <MapPin size={14} className="mr-2" /> INDAIATUBA-SP | JARDIM ESPLANADA
                </div>
             </div>
           </div>
         </div>
      </section>
    </>
  );
}
