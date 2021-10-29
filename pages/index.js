import { BaseLayout, prefix } from "../components/layout"
import { ContentContainer } from "../components/content"

// import Image from "next/image";

export default function Home() {
  return (
    <BaseLayout>
      <h1 className="sr-only">Reginbrot</h1>

      <div className="absolute top-0 left-0 right-0 h-screen -z-1 overflow-hidden">
        <video
          className="min-w-full min-h-full object-cover"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={`${prefix}/reginbrot.webm`} type="video/webm" />
          <source src={`${prefix}/reginbrot.mp4`} type="video/mp4" />
        </video>
      </div>

      <ContentContainer classes={"rounded-lg p-8 bg-white"}>
        <h2>Ab 2. November wieder geöffnet</h2>
  
        <p>
          Wir haben Montag-Freitag 9-18:30 Uhr und am Samstag 9-15 Uhr geöffnet.
        </p>
      </ContentContainer>
    </BaseLayout>
  )
}
