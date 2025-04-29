export interface IUser {
	id?: string
	name: string
	surname: string
	patronymic?: string | null
	phone?: string | null
	address?: string | null
	birthday?: string | null
	email: string
	password?: string
	role_id: number
	group_id?: string | null
	organization_id?: string
	isRegister?: boolean
	isArchive?: boolean
	organization?: IOrganization
	group?: IGroup
	role?: IRole
}

export interface IOrganization {
	id: string
	name: string
	tarrif_id?: string | null
}

export interface IRole {
	id: number
	name: string
}

export interface IGroup {
	id: string
	name: string
	course: number
	max_course: number
	admissioon_date: Date
	classroomTeacher_id: string
	speciality_id: string
	organization_id?: string
	isArchive?: boolean
	organization?: IOrganization
	speciality?: ISpeciality
	classroomTeacher?: IUser | null
}

export interface ISpeciality {
	id: string
	name: string
	organization_id?: string
	organization?: IOrganization
}
