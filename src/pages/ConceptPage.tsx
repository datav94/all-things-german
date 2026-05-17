import { useParams, Link } from 'react-router-dom';
import type { Concept } from '../types';

type ConceptPageProps = {
  concepts: Concept[];
};

export default function ConceptPage({ concepts }: ConceptPageProps) {
  const { slug } = useParams();
  const concept = concepts.find((item) => item.slug === slug);

  if (!concept) {
    return (
      <div className="rounded-[2rem] border border-white/80 bg-white/80 p-10 shadow-soft text-slate-700">
        <h1 className="text-3xl font-semibold text-slate-900">Concept not found</h1>
        <p className="mt-4 text-slate-600">Try selecting a different topic from the navigation.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <section className="rounded-[2rem] border border-white/80 bg-white/80 p-10 shadow-soft backdrop-blur-xl">
        <div className="space-y-4">
          <span className="inline-flex rounded-full bg-sky-light px-4 py-1 text-sm font-semibold text-sky-deep">
            {concept.title}
          </span>
          <h1 className="text-4xl font-semibold text-slate-900">{concept.title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">{concept.description}</p>
        </div>
      </section>

      <div className="space-y-10">
        {concept.sections.map((section) => (
          <section key={section.title} className="rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-soft backdrop-blur-xl">
            <div className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                  <p className="mt-2 text-slate-600">{section.description}</p>
                </div>
                {section.highlight ? (
                  <span className="rounded-full bg-sand-light px-4 py-2 text-sm font-medium text-slate-900">
                    {section.highlight}
                  </span>
                ) : null}
              </div>
              <div className="overflow-hidden rounded-3xl border border-slate-200">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th className="px-5 py-4 font-semibold">Conjunction</th>
                      <th className="px-5 py-4 font-semibold">English Meaning</th>
                      <th className="px-5 py-4 font-semibold">Quick Tip</th>
                      <th className="px-5 py-4 font-semibold">Example</th>
                      <th className="px-5 py-4 font-semibold">Note</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-slate-700">
                    {section.rows.map((row) => (
                      <tr key={row.conjunction} className="border-t border-slate-200 hover:bg-slate-50">
                        <td className="px-5 py-4 font-semibold text-slate-900">{row.conjunction}</td>
                        <td className="px-5 py-4">{row.meaning}</td>
                        <td className="px-5 py-4">{row.tip}</td>
                        <td className="px-5 py-4 text-slate-600">{row.example}</td>
                        <td className="px-5 py-4 text-slate-500">{row.note || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
