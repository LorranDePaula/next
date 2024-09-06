import styles from '@/components/Header/header.module.css'
import Link from 'next/link';

export default function Header(){
    return(
        <header>
            <nav>
                <ul className={styles.header}>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/about">Titulos</Link></li>
                    <li><Link href="/maracana">Maracana</Link></li>
                    <li><Link href="/torcida">Torcida</Link></li>
                    <li><Link href="/useClickCounterPage">Click</Link></li>
                    <li><Link href="/useTogglePage">Toggle</Link></li>
                    <li><Link href="/useLocalStoragePage">Local Storage</Link></li>
                    <li><Link href="/useCounterPage">Counter</Link></li>
                    <li><Link href="/useDocumentTittlePage">DocumentTittle</Link></li>
                </ul>
            </nav>
        </header>
    );
}
