import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Perfil() {
	const schedules = [
		{
			id: "1",
			company: {
				name: "Ateliê de Beleza Érika Rocha",
				logo: "/images/atelie_erika.png",
			},
			service: "Alisamento",
			date: "12/11/2023",
			time: "09:00 - 11:00",
		},
		{
			id: "2",
			company: {
				name: "Ateliê de Beleza Érika Rocha",
				logo: "/images/atelie_erika.png",
			},
			service: "Corte de cabelo curto",
			date: "22/12/2023",
			time: "15:00 - 15:30",
		},
	]
	return (
		<div className="flex flex-col p-12 md:p-24">
			<Header title="Perfil" back={false} />
			<div className="flex justify-between items-center my-5">
				<div className="flex gap-2">
					<Image
						src="/images/perfil.png"
						alt="Foto de perfil do usuario"
						width={64}
						height={64}
						className="rounded-xl"
					/>
					<div className="flex flex-col justify-center">
						<h1 className="text-bold">Igor Lima Rocha</h1>
						<small className="opacity-50">igor@ilrocha.com</small>
					</div>
				</div>
				<span className="bg-blue-500 py-1 px-4 rounded-full text-white">Novato</span>
			</div>
			<div className="flex flex-col gap-4 my-5">
				<h2 className="text-bold">Agendamentos</h2>
				<div className="flex flex-col rounded-xl overflow-hidden shadow-xl">
					{schedules.map((schedule) => (
						<Link
							href={`/agendamentos/${schedule.id}`}
							key={schedule.id}
							className="flex items-center justify-between bg-white p-4 border-b-2 border-gray-200 cursor-pointer hover:bg-gray-100 transition-all"
						>
							<div className="flex flex-col gap-2">
								<h3 className="text-bold">{schedule.service}</h3>
								<div className="flex items-center gap-2">
									<div className="w-[24px] h-[24px] ">
										<Image
											src={schedule.company.logo}
											alt={`Logo de ${schedule.company.name}`}
											width={64}
											height={64}
											className="rounded-xl"
										/>
									</div>
									<small className="opacity-50 max-w-[10ch] overflow-x-hidden text-ellipsis whitespace-nowrap">
										{schedule.company.name}
									</small>
								</div>
							</div>
							<div className="flex flex-col gap-2 items-end">
								<span>{schedule.time}</span>
								<span className="text-bold">{schedule.date}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
