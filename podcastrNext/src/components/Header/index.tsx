import format from "date-fns/format";
import Link from "next/Link";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./styles.module.scss";

export function Header() {
  const currentdate = format(new Date(), "EEEEEE, d, MMMM", { locale: ptBR });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <img src="/logo.svg" alt="Podcastr" />
      </Link>

      <p>O melhor para você ouvir, sempre</p>
      <span>{currentdate}</span>
    </header>
  );
}
