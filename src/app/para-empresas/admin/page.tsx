import { formatDuration, formatPrice } from "@/utils/formatters"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { PiPlus } from "react-icons/pi"
import { MdKeyboardDoubleArrowDown } from "react-icons/md"
import Header from "@/components/Header"

export default function Admin() {
	const services = [
		{
			name: "Alisamento",
			price: 150,
			duration: "02:00:00",
		},
		{
			name: "Corte de cabelo curto",
			price: 50,
			duration: "00:15:00",
		},
		{
			name: "Corte de cabelo longo",
			price: 80,
			duration: "00:30:00",
		},
		{
			name: "Progressiva",
			price: 200,
			duration: "04:00:00",
		},
	]

	const schedules = [
		{
			date: "15/12/2023",
			hour: "08:00",
			end_hour: "08:15",
			service: "Corte de cabelo curto",
			client: "Igor Rocha",
		},
		{
			date: "20/12/2023",
			hour: "15:00",
			end_hour: "15:30",
			service: "Alisamento",
			client: "Beatriz Pereira",
		},
	]

	return (
		<div className="flex flex-col p-6 md:p-12 max-w-2xl mx-auto">
			<Header title="Perfil da Empresa" back={false} />
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-2">
					<div className="bg-black">
						<Image
							src="/images/atelie_erika.png"
							alt="Logo da empresa"
							width={64}
							height={64}
						/>
					</div>
					<div className="flex flex-col">
						<h2 className="text-bold">Ateliê de Beleza Érika Rocha</h2>
						<p className="opacity-50">contato@empresa.com</p>
					</div>
				</div>
				<span className="bg-blue-500 text-white rounded-2xl px-4 py-1">Premium</span>
			</div>

			<div className="my-5 flex flex-col gap-2">
				<div className="flex justify-between items-center">
					<span>Serviços</span>
					<Link
						href="/para-empresas/admin/adicionar-servico"
						className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all cursor-pointer"
					>
						<PiPlus size={20} />
					</Link>
				</div>
				<div className="flex flex-col bg-gray-200 gap-[2px] rounded-xl overflow-hidden shadow-lg">
					{services.map((service, index) => (
						<div
							className="flex justify-between items-center bg-white p-4 hover:bg-gray-100 transition-all cursor-pointer"
							key={index}
						>
							<div className="flex flex-col">
								<span>{service.name}</span>
								<span className="opacity-50">
									{formatDuration(service.duration, {
										full: true,
									})}
								</span>
							</div>
							<span>{formatPrice(service.price)}</span>
						</div>
					))}
					<div className="bg-blue-500 text-white flex items-center justify-center gap-2 p-2 cursor-pointer hover:bg-blue-600 transition-all">
						<MdKeyboardDoubleArrowDown />
						Ver mais
						<MdKeyboardDoubleArrowDown />
					</div>
				</div>
			</div>

			<div className="my-5 flex flex-col gap-2">
				<div className="flex justify-between items-center">
					<span>Agenda</span>
				</div>
				<div className="flex flex-col bg-gray-200 gap-[2px] rounded-xl overflow-hidden shadow-lg">
					{schedules.map((schedule, index) => (
						<div
							className="flex justify-between items-center bg-white p-4 hover:bg-gray-100 transition-all cursor-pointer"
							key={index}
						>
							<div className="flex flex-col">
								<span>{schedule.client}</span>
								<span className="opacity-50">{schedule.service}</span>
							</div>
							<div className="flex flex-col">
								<span>
									{schedule.hour} - {schedule.end_hour}
								</span>
								<span className="opacity-50">{schedule.date}</span>
							</div>
						</div>
					))}
					<div className="bg-blue-500 text-white flex items-center justify-center gap-2 p-2 cursor-pointer hover:bg-blue-600 transition-all">
						<MdKeyboardDoubleArrowDown />
						Ver mais
						<MdKeyboardDoubleArrowDown />
					</div>
				</div>
			</div>
		</div>
	)
}
