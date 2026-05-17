import type { Concept } from '../types';
import ConceptCard from '../components/ConceptCard';

type HomeProps = {
  concepts: Concept[];
};

export default function Home({ concepts }: HomeProps) {
  return (
    <section className="space-y-12">
      <div className="rounded-[2rem] border border-white/80 bg-white/80 p-10 shadow-soft backdrop-blur-xl">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full bg-sand-warm px-4 py-1 text-sm font-semibold text-slate-900">
            Launchpad
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Learn German concepts one beautiful page at a time.
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            A modular learning app for grammar, vocabulary, and concept notes. Start with conjunctions, then add new topics as you grow.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-sky-light/80 p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-900">Static content first</h2>
              <p className="mt-3 text-slate-600">Add lessons as JSON files. No database, no complexity.</p>
            </div>
            <div className="rounded-3xl bg-sand-light/80 p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-900">Ready for deployment</h2>
              <p className="mt-3 text-slate-600">Connect this repo to GitHub Pages, Netlify, or Vercel and your updates go live automatically.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {concepts.map((concept) => (
          <ConceptCard key={concept.slug} concept={concept} />
        ))}
      </div>
    </section>
  );
}
