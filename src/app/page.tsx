import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
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
			<div className="flex flex-col items-center justify-center">
				<Link
					href="/login"
					className="bg-blue-500 hover:bg-blue-600 text-white text-center font-bold rounded-lg p-4 w-96 mt-4 transition-all"
				>
					Quero agendar um horário
				</Link>
				<Link
					href="/cadastrar"
					className="bg-transparent hover:bg-blue-600 text-black text-center font-bold rounded-lg p-4 w-96 mt-4 border-2 border-black hover:bg-blue-600 hover:text-white hover:border-transparent transition-all"
				>
					Quero me cadastrar
				</Link>
			</div>
		</main>
	)
}
