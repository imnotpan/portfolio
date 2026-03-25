// src/components/SocialMediaButton.tsx
import { motion } from 'framer-motion';
import React, { useState } from 'react';

export interface Props {
  name: string;
  url: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  className?: string;
  ariaLabel?: string;
}

export default function SocialMediaButton({
  name,
  url,
  target = '_blank',
  rel,
  className,
  ariaLabel,
}: Props): JSX.Element {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  // Estados visuales unificados
  const isActive = hovered || focused;

  // Variantes para el color del texto
  // Usamos los hex exactos de tu nueva paleta para que la transición sea fluida
  const parentVariants = {
    normal: { color: '#E0E0E0' }, // Tu nuevo blanco suave
    hover: { color: '#121212' },  // Tu nuevo negro suave (contrasta con el fondo blanco que entra)
  };

  const childVariants = {
    normal: { width: '0%' },
    hover: {
      width: '100%',
      transition: { 
        type: 'spring', 
        stiffness: 100, // Un poco más firme para que se sienta táctil
        damping: 20,
        duration: 0.3 
      },
    },
  };

  const computedRel =
    target === '_blank'
      ? ['noopener', 'noreferrer', rel].filter(Boolean).join(' ')
      : rel;

  return (
    <motion.a
      href={url}
      target={target}
      rel={computedRel}
      // CAMBIOS CLAVE: 
      // 1. font-archivoblack para consistencia con proyectos.
      // 2. tracking-tighter para ese look premium de bloque.
      // 3. uppercase para maximizar el estilo "Technical Artist".
      className={
        className ??
        'relative text-inherit font-archivoblack uppercase tracking-tighter flex flex-col py-1 focus:outline-none overflow-hidden'
      }
      initial="normal"
      animate={isActive ? 'hover' : 'normal'}
      variants={parentVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      aria-label={ariaLabel ?? name}
    >
      {/* Texto centrado y por encima del fondo animado */}
      <span className="relative z-20 px-4">{name}</span>

      {/* Barra de fondo animada:
          Usa bg-white (que ahora es tu #E0E0E0)
      */}
      <motion.div
        variants={childVariants}
        className="absolute left-0 top-0 bottom-0 bg-white z-10"
        aria-hidden="true"
      />
    </motion.a>
  );
}