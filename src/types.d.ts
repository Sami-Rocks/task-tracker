export type Task = {
	id: number
	title: string
	description: string
	priority: string
	completed: boolean
}

export type Priority = {
	label: string
	value: string
}

export type Action = {
	type: string
	payload: any
}