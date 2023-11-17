import Image from 'next/image'
import { Navbar, Header, Now } from '@/components';
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header/>
      <Now/>
    </main>
  )
}
