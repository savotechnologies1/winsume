import Image from "next/image";
import { insights } from "@/lib/data";
import { IconArrowRight } from "./Icons";

export default function InsightsGrid() {
  return (
    <section id="insights" className="section" aria-labelledby="insights-title">
      <div className="container">
        <header className="sheet" data-reveal>
          <span className="sheet__rule" aria-hidden />
          <span className="sheet__title" id="insights-title">
            Insights
          </span>
        </header>

        <div className="collection__head">
          <h2 className="display-2" data-reveal>
            From the World of Vertical Mobility
          </h2>
          <a className="text-link" href="/winsume/insights" data-track="cta-insights" data-reveal style={{ "--reveal-delay": "0.1s" }}>
            Explore Insights <IconArrowRight className="arrow" />
          </a>
        </div>

        <div className="insights-grid">
          {insights.map((a, i) => (
            <a className="insight-card" href={a.href} key={a.title} data-reveal style={{ "--reveal-delay": `${i * 0.08}s` }} data-track={`insight-${a.href}`}>
              <div className="doors">
                <Image
                  src={`https://images.unsplash.com/${a.img}?w=900&q=68&auto=format&fit=crop`}
                  alt={a.title}
                  width={900}
                  height={563}
                  sizes="(min-width: 760px) 33vw, 92vw"
                  loading="lazy"
                />
              </div>
              <span className="tag">{a.tag}</span>
              <h3>{a.title}</h3>
              <p>{a.dek}</p>
              <span className="read">
                Read <IconArrowRight className="arrow" size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
