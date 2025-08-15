import CTAButton from './CTAButton';

export default function Hero() {
  return (
      <section 
        className="relative bg-cover bg-[center_34%] text-white py-20 md:py-32 bg-[url('/hero3.jpg')]" 
        style={{ backgroundImage: "url('/hero3.jpg')" }}
      >
      {/* Overlay escuro para legibilidade do texto */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative container mx-auto px-6 text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Precisando de um advogado? <br />
          Estamos prontos para ajudar você!
        </h1> 
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Nossa equipe de advogados está preparada para oferecer o suporte jurídico necessário. Entre em contato e tire suas dúvidas de forma rápida e eficiente.
        </p>
        <CTAButton text="Solicitar atendimento" />
      </div>
    </section>
  );
}