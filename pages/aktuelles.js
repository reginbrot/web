import { BaseLayout, prefix } from "../components/layout"
import { ContentContainer } from "../components/content"
// import Image from "next/image";

export default function Page() {
  return (
    <BaseLayout active={"Aktuelles"}>
      <ContentContainer>
        <h1>Neuigkeiten und Stellenangebote</h1>
        <article>
          <h2>Schichtführung (d/w/m) in der Produktion in Vollzeit</h2>
          <p>Wir möchten zum 1.3.2022 oder nach Absprache eine Stelle in der Produktion besetzen.</p>
          <p>Ihr Profil:</p>
          <ul>
            <li>
              Sie verfügen über Deutschkenntnisse auf C1-Level oder höher in Sprache und Schrift
            </li>
            <li>
              Sie können eine abgeschlossene Ausbildung im Lebensmittelhandwerk (Bäckerei,
              Konditorei, Metzgerei o.a.) vorweisen
            </li>
            <li>
              oder Sie sind hochmotiviert für einen Quereinstieg
            </li>
          </ul>
          <p>Unser Angebot:</p>
          <ul>
            <li>übertarifliche Bezahlung</li>
            <li>ein Arbeitsplatz in der Konstanzer Innenstadt</li>
            <li>frühester Arbeitsbeginn 4 Uhr im Wechsel mit 6 Uhr</li>
          </ul>
        </article>
         <article>
          <h2>Bäcker*in (d/w/m) in Vollzeit</h2>
          <p>Wir möchten zum 1.2.2022 oder nach Absprache eine Stelle in der Produktion besetzen.</p>
          <p>Ihr Profil:</p>
          <ul>
            <li>
              Sie können eine abgeschlossene Berufsausbildung im Lebensmittelhandwerk vorweisen
              oder Sie sind hochmotiviert und möchten den Quereinstieg wagen
            </li>
            <li>
              Sie verfügen über Deutschkenntnisse auf B2-Level oder höher
            </li>
          </ul>
          <p>Unser Angebot:</p>
          <ul>
            <li>übertarifliche Bezahlung</li>
            <li>ein Arbeitsplatz in der Konstanzer Innenstadt</li>
            <li>frühester Arbeitsbeginn 4 Uhr im Wechsel mit 6 Uhr</li>
          </ul>
        </article>
        <article>
          <h2>Das Bürle im Akzent</h2>
          <a href={`${prefix}/akzent_2021-11_schön+gut 14.pdf`}>
            <img
              className="max-h-96"
              src={`${prefix}/akzent_2021-11_schön+gut 14 weniger.jpg`}
              alt="Reginbrot Bürle im Akzent"
            />
          </a>
        </article>
        <article>
          <h2>Unser aktuelles Öko-Zertifikat</h2>
          <a href={`${prefix}/Öko 007 Zertifikat Reginbrot 13.07.21-31.01.23.pdf`}>
            <img
              className="max-h-96"
              src={`${prefix}/Öko 007 Zertifikat Reginbrot niedrigere Quali.jpg`}
              alt="Aktuelles Öko-Zertifikat unserer Bäckerei"
            />
          </a>
        </article>
      </ContentContainer>
    </BaseLayout>
  )
}
