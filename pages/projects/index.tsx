// pages/projects/index.tsx
import React from 'react';
import ProjectCard from '@/components/cards/ProjectCard'; // A component for individual project cards
import { Project } from '@/types/Project';
import { getProjects } from '../../services/firebaseServices';


interface ProjectsProps{
    projects: Project[];
}

export async function getStaticProps() {
  try {
    const projects = await getProjects();

    if (!projects || projects.length === 0) {
      console.log('No projects found. Ensure the Firestore database is populated.');
      return { props: { projects: [] } };
    }

    return {
      props: {
        projects,
      },
      revalidate: 1,
    };
  } catch (error) {
    if (error instanceof Error) {console.error('Failed to fetch projects:', error.message);}
    return {
      props: {
        projects: [],
        error: 'Failed to fetch projects', // Optionally pass the error to the component
      },
    };
  }
}
const ProjectsPage: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="section max-w-[690px]">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1  gap-4 padding-y">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
