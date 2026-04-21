import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-blush-sand min-h-screen">
      <div className="max-w-3xl mx-auto px-6 bg-white p-10 md:p-16 rounded-sm shadow-sm border border-rose-gold/10">
        <h1 className="font-serif text-3xl md:text-4xl mb-12 uppercase tracking-widest text-bordeaux text-center">Política de Privacidade</h1>
        
        <div className="space-y-8 text-bordeaux/80 font-light leading-relaxed">
          <p className="text-lg italic text-center mb-10 text-rose-gold">
            "O cuidado com suas informações é parte do respeito e da ética que sustentam este trabalho."
          </p>

          <p>
            Esta Política explica como seus dados são utilizados durante o contato e os atendimentos, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD).
          </p>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">1. Informações coletadas</h2>
            <p>
              Durante o contato ou atendimento, podem ser coletados dados como nome, telefone, e-mail, data de nascimento e informações compartilhadas por você de forma voluntária.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">2. Como seus dados são utilizados</h2>
            <p className="mb-2">Seus dados são utilizados com responsabilidade e propósito, para:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Agendamento de sessões</li>
              <li>Realização dos atendimentos</li>
              <li>Comunicação entre terapeuta e cliente</li>
              <li>Apoio às práticas como numerologia e radiestesia</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">3. Confidencialidade e respeito</h2>
            <p>
              Todas as informações compartilhadas são tratadas com sigilo, respeito e ética, sendo acessadas apenas por Marta Ana Chiconato.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">4. Compartilhamento de dados</h2>
            <p>
              Seus dados não são vendidos ou compartilhados, exceto quando necessário por obrigação legal.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">5. Seus direitos</h2>
            <p className="mb-2">Você pode, a qualquer momento:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Solicitar acesso aos seus dados</li>
              <li>Corrigir informações</li>
              <li>Solicitar exclusão</li>
              <li>Revogar seu consentimento</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-xl text-bordeaux mb-3 font-serif">6. Contato</h2>
            <p>
              Para qualquer questão relacionada à sua privacidade, entre em contato pelo WhatsApp disponível no site.
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
