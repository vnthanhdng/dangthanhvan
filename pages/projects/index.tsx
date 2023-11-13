// pages/projects/index.tsx
import React from 'react';
import ProjectCard from '@/components/ProjectCard'; // A component for individual project cards
import connectToDatabase from '../../lib/mongodb'; // Adjust the import path as necessary
import { Project } from '@/types/Project';


interface ProjectsProps{
    projects: Project[];
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const projects = await db.collection('projects').find({}).toArray();
  console.log(projects);
  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
    },
    revalidate: 1, // ISR - Revalidate at most once every second if there's a request
  };
}

const ProjectsPage: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
