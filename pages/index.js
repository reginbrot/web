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
        <h2>Renovierungsarbeiten bis 1. November</h2>
  
        <p>
          Wir renovieren vom 25.10-1.11. und haben ab dem 2.11. wieder wie gewohnt geöffnet.
        </p>
      </ContentContainer>
    </BaseLayout>
  )
}
