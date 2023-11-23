// pages/garden/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import app from '../../lib/firebaseConfig';
import {Project} from "../../types/Project";


const ProjectDetailPage = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = React.useState<Project | null>(null);


  React.useEffect(() => {
    const fetchProject = async (projectId: string) => {
      if (!router.isReady) return;
      
      const db = getFirestore(app);
      console.log('No such document!');
      const projectRef = doc(db, 'essays', projectId);
      console.log('No such document!');
      const projectSnap = await getDoc(projectRef);


      if (projectSnap.exists()) {
        setProject({ id: projectSnap.id, ...projectSnap.data() as Project });
      } else {
        console.log('No such document!');
      }
    };

    if (typeof id === 'string') {
        fetchProject(id);
      }
    }, [id]);

  if (!project) {
    return <div>Loading...</div>; // Or any other loading state representation
  }

  return (
    <div className="section max-w-[690px]">
    <article className="prose lg:prose-xl mx-auto">
      <h1 className="section__title">{project.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: project.diary }} />
      {/* Render additional essay details here */}
    </article>
    </div>
  );
};

export default ProjectDetailPage;
