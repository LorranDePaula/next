import Image from "next/image";
import styles from '@/app/torcida/torcida.module.css';

export default function Torcida() {
  return (
    <div className={styles.container}>
          <div className={styles.imageContainer}>
        <Image
          src="/torcida1.png" 
          alt="torcida"
          width={800} 
          height={400} 
        />
      </div>
      <h1 className={styles.title}>Torcida</h1>
      <p className={styles.text}>
      
A torcida do Flamengo é conhecida por sua paixão fervorosa e pelo apoio incondicional ao time. Composta por milhões de torcedores, é uma das maiores e mais apaixonadas do Brasil.
 Os rubro-negros são famosos por criar um ambiente vibrante e emocionante nos estádios, especialmente no Maracanã, que frequentemente se enche com suas cores vermelha e preta.

A torcida do Flamengo não se destaca apenas pelo seu número, mas também pela sua lealdade e entusiasmo. Em momentos de vitória, a festa é grandiosa e contagiante, com cânticos, bandeiras
 e fogos de artifício. Nas derrotas, a torcida também demonstra um apoio inabalável, sempre acreditando na capacidade do time de se reerguer e voltar a brilhar.

Os torcedores do Flamengo têm uma longa tradição de criar e manter cânticos e hinos que ressoam não só nos jogos, mas também em encontros sociais e eventos relacionados ao time.
 Eles se orgulham da história e da cultura do clube, celebrando cada conquista e apoiando o time em todos os desafios.

Em suma, a torcida do Flamengo é um dos pilares do sucesso e da popularidade do clube. Sua energia e dedicação fazem com que cada jogo seja uma experiência memorável,
 tornando o Flamengo um dos clubes mais icônicos e admirados no cenário do futebol brasileiro e mundial.</p>
      </div>
      );
    }