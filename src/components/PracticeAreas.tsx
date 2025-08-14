import { Gavel, Landmark, Users, Scale, HeartHandshake, ShieldCheck } from 'lucide-react';
import CTAButton from './CTAButton';

const areas = [
  {
    icon: <Gavel size={32} />,
    title: 'Direito Criminal',
    description: 'Defesa completa em processos criminais para proteger os direitos dos clientes.',
  },
  {
    icon: <Landmark size={32} />,
    title: 'Direito Civil',
    description: 'Consultoria e solução de conflitos em contratos e disputas familiares.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Direito do Consumidor',
    description: 'Defesa dos direitos do consumidor em questões de produtos, serviços e práticas comerciais.',
  },
  {
    icon: <Scale size={32} />,
    title: 'Direito do Trabalho',
    description: 'Representação em disputas trabalhistas e prevenção de conflitos.',
  },
  {
    icon: <Users size={32} />,
    title: 'Direito de Família e Sucessões',
    description: 'Assistência em divórcios, guarda de filhos e sucessões.',
  },
  {
    icon: <HeartHandshake size={32} />,
    title: 'Direito Previdenciário',
    description: 'Assessoria para concessão de aposentadorias, pensões e benefícios junto ao INSS.',
  },
];

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Nossas principais áreas de atuação
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Saiba como nós podemos te ajudar
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {areas.map((area) => (
            <div key={area.title} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <CTAButton text="Solicitar atendimento" />
        </div>
      </div>
    </section>
  );
}