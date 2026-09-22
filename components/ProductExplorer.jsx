import Image from "next/image";
import { products } from "@/lib/data";
import { IconArrowRight } from "./Icons";

export default function ProductExplorer() {
  return (
    <section id="collection" className="section" aria-labelledby="collection-title">
      <div className="container">
        <header className="sheet" data-reveal>
          <span className="sheet__no">02</span>
          <span className="sheet__rule" aria-hidden />
          <span className="sheet__title" id="collection-title">
            The Collection
          </span>
        </header>

        <div className="collection__head">
          <h2 className="display-2" data-reveal>
            Elevators for Every Space
          </h2>
          <p data-reveal style={{ "--reveal-delay": "0.1s" }}>
            Eight families of vertical mobility — each engineered around a building type, a duty
            cycle and an idea of how movement should feel.
          </p>
        </div>

        <div className="collection-grid">
          {products.map((p, i) => (
            <a
              key={p.id}
              href={p.href}
              className={`product-card${p.span ? ` product-card--${p.span}` : ""}`}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 0.08}s` }}
              data-track={`product-${p.id}`}
            >
              <Image
                src={`https://images.unsplash.com/${p.img}?w=1200&q=70&auto=format&fit=crop`}
                alt={p.alt}
                fill
                sizes="(min-width: 720px) 50vw, 78vw"
                loading="lazy"
              />
              <span className="product-card__body">
                <span className="product-card__kicker">{p.kicker}</span>
                <h3>{p.name}</h3>
                <span className="product-card__desc">{p.desc}</span>
                <span className="product-card__cta">
                  Explore Solution <IconArrowRight className="arrow" size={13} />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
