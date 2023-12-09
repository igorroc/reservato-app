import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Reservato | O Futuro dos Agendamentos Online",
	description:
		"Prepare-se para a revolução dos agendamentos. Reservato está chegando para transformar seu negócio e conectar você com seus clientes de maneira mais eficiente.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
