"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export interface Testimonial { id: number; text: string; author: string; role: string; }
const testimonialsData: Testimonial[] = [
    { id: 1, text: "O Dr. Ruan Carlos demonstrou um profissionalismo exemplar e um conhecimento profundo da lei. Senti-me seguro e bem representado durante todo o processo.", author: "João D.", role: "Cliente Satisfeito" },
    { id: 2, text: "Graças à sua dedicação e estratégia, obtivemos um resultado muito favorável. Recomendo fortemente seus serviços jurídicos.", author: "Maria S.", role: "Empresária" },
    { id: 3, text: "A clareza na comunicação e a agilidade em responder minhas dúvidas foram diferenciais. Um advogado em quem realmente se pode confiar.", author: "Carlos P.", role: "Cliente Particular" },
    { id: 4, text: "Serviço de altíssima qualidade. A assessoria jurídica prestada foi crucial para o sucesso da minha negociação.", author: "Ana L.", role: "Diretora de empresa" },
];

const TestimonialsCarousel = () => {
  return (
    <>
      <style jsx global>{`
        .custom-testimonial-buttons {
          display: none;
        }
        @media (min-width: 768px) {
          .custom-testimonial-buttons {
            display: block;
          }
        }
      `}</style>

      <section id="depoimentos" className="bg-slate-50 dark:bg-gray-900 py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Depoimentos de Clientes
              </h2>
              <p className="mt-2 text-lg leading-8 text-slate-600 dark:text-slate-400">
              A satisfação de nossos clientes é nossa maior prioridade.
              </p>
          </div>

          <div className="relative mt-16">
              <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={{
                      prevEl: '.prev-testimonial-button',
                      nextEl: '.next-testimonial-button',
                  }}
                  pagination={{ clickable: true }}
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                      640: { slidesPerView: 1, spaceBetween: 20 },
                      768: { slidesPerView: 2, spaceBetween: 40 },
                      1024: { slidesPerView: 3, spaceBetween: 50 },
                  }}
                  className="!pb-16"
              >
                  {testimonialsData.map((testimonial) => (
                      <SwiperSlide 
                          key={testimonial.id} 
                          
                          className="flex flex-col bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-transparent dark:border-slate-700"
                      >
                          <Quote className="w-8 h-8 text-blue-600 mb-4" />
                          <blockquote className="flex-grow text-slate-600 dark:text-slate-300">
                              <p>"{testimonial.text}"</p>
                          </blockquote>
                          <footer className="mt-6">
                              <p className="font-semibold text-slate-900 dark:text-slate-100">{testimonial.author}</p>
                              <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                          </footer>
                      </SwiperSlide>
                  ))}
              </Swiper>
              
              <div className="custom-testimonial-buttons">
                  <button className="prev-testimonial-button absolute top-1/2 -translate-y-1/2 left-[-16px] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100/50 backdrop-blur-sm transition-colors hover:bg-slate-100/70 dark:bg-slate-800/50 dark:hover:bg-slate-800/70">
                      <ChevronLeft className="h-6 w-6 text-slate-800 dark:text-white" />
                  </button>
                  <button className="next-testimonial-button absolute top-1/2 -translate-y-1/2 right-[-16px] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100/50 backdrop-blur-sm transition-colors hover:bg-slate-100/70 dark:bg-slate-800/50 dark:hover:bg-slate-800/70">
                      <ChevronRight className="h-6 w-6 text-slate-800 dark:text-white" />
                  </button>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsCarousel;