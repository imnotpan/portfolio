import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TagElement from '../services/TagElement';

export type ProjectCardProps = {
  id: string;
  headerTitle: string;
  mainTitle: string;
  description: string;
  mainImage: string;
  images: string[];
  tags: string[];
  redirectLink?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  headerTitle,
  mainTitle,
  description,
  mainImage,
  tags,
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  return (
    <Link
      ref={ref}
      to={`/projects/${id}`}
      id="items-card"
      aria-label={`Open project ${mainTitle}`}
      className="relative items-card border border-black border max-h-[30rem]
                 bg-white hover:bg-black hover:text-white group cursor-pointer z-10 overflow-x-hidden
                 block focus:outline-none focus:ring-2 focus:ring-black/30"
    >
      <motion.div className="overflow-x-hidden w-full">
        <div className="w-full my-3">
          <p className="ml-4 text-sm font-robotoslab font-semibold group-hover:font-nunito group-hover:font-bold">
            {headerTitle}
          </p>
        </div>

        <div className="overflow-hidden h-[10rem] max-h-[12rem] sm:h-[300px] md:h-[270px]">
          <img
            onDragStart={(e) => e.preventDefault()}
            src={mainImage}
            alt={mainTitle}
            className="w-full border border-black group-hover:zoom-img"
            style={{ maxWidth: '100%', height: 'auto' }}
            loading="lazy"
          />
        </div>

        <div className="p-2 flex flex-col">
          <p className="truncate font-neue text-2xl font-bold my-1 text-black group-hover:text-white">
            {mainTitle}
          </p>
          <p className="line-clamp-3 font-ibmmono my-4 text-black group-hover:text-white">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 p-2">
          {tags.map((tag, i) => (
            <TagElement key={`${id}-${i}`} name={tag} />
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
