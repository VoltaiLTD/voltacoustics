"use client";
import { useState } from "react";
export default function Quote(){
  const [w,setW]=useState(5); const [h,setH]=useState(3); const pricePerM2=28000;
  const area=w*h, total=Math.ceil(area*1.08*pricePerM2);
  return (
    <section className="section container">
      <h1>Get a Quote</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div className="card grid gap-3">
          <label>Width (m)</label><input type="number" value={w} onChange={e=>setW(parseFloat(e.target.value||"0"))} className="rounded-xl px-3 py-2 bg-[#111] border border-white/10"/>
          <label>Height (m)</label><input type="number" value={h} onChange={e=>setH(parseFloat(e.target.value||"0"))} className="rounded-xl px-3 py-2 bg-[#111] border border-white/10"/>
        </div>
        <div className="card">
          <div>Area: {area.toFixed(2)} m²</div>
          <div className="mt-1 font-semibold">Total: ₦{total.toLocaleString()}</div>
        </div>
      </div>
    </section>
  );
}
