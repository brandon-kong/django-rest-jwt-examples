'use client';

import Image from 'next/image'
import styles from './page.module.css'

import LoginForm from '@/components/LoginForm'
import { logout } from '@/lib/AuthFunctions'

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginForm />
      <button className={styles.button} onClick={() => {logout()}}>Logout</button>
    </main>
  )
}
