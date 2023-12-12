"use client"
import Header from "@/components/Header"
import { useRouter } from "next/navigation"
import { useState, FormEvent } from "react"
import { toast } from "react-toastify"

export default function AddService() {
	const [hideValue, setHideValue] = useState(false)
	const router = useRouter()

	function handleSubmit(event: FormEvent) {
		event.preventDefault()
		const data = new FormData(event.target as HTMLFormElement)
		const payload = Object.fromEntries(data.entries())

		console.log(payload)

		toast.success("Serviço adicionado com sucesso!")

		router.back()
	}

	return (
		<div className="flex flex-col p-6 md:p-12 max-w-2xl mx-auto">
			<Header title="Adicionar Serviço" />
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<div className="flex flex-col w-full gap-2">
					<label htmlFor="name">Nome do Serviço</label>
					<input
						type="text"
						name="name"
						id="name"
						className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none"
						placeholder="Exemplo: Corte de cabelo curto"
						required
					/>
				</div>
				<div className="flex flex-col w-full gap-2">
					<label htmlFor="duration">Duração do serviço</label>
					<input
						type="time"
						name="duration"
						id="duration"
						className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none"
						required
					/>
				</div>
				<div className="flex flex-col w-full gap-2">
					<label htmlFor="price">Preço do serviço</label>
					<input
						type="number"
						name="price"
						id="price"
						className={`p-2 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-gray-400 focus:outline-none ${
							hideValue && "hidden"
						}`}
						placeholder="R$ 100,00"
						required={!hideValue}
						hidden={hideValue}
					/>
					<label htmlFor="hide_value" className="flex items-center gap-2">
						<input
							type="checkbox"
							name="hide_value"
							id="hide_value"
							onChange={() => setHideValue(!hideValue)}
						/>
						Esconder valor
					</label>
				</div>
				<button className="bg-blue-500 text-white w-full p-4 rounded-lg cursor-pointer transition-all hover:bg-blue-600">
					Adicionar Serviço
				</button>
			</form>
		</div>
	)
}
