import Reveal from "./Reveal";

const companies = ["Aperture", "Northwind", "Globex", "Initech", "Umbrella", "Stark Labs"];

export default function Logos() {
  return (
    <section className="border-b border-line bg-surface-2 py-9">
      <div className="container-x">
        <p className="mb-[18px] text-center text-[0.85rem] uppercase tracking-[0.12em] text-muted">
          Powering teams at companies you know
        </p>
        <Reveal className="flex flex-wrap justify-center gap-10">
          {companies.map((c) => (
            <span
              key={c}
              className="text-[1.15rem] font-bold tracking-[-0.02em] text-[#94a3b8] transition-colors duration-200 hover:text-ink"
            >
              {c}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
