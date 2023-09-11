'use client'
import { ProjectList } from '@/components/ProjectList'
import { Project, ProjectWithVoluntaryId } from '@/types/project'
import { Dialog } from '@/components/Dialog'
import { useState } from 'react'
import { ProjectForm } from '@/components/ProjectForm'
import { createProject, updateProject } from '@/api/projects'
import { getUserName } from '@/helpers/getUserName'
import { useRouter } from 'next/navigation'

type Props = {
  projects: Project[]
}

export const Projects = ({ projects }: Props) => {
  const [editingProject, setEditingProject] = useState<ProjectWithVoluntaryId | undefined>(undefined)
  const router = useRouter()

  const saveProject = async (project: ProjectWithVoluntaryId) => {
    if (project.id === undefined) {
      const res = await createProject(project)
      if (res.ok) {
        setEditingProject(undefined)
        router.refresh()
      }
    } else {
      const res = await updateProject(project as Project)
      if (res.ok) {
        setEditingProject(undefined)
        router.refresh()
      }
    }
  }

  const selectProject = (id: number) => () => {
    setEditingProject(projects.find((project: Project) => project.id === id))
  }

  const toggleProjectActive = (id: number) => async () => {
    const project = projects.find((project: Project) => project.id === id)
    const res = await updateProject({ ...project, active: !project.active })

    if (res.ok) {
      router.refresh()
    }
  }

  const onCreateProject = () => {
    setEditingProject({ name: '', user_name: getUserName(), active: true, id: undefined })
  }

  return (
    <>
      <Dialog open={editingProject !== undefined}>
        {editingProject && <ProjectForm initialContactValue={editingProject} onSave={saveProject} onCancel={() => setEditingProject(undefined)} />}
      </Dialog>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="btn btn-primary btn-circle" onClick={onCreateProject}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"/>
          </svg>
        </button>
      </div>

      <ProjectList projects={projects} selectProject={selectProject} toggleProjectActive={toggleProjectActive} />
    </>
  )
}