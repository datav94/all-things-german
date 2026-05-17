import type { Concept } from '../types';
import { Link } from 'react-router-dom';

type ConceptCardProps = {
  concept: Concept;
};

export default function ConceptCard({ concept }: ConceptCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(16,81,62,0.12)]">
      <div className="space-y-4">
        <div className="inline-flex rounded-full bg-sky-light px-4 py-1 text-sm font-semibold text-sky-deep">
          Concept
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">{concept.title}</h2>
        <p className="text-slate-600">{concept.subtitle}</p>
        <p className="text-slate-500">{concept.description}</p>
      </div>
      <Link
        to={`/${concept.slug}`}
        className="mt-8 inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Explore {concept.title}
      </Link>
    </article>
  );
}
