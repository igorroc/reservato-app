import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FcGoogle } from "react-icons/fc"

export default function Login() {
	return (
		<div className="min-h-screen flex flex-col p-12 md:p-24 justify-center items-center">
			<div className="flex flex-col gap-16 w-full max-w-xl justify-center items-center">
				<Image src="/images/logo.svg" alt="Reservato" width={256} height={256} />
				<p className="text-center max-w-xs mx-auto">
					Agende seus horários no conforto do seu celular
				</p>
				<Link
					className="w-full flex items-center justify-center gap-2 p-4 border-2 border-black hover:bg-blue-500 hover:border-transparent hover:text-white rounded-xl transition-all"
					href="/perfil"
				>
					<FcGoogle size={32} />
					Entrar com o Google
				</Link>
			</div>
		</div>
	)
}
