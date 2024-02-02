import React from 'react'
import ProjectCard from './ProjectCard';
import projectsData from '../../data/Projects.json'

function GameDevProjects (): React.ReactNode {

    return (
        <div
            className='overflow-x-auto overflow-y-hidden flex'>
            {projectsData.projects.map((project, index) => 
                (
                    <ProjectCard 
                        key={index}
                        headerTitle={project.headertitle} 
                        mainTitle={project.mainTitle} 
                        description={project.description} 
                        mainImage={project.mainImage} 
                        images={project.images} 
                        tags={project.tags} 
                        redirectLink={project.redirectLink} />
                ))
            }
            
        </div>

    );
}

export default GameDevProjects
