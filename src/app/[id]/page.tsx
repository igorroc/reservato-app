import Image from "next/image"
import Link from "next/link"
import React from "react"

type PageProps = {
	params: {
		id: string
	}
}

export default function CompanyPage({ params: { id } }: PageProps) {
	return (
		<main className="flex flex-col gap-2 items-center justify-center h-screen">
			<div className="flex flex-col gap-10 items-center justify-center max-w-sm">
				<div className="flex flex-col gap-2 items-center justify-center">
					<Image
						src="/images/atelie_erika.png"
						alt="Logo da empresa"
						width={64}
						height={64}
					/>
					<h1 className="text-bold">Ateliê de Beleza Érika Rocha</h1>
				</div>
				<p>Agende seus horários no conforto do seu celular</p>
				<form action="" className="w-full flex flex-col gap-2 items-center justify-center">
					<Link
						href={`${id}/agendar`}
						className="w-full border-[1px] border-gray-500 rounded-xl py-2 text-center"
					>
						Entrar com o Google
					</Link>
				</form>
			</div>
			<footer className="flex flex-col gap-2 items-center justify-center fixed bottom-10">
				<p>Desenvolvido por</p>
				<Image src="/images/logo.svg" alt="Logo do Reservato" width="212" height="45" />
			</footer>
		</main>
	)
}
