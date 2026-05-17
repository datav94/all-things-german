import { Link } from 'react-router-dom';
import type { Concept } from '../types';

type LayoutProps = {
  children: React.ReactNode;
  concepts: Concept[];
};

export default function Layout({ children, concepts }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_26%),linear-gradient(180deg,_#f0fbff_0%,_#fef2d9_45%,_#ebf8f4_100%)] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-white/80 bg-white/90 backdrop-blur-xl">
        <div className="container mx-auto flex flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Link to="/" className="text-2xl font-semibold tracking-tight text-slate-900">
              All Things German
            </Link>
            <p className="mt-1 text-sm text-slate-600">Beachy German grammar notes for every concept.</p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-700">
            <Link to="/" className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-soft transition hover:border-slate-300">
              Home
            </Link>
            {concepts.map((concept) => (
              <Link
                key={concept.slug}
                to={`/${concept.slug}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-soft transition hover:border-slate-300"
              >
                {concept.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">{children}</main>

      <footer className="border-t border-white/80 bg-white/85 py-8 text-center text-sm text-slate-600">
        <p>Static learning content, perfect for GitHub Pages, Netlify, or Vercel.</p>
      </footer>
    </div>
  );
}
