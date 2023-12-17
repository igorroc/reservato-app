import { NextResponse } from "next/server"
import companies from "@/app/api/companies.json"

export async function GET(req: Request, context: any) {
	const { companyId } = context.params
	const company = companies.find((company) => company.id.toString() === companyId)

	if (!company) {
		return NextResponse.next()
	}

	return NextResponse.json(company.services)
}
