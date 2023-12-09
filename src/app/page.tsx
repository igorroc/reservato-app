import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
			<div className="flex flex-col items-center justify-center">
				<Image src="/images/logo.svg" alt="Reservato" width={256} height={256} />
				<h1 className="text-4xl font-bold text-center mt-8">
					O futuro dos agendamentos online
				</h1>
				<p className="text-xl text-center mt-4">
					Prepare-se para a revolução dos agendamentos. Reservato está chegando para
					transformar seu negócio e conectar você com seus clientes de maneira mais
					eficiente.
				</p>
			</div>
			<div className="flex items-center justify-items-center w-full overflow-x-auto">
				<div className="flex items-center justify-self-center items-stretch overflow-x-auto gap-4 mt-4 w-full pb-4 snap-x snap-mandatory">
					<div className="min-w-full md:min-w-max md:max-w-sm flex flex-col gap-3 p-4 justify-center bg-white shadow-xl rounded-xl snap-center">
						<h2 className="text-xl text-bold">📅 Transforme seu calendário</h2>
						<p className="md:max-w-sm">
							Diga adeus aos horários perdidos e olá para um sistema de agendamento
							otimizado e sem esforço.
						</p>
					</div>
					<div className="min-w-full md:min-w-max md:max-w-sm flex flex-col gap-3 p-4 justify-center bg-white shadow-xl rounded-xl snap-center">
						<h2 className="text-xl text-bold">📈 Cresça seu negócio</h2>
						<p className="md:max-w-sm">
							Alcance mais clientes, ofereça serviços exclusivos e amplie suas
							oportunidades de receita.
						</p>
					</div>
					<div className="min-w-full md:min-w-max md:max-w-sm flex flex-col gap-3 p-4 justify-center bg-white shadow-xl rounded-xl snap-center">
						<h2 className="text-xl text-bold">📲 Mantenha-se conectado</h2>
						<p className="md:max-w-sm">
							Com nossa integração com o WhatsApp, você pode interagir com os clientes
							onde eles já estão - no celular deles!
						</p>
					</div>
					<div className="min-w-full md:min-w-max md:max-w-sm flex flex-col gap-3 p-4 justify-center bg-white shadow-xl rounded-xl snap-center">
						<h2 className="text-xl text-bold">🎨 Personalize sua oferta</h2>
						<p className="md:max-w-sm">
							Cadastre seus serviços, defina sua disponibilidade e mostre o que torna
							seu negócio único.
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center">
				<Link
					href="/login"
					className="bg-blue-500 hover:bg-blue-600 text-white text-center font-bold rounded-lg p-4 w-96 mt-4 transition-all"
				>
					Quero agendar um horário
				</Link>
				<Link
					href="/cadastrar"
					className="bg-transparent text-black text-center font-bold rounded-lg p-4 w-96 mt-4 border-2 border-black hover:bg-blue-600 hover:text-white hover:border-transparent transition-all"
				>
					Quero me cadastrar
				</Link>
			</div>
		</main>
	)
}
