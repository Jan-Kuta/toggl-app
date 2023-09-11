export type Project = {
  id: number
  name: string
  active: boolean
  user_name: string
}

export type ProjectWithVoluntaryId = Omit<Project, 'id'> & { id?: number }