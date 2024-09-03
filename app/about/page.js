import styles from '@/app/about/about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Títulos</h1>
      <div className={styles.content}>
        <h2>Títulos Nacionais</h2>
        <ul className={styles.list}>
          <li><strong>Campeonato Brasileiro Série A (Brasileirão):</strong></li>
          <li>1980</li>
          <li>1982</li>
          <li>1983</li>
          <li>1987</li>
          <li>1992</li>
          <li>2009</li>
          <li>2019</li>
          <li>2020</li>
        </ul>
        <ul className={styles.list}>
          <li><strong>Copa do Brasil:</strong></li>
          <li>1990</li>
          <li>2006</li>
          <li>2013</li>
          <li>2019</li>
        </ul>
        <ul className={styles.list}>
          <li><strong>Supercopa do Brasil:</strong></li>
          <li>2020</li>
          <li>2021</li>
        </ul>

        <h2>Títulos Internacionais</h2>
        <ul className={styles.list}>
          <li><strong>Copa Libertadores da América:</strong></li>
          <li>1981</li>
          <li>2019</li>
          <li>2022</li>
        </ul>
        <ul className={styles.list}>
          <li><strong>Copa Intercontinental (Mundial de Clubes):</strong></li>
          <li>1981</li>
        </ul>
      </div>
    </div>
  );
}
