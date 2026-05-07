import Link from "next/link";

export default function Sobre() {
	return (
		<main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
			<section className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-8">
				<p className="text-sm font-semibold text-emerald-700">Sobre nós</p>
				<h1 className="mt-3 text-3xl font-bold">Academia PowerFit</h1>
				<p className="mt-4 leading-7 text-slate-700">
					Esse projeto foi feito para mostrar uma página inicial de uma academia,
					com navegação simples e informações básicas.
				</p>

				<div className="mt-8 space-y-4">
					<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
						<h2 className="font-semibold">Estrutura simples</h2>
						<p className="mt-1 text-sm text-slate-600">
							Espaço para musculação, cardio e outras atividades.
						</p>
					</div>
					<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
						<h2 className="font-semibold">Ajuda no treino</h2>
						<p className="mt-1 text-sm text-slate-600">
							Acompanhamento para quem está começando ou já treina.
						</p>
					</div>
					<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
						<h2 className="font-semibold">Resultados</h2>
						<p className="mt-1 text-sm text-slate-600">
							Foco em saúde, disciplina e evolução.
						</p>
					</div>
				</div>

				<Link
					href="/"
					className="mt-8 inline-flex rounded-lg bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-700"
				>
					Voltar para a página inicial
				</Link>
			</section>
		</main>
	);
}
