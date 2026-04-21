import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-blush-sand min-h-screen">
      <div className="max-w-3xl mx-auto px-6 bg-white p-10 md:p-16 rounded-sm shadow-sm border border-rose-gold/10">
        <h1 className="font-serif text-3xl md:text-4xl mb-12 uppercase tracking-widest text-bordeaux text-center">Termos de Uso</h1>
        
        <div className="space-y-8 text-bordeaux/80 font-light leading-relaxed">
          <p className="text-lg italic text-center mb-10 text-rose-gold">
            "Este espaço foi criado com propósito de acolhimento, orientação e conexão. Ao acessar o site ou realizar um atendimento, você concorda com os termos abaixo."
          </p>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">1. Sobre os atendimentos</h2>
            <p>
              As práticas oferecidas (reiki, numerologia, baralho cigano, radiestesia e terapias integrativas) têm como objetivo o bem-estar, autoconhecimento e equilíbrio energético. Não substituem acompanhamento médico, psicológico ou qualquer tratamento de saúde.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">2. Responsabilidade individual</h2>
            <p>
              Cada pessoa é responsável por suas escolhas e decisões. As orientações recebidas devem ser compreendidas como apoio e reflexão, e não como determinação absoluta.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">3. Resultados</h2>
            <p>
              Os atendimentos envolvem aspectos energéticos e subjetivos, podendo variar de pessoa para pessoa. Não há garantia de resultados específicos.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">4. Uso do conteúdo</h2>
            <p>
              Os conteúdos deste site são protegidos e não podem ser reproduzidos sem autorização prévia por parte da terapeuta e seus idealizadores.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">5. Atualizações</h2>
            <p>
              Este espaço está em constante evolução, e os termos podem ser atualizados quando necessário.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/" className="inline-block border border-rose-gold/40 text-bordeaux px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-semibold hover:bg-rose-gold hover:text-white transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none">
            Voltar para a Home
          </Link>
        </div>
      </div>
    </div>
  );
}
