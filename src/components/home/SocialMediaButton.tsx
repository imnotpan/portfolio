// src/components/SocialMediaButton.tsx
import { motion } from 'framer-motion';
import React, { useState } from 'react';

export interface Props {
  name: string;
  url: string;
  /** Target del <a>: '_blank' | '_self' | ... */
  target?: React.HTMLAttributeAnchorTarget;
  /** Rel adicional; si usas _blank, se agregará automáticamente 'noopener noreferrer' */
  rel?: string;
  className?: string;
  /** aria-label opcional para accesibilidad si el texto no es suficientemente descriptivo */
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

  // Estados visuales unificados: hover OR focus
  const isActive = hovered || focused;

  const parentVariants = {
    normal: { color: 'white' }, // Texto blanco por defecto
    hover: { color: 'black' },  // Texto negro cuando el fondo se llena de blanco
  };

  const childVariants = {
    normal: { width: '0%' },
    hover: {
      width: '100%',
      transition: { duration: 0, width: { type: 'spring', stiffness: 50 } },
    },
  };

  // Rel seguro por defecto si usamos _blank
  const computedRel =
    target === '_blank'
      ? ['noopener', 'noreferrer', rel].filter(Boolean).join(' ')
      : rel;

  return (
    <motion.a
      href={url}
      target={target}
      rel={computedRel}
      className={
        className ??
        'relative text-inherit font-ibmmono flex flex-col py-1 focus:outline-none'
      }
      animate={isActive ? 'hover' : 'normal'}
      variants={parentVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      aria-label={ariaLabel ?? name}
    >
      <p className="z-20">{name}</p>

      {/* Barra de fondo animada */}
      <motion.div
        animate={isActive ? 'hover' : 'normal'}
        variants={childVariants}
        className="absolute left-0 top-0 bottom-0 bg-white" // ahora blanco
        aria-hidden="true"
      >
        &nbsp;
      </motion.div>
    </motion.a>
  );
}
