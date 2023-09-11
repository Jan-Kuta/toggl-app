import { Input } from '../Input'
import { useState } from 'react'
import { ProjectWithVoluntaryId } from '@/types/project'


type Props = {
  initialContactValue: ProjectWithVoluntaryId
  onSave: (project: ProjectWithVoluntaryId) => void
  onCancel: () => void
}

export const ProjectForm = ({ initialContactValue, onSave, onCancel } : Props) => {
  const [project, setProject] = useState(initialContactValue)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(project)
  }

  return (
    <form className="space-y-6" onSubmit={handleSave}>
      <Input label="Project Name" name="name" value={project.name} onChange={handleInputChange} />
      <div className="modal-action">
        <button type="submit" className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}