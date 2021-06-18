import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Navigation() {
    return (
        <header>
        <nav className={styles.topNav}>
          <Link href="/">
            <a>
        <Image 
        priority
        src="/images/image.png"
        height={111}
        width={250}
        />
        </a>
        
      </Link>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.link} href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href="/pricing">
              <a>Pricing</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        </nav>
      </header>
    )
}