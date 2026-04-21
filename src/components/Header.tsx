import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { WHATSAPP_URL } from '../constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (isHome) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 border-b border-rose-gold/20 ${
        isScrolled ? 'bg-blush-sand/95 py-3 shadow-md backdrop-blur-md' : 'bg-blush-sand/80 py-5 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm">
           <img src="https://i.ibb.co/9m7gv3qn/IMG-7768.webp" alt="Marta Ana Chiconato Logo" className="h-12 w-auto" />
           <div className="hidden md:block font-serif text-xl tracking-[0.2em] uppercase">Marta Ana Chiconato</div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 uppercase tracking-widest text-xs font-medium">
          <Link to={isHome ? "#inicio" : "/"} onClick={(e) => handleNavClick(e, 'inicio')} className="hover:text-rose-gold transition-colors focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm py-1">Início</Link>
          <Link to={isHome ? "#sobre" : "/#sobre"} onClick={(e) => handleNavClick(e, 'sobre')} className="hover:text-rose-gold transition-colors focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm py-1">Sobre</Link>
          <Link to={isHome ? "#servicos" : "/#servicos"} onClick={(e) => handleNavClick(e, 'servicos')} className="hover:text-rose-gold transition-colors focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm py-1">Serviços</Link>
          <Link to={isHome ? "#agendar" : "/#agendar"} onClick={(e) => handleNavClick(e, 'agendar')} className="hover:text-rose-gold transition-colors focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm py-1">Agendamento</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-bordeaux text-white px-6 py-2.5 rounded-sm hover:bg-rose-gold transition-colors focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none">Agendar</a>
        </div>

        <button 
          className="md:hidden text-bordeaux focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blush-sand border-b border-rose-gold/20 shadow-lg py-4 px-6 flex flex-col space-y-4 text-center">
          <Link to="/" onClick={(e) => handleNavClick(e, 'inicio')} className="uppercase tracking-widest text-sm hover:text-rose-gold py-2 focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm">Início</Link>
          <Link to="/#sobre" onClick={(e) => handleNavClick(e, 'sobre')} className="uppercase tracking-widest text-sm hover:text-rose-gold py-2 focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm">Sobre</Link>
          <Link to="/#servicos" onClick={(e) => handleNavClick(e, 'servicos')} className="uppercase tracking-widest text-sm hover:text-rose-gold py-2 focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm">Serviços</Link>
          <Link to="/#agendar" onClick={(e) => handleNavClick(e, 'agendar')} className="uppercase tracking-widest text-sm hover:text-rose-gold py-2 focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm">Agendamento</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="bg-bordeaux text-white px-6 py-3 uppercase tracking-widest text-sm hover:bg-rose-gold transition-colors mt-2 mx-auto inline-block focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none rounded-sm">Agendar</a>
        </div>
      )}
    </header>
  );
}
