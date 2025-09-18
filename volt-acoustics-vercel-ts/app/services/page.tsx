import Link from "next/link";
const services = [
  {slug:"interior-panel-design", title:"Interior Panel Design"},
  {slug:"exterior-facade-cladding", title:"Exterior Facade Cladding"},
  {slug:"installation", title:"Installation"},
  {slug:"acoustic-designs", title:"Acoustic Designs"},
  {slug:"soundproofing", title:"Soundproofing"},
  {slug:"soundproofed-doors", title:"Soundproofed Doors"},
  {slug:"sales-of-acoustic-panels", title:"Sales of Acoustic Panels"},
];
export default function Services(){
  return (
    <section className="section container">
      <h1>Services</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {services.map(s => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="card">
            <h3>{s.title}</h3>
            <p className="text-white/70 mt-2">Professional delivery with precision, safety, and speed.</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
