import Link from "next/link";
export default function Home(){
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1>Innovative Panel & Acoustic Solutions. Impeccably Executed.</h1>
          <p className="mt-3 text-white/70">ACP, WPC, and acoustic expertise — design, supply, installation, and noise control.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/get-a-quote" className="btn btn-gold">Request a Quote</Link>
            <Link href="/ai-design-visualizer" className="btn btn-outline">Upload Your Space</Link>
          </div>
        </div>
        <div className="card">Hero image/video placeholder</div>
      </div>
    </section>
  );
}
