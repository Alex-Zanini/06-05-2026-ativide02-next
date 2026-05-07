import Link from "next/link";

const cards = [
  {
    title: "Treinos personalizados",
    description:
      "Planos feitos sob medida para emagrecimento, hipertrofia e condicionamento físico.",
  },
  {
    title: "Aulas coletivas",
    description:
      "Modalidades como funcional, dança e spinning para manter a motivação em alta.",
  },
  {
    title: "Acompanhamento profissional",
    description:
      "Equipe preparada para orientar sua evolução com segurança e resultados constantes.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <section className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-emerald-700">Academia PowerFit</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Bem-vindo à nossa academia
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
          Este é o site de apresentação da  academia PowerFit,
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/sobre"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700"
          >
            Ir para sobre
          </Link>
          <a
            href="#planos"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
          >
            Ver cards
          </a>
        </div>

        <div id="planos" className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <h2 className="text-lg font-semibold text-slate-900">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
