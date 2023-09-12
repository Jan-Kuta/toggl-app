import { useEffect, useState } from 'react'
import { Project } from '@/types/project'

type Props = {
  name: string
  value: number
  handleChange: () => void
}

export const ProjectSelector = ({name, value, handleChange}: Props) => {
  const [projects, setProjects] = useState<Project[]>([])
  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data.data.filter((item) => item.active === true)))
  }, [])

  return (
    <select name={name} value={value} onChange={handleChange} className="select select-bordered w-full max-w-xs">
      {projects.map((project) => (
        <option key={project.id} value={project.id}>{project.name}</option>
      ))}
    </select>
  )
}