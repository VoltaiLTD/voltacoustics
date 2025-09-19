import Link from "next/link";

export default function Home() {
  return (
    <section className="relative">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-10 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero.jpg"  // optional fallback image
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="container min-h-[70vh] flex items-center">
        <div>
          <h1>Innovative Panel & Acoustic Solutions. Impeccably Executed.</h1>
          <p className="mt-3 text-white/80 max-w-xl">
            ACP, WPC, and acoustic expertise — design, supply, installation, and noise control.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/get-a-quote" className="btn btn-gold">Request a Quote</Link>
            <Link href="/ai-design-visualizer" className="btn btn-outline">Upload Your Space</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

