import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.all}>
      <div className={styles.imageContainer}>
        <Image
          src="/flamengo-15.svg" 
          alt="Logo Flamengo"
          width={300} 
          height={300} 
        />
      </div>
      <h1 className={styles.tittle}>Clube de Regatas do Flamengo</h1>

      <p className={styles.subtittle}>
        O Clube de Regatas do Flamengo, conhecido simplesmente como Flamengo, é uma das instituições mais icônicas e veneradas do futebol brasileiro e sul-americano. 
        Fundado em 17 de novembro de 1895 no Rio de Janeiro, o Flamengo teve suas origens no remo, mas rapidamente se consolidou como um dos gigantes do futebol. Seu estádio, o Maracanã, é um dos templos 
        do futebol mundial, testemunha de inúmeras conquistas e emoções.<br></br>
        O Flamengo não é apenas um clube de futebol; é um verdadeiro fenômeno cultural e social. Seu impacto vai além das quatro linhas do campo, influenciando a vida de milhões e moldando a cultura 
        esportiva do Brasil. A paixão, a tradição e a história do Flamengo fazem dele um dos clubes mais importantes e respeitados no cenário esportivo global.
      </p>

    </div>
  );
}


