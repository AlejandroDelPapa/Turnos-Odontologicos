import styles from './Navbar.module.css'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()

  function goHome() {
    router.push('/')
  }
  
  return (
    <div className={[styles.background + ' ' + styles.spacing]}>
        <button onClick={goHome}>home</button>
        <button>menu item 1</button>
        <button>menu item 2</button>
    </div>
  )
}