import React from 'react';
import { motion } from 'framer-motion';
import Media from '../common/Media';

type Props = {
  coverIndex: number;
  image: string;
  name: string;
  title?: string;
};

const ImageCoverProject: React.FC<Props> = ({ coverIndex, image, name }) => {
  return (
    <motion.div
      className="cover-art py-3"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: Math.min(coverIndex * 0.02, 0.15) }}
    >
   <div className="relative group aspect-square overflow-hidden border border-black bg-white">
  <Media
    src={image}           // puede ser .gif, .webm, .mp4, .png, etc.
    alt={name}
    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
    // preferVideo opcional: si pones foo.gif y existe foo.webm/mp4, usará video
    preferVideo={false}
  />

  {/* overlay oscuro + título centrado */}
  <div className="pointer-events-none absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    <p className="px-3 py-1 text-white text-center font-robotoslab font-semibold tracking-wide drop-shadow">
      {name}
    </p>
  </div>
      </div>
    </motion.div>
  );
};

export default ImageCoverProject;
