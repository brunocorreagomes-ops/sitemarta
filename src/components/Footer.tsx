import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function Footer() {
  return (
    <footer className="py-20 bg-blush-sand border-t border-rose-gold/20 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex justify-center">
           <Link to="/" onClick={() => window.scrollTo(0,0)} aria-label="Voltar ao início da página" className="focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm">
             <img src="https://i.ibb.co/9m7gv3qn/IMG-7768.webp" alt="Marta Ana Chiconato Logo" className="h-20 w-auto opacity-90" />
           </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-12 uppercase tracking-widest text-[10px] sm:text-xs font-semibold flex-wrap">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-rose-gold transition-colors text-bordeaux/70 focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm px-2 py-1">WhatsApp</a>
          <a href="https://www.instagram.com/martaanachiconato" target="_blank" rel="noopener noreferrer" className="hover:text-rose-gold transition-colors text-bordeaux/70 focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm px-2 py-1 flex items-center gap-2">
            <Instagram size={14} />
            Instagram
          </a>
          <Link to="/politica-de-privacidade" onClick={() => window.scrollTo(0,0)} className="hover:text-rose-gold transition-colors text-bordeaux/70 focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm px-2 py-1">Política de Privacidade</Link>
          <Link to="/termos-de-uso" onClick={() => window.scrollTo(0,0)} className="hover:text-rose-gold transition-colors text-bordeaux/70 focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm px-2 py-1">Termos de Uso</Link>
          <Link to="/politica-de-atendimento" onClick={() => window.scrollTo(0,0)} className="hover:text-rose-gold transition-colors text-bordeaux/70 focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm px-2 py-1">Política de Atendimento</Link>
        </div>
        <div className="w-12 h-px bg-rose-gold/40 mx-auto mb-8"></div>
        <div className="text-bordeaux/70 font-medium flex flex-col items-center gap-8">
          <div className="text-xs uppercase tracking-[0.2em] leading-relaxed flex flex-col items-center gap-2">
            <p>
              Av. Fábio Ferraz Bicudo, 937, Jardim Esplanada, Indaiatuba - SP.
            </p>
            <p>
              Marta Ana Chiconato @ 2026 Todos direitos reservados.
            </p>
            <p className="mt-4 normal-case text-[10px] sm:text-xs">
              Site desenvolvido estrategicamente por <a href="https://www.orvalia.com.br" target="_blank" rel="noopener noreferrer" className="text-[#00CED1] font-semibold hover:brightness-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00CED1] rounded-sm px-1">Orvalia Studio</a>
            </p>
          </div>
          <div className="bg-white/50 border border-rose-gold/10 p-6 rounded-sm max-w-4xl mx-auto text-left md:text-center text-[11px] opacity-80 leading-relaxed shadow-sm">
            <h4 className="font-serif text-sm mb-2 uppercase tracking-widest text-bordeaux/90">Aviso Importante</h4>
            <p className="mb-2">
              Os atendimentos realizados por Marta Ana Chiconato são práticas integrativas e complementares, voltadas ao bem-estar, equilíbrio e autoconhecimento.
            </p>
            <p>
              Eles não substituem diagnóstico, tratamento ou acompanhamento médico, psicológico ou psiquiátrico. Se você estiver enfrentando questões de saúde, é essencial buscar um profissional da área competente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
