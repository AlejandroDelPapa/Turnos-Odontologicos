 import styles from './Footer.module.css'
 
 export default function Footer() {
  return (
    <div className={[styles.background + ' ' + styles.spacing]}>
      <div className={styles.line}></div>
      <div>
          This is a common footer
      </div>
    </div>
  )
}