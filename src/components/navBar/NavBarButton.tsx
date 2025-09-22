import React from 'react';
import type { Section } from '../../types/section';
interface Props {
  section: Section;
  label: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<Section>>;
}

function NavBarButton(props: Props): JSX.Element {
  return (
    <a
      onClick={() => props.setCurrentSection(props.section)}
      className="nav__link"
      id={'#' + props.section}
      href={'#' + props.section}
    >
      <div className="mx-4 hover:underline text-left justify-left font-ibmmono text-xl">
        {props.label}
      </div>
    </a>
  );
}

export default NavBarButton;