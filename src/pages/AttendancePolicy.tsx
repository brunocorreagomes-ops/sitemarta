import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AttendancePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-blush-sand min-h-screen">
      <div className="max-w-3xl mx-auto px-6 bg-white p-10 md:p-16 rounded-sm shadow-sm border border-rose-gold/10">
        <h1 className="font-serif text-3xl md:text-3xl lg:text-4xl mb-12 uppercase tracking-widest text-bordeaux text-center">Política de Atendimento</h1>
        
        <div className="space-y-8 text-bordeaux/80 font-light leading-relaxed">
          <p className="text-lg italic text-center mb-10 text-rose-gold">
            "Para que o atendimento aconteça de forma harmoniosa e respeitosa para todos, seguem algumas orientações:"
          </p>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">1. Modalidade</h2>
            <p>
              Os atendimentos são realizados preferencialmente de forma presencial no nosso santuário, podendo ocorrer também de maneira online.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">2. Agendamento</h2>
            <p>
              Os agendamentos são feitos de maneira direta e orgânica via WhatsApp, conforme disponibilidade da agenda.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">3. Pagamento</h2>
            <p>
              As sessões são avulsas e combinadas no momento do agendamento, garantindo total transparência no processo.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">4. Cancelamentos</h2>
            <p>
              Caso precise cancelar ou reagendar a sua sessão, pedimos gentilmente que nos avise com pelo menos 24 horas de antecedência.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">5. Atrasos</h2>
            <p>
              Em caso de atraso na chegada, o tempo da sessão poderá ser ajustado para não comprometer o fluxo e a energia dos atendimentos seguintes.
            </p>
          </div>
          
          <div className="mt-12 p-6 bg-blush-sand/50 rounded-sm border-l-2 border-rose-gold text-bordeaux/90 text-center font-medium">
            <p>
              Este espaço é preparado com dedicação, e sua colaboração contribui para manter essa energia de cuidado e respeito.
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
