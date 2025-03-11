export type Task = {
	id: number
	title: string
	description: string
	priority: string
	completed: boolean
}

export type Priority = {
	id: number
	name: string
}

export type Action = {
	type: string
	payload: any
}