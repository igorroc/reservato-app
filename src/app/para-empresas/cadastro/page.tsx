"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { toast } from "react-toastify"

export default function Cadastro() {
	const [step, setStep] = useState(1)
	const router = useRouter()

	const nichos = ["Salão de Beleza", "Barbearia"]

	function nextStep() {
		setStep(step + 1)
	}

	function createAccount(event: FormEvent) {
		event.preventDefault()
		const data = new FormData(event.target as HTMLFormElement)
		const payload = Object.fromEntries(data.entries())

		console.log(payload)

		toast.success("Conta criada com sucesso!")

		router.push("/123123/admin")
	}

	// qual o tipo typescript para o evento de submit?
	function handleSubmit(event: FormEvent) {
		event.preventDefault()
		if (step == 1) {
			nextStep()
		}
		if (step == 2) {
			createAccount(event)
		}
	}

	return (
		<div className="flex flex-col min-h-screen items-center justify-center">
			<Image src="/images/logo.svg" alt="Reservato" width={256} height={256} />

			<h1 className="text-xl text-bold my-5">
				{step == 1 ? "Faça seu cadastro" : "Informações da Empresa"}
			</h1>

			<form onSubmit={handleSubmit} className="w-11/12 max-w-xl flex flex-col gap-5">
				<div className={`flex flex-col gap-5 ${step != 1 && "hidden"}`}>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="name">Nome do Estabelecimento</label>
						<input
							type="text"
							name="name"
							id="name"
							className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none"
							placeholder="Esse nome será exibido para seus clientes"
							required={step == 1}
						/>
					</div>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="owner_name">Nome do Proprietário/Gerente</label>
						<input
							type="text"
							name="owner_name"
							id="owner_name"
							className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none"
							placeholder="Nome completo do responsável"
							required={step == 1}
						/>
					</div>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="email">E-mail comercial</label>
						<input
							type="email"
							name="email"
							id="email"
							className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none"
							placeholder="E-mail para contato"
							required={step == 1}
						/>
					</div>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="phone">Telefone comercial</label>
						<input
							type="text"
							name="phone"
							id="phone"
							className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none"
							placeholder="(XX) XXXXX-XXXX"
							required={step == 1}
						/>
					</div>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="password">Senha</label>
						<input
							type="password"
							name="password"
							id="password"
							className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none"
							placeholder="Crie uma senha segura"
							required={step == 1}
						/>
					</div>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="password_confirmation">Confirme sua senha</label>
						<input
							type="password"
							name="password_confirmation"
							id="password_confirmation"
							className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none"
							placeholder="Digite a senha novamente"
							required={step == 1}
						/>
					</div>
				</div>
				<div className={`flex flex-col gap-5 ${step != 2 && "hidden"}`}>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="address">Endereço do Estabelecimento</label>
						<input
							type="text"
							name="address"
							id="address"
							className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none"
							placeholder="Rua, número, bairro, cidade"
							required={step == 2}
						/>
					</div>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="address">Descrição do Estabelecimento</label>
						<textarea
							name="description"
							id="description"
							className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none"
							placeholder="Conte um pouco sobre seu negócio"
						/>
					</div>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="address">Nicho de Negócio</label>
						<select
							name="business"
							id="business"
							className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none"
							required={step == 2}
						>
							<option value="">Selecione um nicho</option>
							{nichos.map((nicho) => (
								<option value={nicho} key={nicho}>
									{nicho}
								</option>
							))}
						</select>
					</div>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="logo">Logomarca do Estabelecimento</label>
						<input
							type="file"
							name="logo"
							id="logo"
							className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none"
							required={step == 2}
						/>
					</div>
				</div>

				<div className="flex gap-2 align-center justify-center">
					<span
						className={`block w-16 h-2 rounded-xl ${
							step == 1 ? "bg-blue-500" : "bg-gray-300"
						}`}
					></span>
					<span
						className={`block w-16 h-2 rounded-xl ${
							step == 2 ? "bg-blue-500" : "bg-gray-300"
						}`}
					></span>
				</div>

				<button className="bg-blue-500 p-4 text-white rounded-lg hover:bg-blue-600">
					{step == 1 ? "Próximo" : "Finalizar Cadastro"}
				</button>
			</form>
		</div>
	)
}
