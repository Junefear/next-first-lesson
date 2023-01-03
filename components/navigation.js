import React from 'react'
import Link from 'next/link'
import styles from './nav.module.css'


function Navigation() {
    return (
        <nav>
            <Link className={styles.link} href="/">Anasayfa</Link>
            <Link href="/about">Hakkimda</Link>
        </nav>
    )
}

export default Navigation