import { BaseLayout } from "../components/layout"
import { ContentContainer, Brotsorte } from "../components/content"

// import Image from "next/image";

export default function Page() {
  return (
    <BaseLayout active={"Brote"}>
      <ContentContainer>
        <h1>Brotsorten und Zutaten</h1>
        <h2>Sorten</h2>
        <Brotsorte title={"HaferRoggenVollkornbrot 100% Vollkorn"}>
          <small>
            <b>Hafer</b>vollkornmahlerzeugnisse* 50%, <b>Roggen</b>vollkornmahlerzeugnisse* 50%,
            Wasser, Salz, hauseigene Starterkulturen
          </small>
        </Brotsorte>
        <Brotsorte title={"RoggenVollkornbrot 100% Vollkorn"}>
          <small>
            <b>Roggen</b>vollkornmahlerzeugnisse* 100%, Wasser, Salz, hauseigene Starterkulturen, Koriander*
          </small>
        </Brotsorte>
        <Brotsorte title={"DinkelRoggenWeizenVollkornbrot 100% Vollkorn"}>
          <small>
            <b>Dinkelweizen</b>vollkornmahlerzeugnisse* 50%,
            <b>Roggen</b>vollkornmahlerzeugnisse* 25%, <b>Weizen</b>vollkornmahlerzeugnisse*
            25%, Wasser, Salz, Goldleinmehl*, Flohsamenschalen*, hauseigene Starterkulturen
          </small>
        </Brotsorte>
        <Brotsorte title={"SonnenblumenkernVollkornbrot 100% Vollkorn"}>
          <small>
            <b>Weizen</b>vollkornmahlerzeugnisse*,  <b>Roggen</b>vollkornmahlerzeugnisse*,
            Wasser, Sonnenblumenkerne* 12%, Salz, hauseigene Starterkulturen
          </small>
        </Brotsorte>
        <Brotsorte title={"DinkelPurVollkornbrot 100% Vollkorn"}>
          <small>
            <b>Dinkelweizen</b>vollkornmahlerzeugnisse* 100%, Wasser, Salz,
            Goldleinmehl*, Flohsamenschalen*, hauseigene Starterkulturen
          </small>
        </Brotsorte>
        <Brotsorte title={"N°5 Bauernbrot"}>
          <small>
            <b>Weizen</b>ruchmehl*, Wasser, Salz, Goldleinmehl*, Flohsamenschalen*, Hefe
          </small>
        </Brotsorte>
        <Brotsorte title={"RosinenVollkornbrot und -brötchen"}>
          <small>
            <b>Weizen</b>vollkornmahlerzeugnisse*, Wasser, Sultaninen* 40%,
            Vollrohrzucker*, Rapsöl*, Hefe, Salz, Zimt*
          </small>
        </Brotsorte>
        <Brotsorte title={"Baguette, Weißbrot und Bürle"}>
          <small><b>Weizen</b>mehl Type 550*, Wasser, Salz, Hefe</small>
        </Brotsorte>
        <Brotsorte title={"Fladenbrot"}>
          <small>
            <b>Weizen</b>mehl Type 550*, Wasser, Olivenöl*, <b>Sesam</b>*, Schwarzkümmel*, Salz,
            Hefe
          </small>
        </Brotsorte>
        <Brotsorte title={"Vollkornbrötchen"}>
          <small>
            <b>Weizen</b>vollkornmahlerzeugnisse*, Wasser, Hefe, Salz, <b>Gersten</b>malzmehl*,
            Säureregulator: Acerolakirschsaftpulver*
          </small>
        </Brotsorte>
        <p>
          Alle unsere Produkte sind koscher. Wir arbeiten mit Avraham Radbil,
          dem Gemeinderabbiner der Synagogengemeinde Konstanz, zusammen.
        </p>
        <p>Fett markierte Zutaten können Allergene enthalten.</p>
        <p>
          Gerne halbieren wir unsere Brote für Sie. Ein Anspruch auf das exakt
          halbe Gewicht der Brothälfte besteht nicht.
        </p>
        <h2>Rohstoffe</h2>
        <h3>Lichtkornroggen</h3>
        <p>
          In fünf unserer Brotsorten verwenden wir Lichtkornroggen.
          Lichtkornroggen ist eine besondere Roggensorte, die in{" "}
          <a
            href="http://www.darzau.de/index.php?id=10"
            target="_blank"
            rel="noreferrer"
          >
            Darzau
          </a>{" "}
          aus drei verschiedenen Roggenlinien neu gezüchtet wurde. Wir schätzen
          ihn wegen seiner guten Backeigenschaften.
        </p>
        <p>
          Der Lichtkornroggen bildet relativ helle Körner und unterscheidet sich
          damit vom verbreiteteren grau-grünen Roggen. Die daraus gebackenen
          Roggenbrote sehen deshalb auch als Vollkornbrote heller aus als andere
          Roggenbrote. Wir beziehen Lichtkornroggen über die{" "}
          <a
            href="http://www.bohlsener-muehle.de/"
            target="_blank"
            rel="noreferrer"
          >
            Bohlsener Mühle
          </a>
          , die den Roggen reinigt und absackt, und vermahlen ihn bei uns im
          Haus selbst zu Mehl.
        </p>
        <p>
          <a
            href="http://www.darzau.de/index.php?id=9"
            target="_blank"
            rel="noreferrer"
          >
            Weitere Informationen zum Lichtkornroggen finden Sie auf der Seiter
            der Getreidezüchtungsforschung Darzau
          </a>
        </p>
        <h3>Sonnenblumenkerne aus Süddeutschland</h3>
        <p>
          Unsere Sonnenblumenkerne beziehen wir über die{" "}
          <a
            href="http://www.obeg.de/index.html"
            target="_blank"
            rel="noreferrer"
          >
            OBEG Hohenlohe
          </a>{" "}
          in Schrotzberg. Die Sonnenblumenkerne werden in Süddeutschland nach
          den Richtlinien der Bio-Anbauverbände angebaut und von der OBEG
          Hohenlohe geschält. Von dort aus werden sie direkt zu uns geliefert.
        </p>
        <p>
          <a
            href="http://www.obeg.de/sonnenblumenkerne.html"
            target="_blank"
            rel="noreferrer"
          >
            Weitere Informationen finden Sie auf der Seite der OBEG Hohenlohe
          </a>
        </p>
      </ContentContainer>
    </BaseLayout>
  )
}
