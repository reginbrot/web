import { BaseLayout, prefix } from "../components/layout"
import { ContentContainer } from "../components/content"
// import Image from "next/image";

export default function Page() {
  return (
    <BaseLayout active={"Aktuelles"}>
      <ContentContainer>
        <h1>Neuigkeiten und Stellenangebote</h1>
        <article>
          <h2>Lebensmittelhandwerker (d/w/m)</h2>
          <p>Wir möchten demnächst eine Stelle in der Produktion besetzen.</p>
          <p>Was Sie mitbringen sollten:</p>
          <ul>
            <li>
              Deutschkenntnisse auf C1-Level oder höher in Sprache und Schrift
            </li>
            <li>
              abgeschlossene Ausbildung im Lebensmittelhandwerk (Bäckerei,
              Konditorei, Metzgerei o.a.)
            </li>
          </ul>
          <p>Was wir bieten:</p>
          <ul>
            <li>übertarifliche Bezahlung</li>
            <li>einen Arbeitsplatz in der Konstanzer Innenstadt</li>
            <li>frühester Arbeitsbeginn 4:00 Uhr</li>
          </ul>
        </article>
        <article>
          <h2>Das Bürle im Akzent</h2>
          <a href={`${prefix}/akzent_2021-11_schön+gut 14.pdf`}>
            <img
              className="max-h-96"
              src={`${prefix}/akzent_2021-11_schön+gut 14.pdf`}
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
