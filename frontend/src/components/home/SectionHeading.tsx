type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  id,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-title-row">
        <h2 id={id}>{title}</h2>
      </div>
    </header>
  );
}
