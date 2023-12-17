import Header from "@/components/Header"
import { formatDuration } from "@/utils/formatters"
import Image from "next/image"
import React from "react"
import { PiMoon, PiSun, PiSunHorizon } from "react-icons/pi"

export default function Reservar() {
	const services = [
		{
			id: "corte_cabelo_curto",
			name: "Corte de cabelo curto",
			duration: "00:15:00",
		},
		{
			id: "corte_cabelo_longo",
			name: "Corte de cabelo longo",
			duration: "00:30:00",
		},
		{
			id: "alisamento",
			name: "Alisamento",
			duration: "02:00:00",
		},
		{
			id: "progressiva",
			name: "Progressiva",
			duration: "04:00:00",
		},
	]

	const turns = [
		{
			id: "morning",
			name: "Manhã",
			available: true,
			icon: <PiSunHorizon size={56} />,
		},
		{
			id: "afternoon",
			name: "Tarde",
			available: true,
			icon: <PiSun size={56} />,
		},
		{
			id: "night",
			name: "Noite",
			available: false,
			icon: <PiMoon size={56} />,
		},
	]

	const times = [
		{
			id: "07:00",
			time: "07:00 - 09:00",
			available: false,
		},
		{
			id: "08:00",
			time: "08:00 - 10:00",
			available: true,
		},
		{
			id: "09:00",
			time: "09:00 - 11:00",
			available: true,
		},
		{
			id: "10:00",
			time: "10:00 - 12:00",
			available: true,
		},
	]

	return (
		<div className="flex flex-col p-12 md:p-24">
			<Header title="Agendamentos" back={false} />
			<form action="" className="flex flex-col gap-8">
				<div className="flex flex-col gap-2">
					<label htmlFor="">Selecione o serviço</label>
					<div className="flex gap-2 flex-wrap">
						{services.map((service) => (
							<div key={service.id} className="f flex-1 min-w-max">
								<input
									type="radio"
									name="service"
									id={service.id}
									className="hidden peer"
								/>
								<label
									htmlFor={service.id}
									className="flex flex-col p-2 rounded-xl items-center bg-white text-black peer-checked:bg-blue-500 peer-checked:text-white transition-all cursor-pointer hover:bg-gray-200"
								>
									<span>{service.name}</span>
									<span>{formatDuration(service.duration)}</span>
								</label>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="">Selecione o turno</label>
					<div className="flex gap-2">
						{turns.map((turn) => (
							<div key={turn.id} className="f flex-1 min-w-max">
								<input
									type="radio"
									name="turn"
									id={turn.id}
									className="hidden peer"
									disabled={!turn.available}
								/>
								<label
									htmlFor={turn.id}
									className={`flex flex-col gap-4 p-4 rounded-xl items-center bg-white text-black peer-checked:bg-blue-500 peer-checked:text-white ${
										turn.available
											? "cursor-pointer hover:bg-gray-200"
											: "cursor-not-allowed opacity-50"
									} transition-all`}
								>
									{turn.icon}
									<span>{turn.name}</span>
								</label>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="">Selecione o horário</label>
					<div className="flex gap-2 flex-wrap">
						{times.map((time) => (
							<div key={time.id} className="f flex-1 min-w-max">
								<input
									type="radio"
									name="time"
									id={time.id}
									className="hidden peer"
									disabled={!time.available}
								/>
								<label
									htmlFor={time.id}
									className={`flex flex-col p-2 px-8 rounded-xl items-center bg-white text-black peer-checked:bg-blue-500 peer-checked:text-white ${
										time.available
											? "cursor-pointer hover:bg-gray-200"
											: "cursor-not-allowed opacity-50"
									} transition-all`}
								>
									<span>{time.time}</span>
								</label>
							</div>
						))}
					</div>
				</div>

				<button
					type="submit"
					className="flex gap-2 items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-center font-bold rounded-lg p-4 transition-all"
				>
					<Image src="/images/icon.svg" width={16} height={16} alt="Logo da Reservato" />
					Agendar horário
				</button>
			</form>
		</div>
	)
}
