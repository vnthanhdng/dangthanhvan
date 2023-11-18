// pages/garden/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import app from '../../lib/firebaseConfig';
import {Essay} from "../../types/Essay";


const EssayDetailPage = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const [essay, setEssay] = React.useState<Essay | null>(null);


  React.useEffect(() => {
    const fetchEssay = async (essayId: string) => {
      if (!router.isReady) return;
      
      const db = getFirestore(app);
      const essayRef = doc(db, 'essays', essayId);
      const essaySnap = await getDoc(essayRef);

      if (essaySnap.exists()) {
        setEssay({ id: essaySnap.id, ...essaySnap.data() as Essay });
      } else {
        console.log('No such document!');
      }
    };

    if (typeof id === 'string') {
        fetchEssay(id);
      }
    }, [id]);

  if (!essay) {
    return <div>Loading...</div>; // Or any other loading state representation
  }

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{essay.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: essay.content }} />
      {/* Render additional essay details here */}
    </article>
  );
};

export default EssayDetailPage;
