import Reveal from "./Reveal";

const companies = ["Aperture", "Northwind", "Globex", "Initech", "Umbrella", "Stark Labs"];

export default function Logos() {
  return (
    <section className="border-b border-line bg-surface-2 py-9">
      <div className="container-x">
        <p className="mb-[18px] text-center text-[0.85rem] uppercase tracking-[0.12em] text-muted">
          Brands we&apos;ve helped grow
        </p>
        <Reveal className="flex flex-wrap justify-center gap-10">
          {companies.map((c) => (
            <span
              key={c}
              className="font-heading text-[1.15rem] font-medium tracking-[-0.01em] text-muted transition-colors duration-200 hover:text-ink"
            >
              {c}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
