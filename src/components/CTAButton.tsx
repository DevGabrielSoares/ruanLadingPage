"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // A fitting icon for a WhatsApp CTA

interface CTAButtonProps {
  text: string;
}

export default function CTAButton({ text }: CTAButtonProps) {
  const phoneNumber = "5588981505012";
  const message = "Olá! Vi o site e gostaria de solicitar um atendimento.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 bg-blue-700 text-white font-bold py-3 px-7 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      
      // Animation on page load
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}

      // Animation on hover
      whileHover={{ scale: 1.05, backgroundColor: "#1D4ED8" /* Darker blue */ }}
      
      // Animation on tap/click
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={20} />
      <span>{text}</span>
    </motion.a>
  );
}