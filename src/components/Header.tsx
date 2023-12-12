"use client"

import { useRouter } from "next/navigation"
import React from "react"
import { FaLongArrowAltLeft, FaRegBell } from "react-icons/fa"
import { TbGridDots } from "react-icons/tb"

type HeaderProps = {
	title: string
	back?: boolean
}

export default function Header({ title, back = true }: HeaderProps) {
	const router = useRouter()

	function handleGoBack() {
		router.back()
	}

	return (
		<header className="border-b-2 border-opacity-10 border-gray-900 pb-4 mb-8">
			<div className="flex items-center justify-between">
				<div className="flex gap-2 items-center">
					<FaLongArrowAltLeft
						size={24}
						className={`cursor-pointer ${back ? "" : "hidden"}`}
						onClick={handleGoBack}
					/>
					<h1 className="font-bold">{title}</h1>
				</div>
				<div className="flex gap-4">
					<FaRegBell size={24} className="cursor-pointer" />
					<TbGridDots size={24} className="cursor-pointer" />
				</div>
			</div>
		</header>
	)
}
