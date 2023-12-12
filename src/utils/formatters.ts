export function formatDuration(duration: string, options: { full?: boolean } = {}) {
	const [hours, minutes, seconds] = duration.split(":").map(Number)
	const formatted = []

	if (hours > 0) {
		if (options.full) {
			formatted.push(`${hours} hora${hours > 1 ? "s" : ""}`)
		} else {
			formatted.push(`${hours}h`)
		}
	}

	if (minutes > 0) {
		if (options.full) {
			formatted.push(`${minutes} minuto${minutes > 1 ? "s" : ""}`)
		} else {
			formatted.push(`${minutes}min`)
		}
	}

	if (seconds > 0) {
		if (options.full) {
			formatted.push(`${seconds} segundo${seconds > 1 ? "s" : ""}`)
		} else {
			formatted.push(`${seconds}s`)
		}
	}

	return formatted.join(" ")
}

export function formatDate(date: string) {
	const fullDate = new Date(date)
	const day = fullDate.getDate()
	const month = fullDate.getMonth()
	const year = fullDate.getFullYear()

	return `${day}/${month}/${year}`
}
