import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Dashboard() {
  const router = useRouter()
    useEffect(() => {
        if(!localStorage.getItem('token')) {
         router.push('/dashboard')
        }
    },[])
    const Logout=()=>{
      localStorage.removeItem('token')
      router.push('/')  
    }
  return (
    <div className={styles.container}>
      <Head>
        <title >Dashboard</title>
      </Head>
<h1>
  Dashboard
</h1>
<button onClick={Logout}>logout</button>
    </div>
  )
}
