'use client';

import {useState } from 'react';

import Contact from './contact/page';

interface Idata {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export default function Home() {
  const [data, setData] = useState<Idata[] | null>(null);

  // useEffect(()=>{
  //   const getData = async ()=>{
  //     const res = await fetch("http://localhost:8080/api/home")
  //     const data = await res.json()
  //       setData(data.message.todos)
  //   }
  //   getData()
  // }
  // ,[])

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center ">
<Contact/>
    </main>
  );
}
