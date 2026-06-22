import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mb-2 text-[clamp(1.7rem,3.5vw,2.6rem)] font-bold tracking-[-0.02em]">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  );
}
