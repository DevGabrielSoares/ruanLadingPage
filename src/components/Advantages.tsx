import { Handshake, MessageCircle, BrainCircuit } from 'lucide-react';

const diferenciais = [
  {
    icon: <Handshake size={32} />,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente recebe atenção individualizada, garantindo que suas necessidades específicas sejam o foco da nossa estratégia.',
  },
  {
    icon: <MessageCircle size={32} />,
    title: 'Comunicação Transparente',
    description: 'Mantemos você informado sobre cada etapa do seu caso, com clareza e honestidade, para que você sempre saiba o que esperar.',
  },
  {
    icon: <BrainCircuit size={32} />,
    title: 'Experiência e Inovação',
    description: 'Combinamos anos de experiência jurídica com o uso de tecnologia para otimizar processos e alcançar os melhores resultados possíveis.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Nossos Diferenciais
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Entenda por que somos a escolha certa para você
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {diferenciais.map((item) => (
            <div key={item.title} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}