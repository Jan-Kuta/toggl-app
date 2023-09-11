import { Project } from '@/types/project'

type Props = {
  projects: Project[]
  selectProject: (id: number) => () => void
  toggleProjectActive: (id: number) => () => void
}

export const ProjectList = ({projects, selectProject, toggleProjectActive}: Props) => (
  <div className="overflow-x-auto card bg-base-100">
    <table className="table ">
      {/* head */}
      <thead>
      <tr>
        <th>Project name</th>
        <th>Creator</th>
        <th />
      </tr>
      </thead>
      <tbody>
      {projects.map((project) => (
        <tr className={project.active ? undefined : 'line-through bg-base-200'} key={project.id}>
          <td>
            <div className="font-bold">{project.name}</div>
          </td>
          <td>
            {project.user_name}
          </td>
          <th className="flex justify-end flex-wrap">
            {/* edit */}
            <button className="btn btn-ghost btn-circle" onClick={selectProject(project.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path
                  d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"/>
              </svg>
            </button>
            {/* toggle active */}
            <button className="btn btn-ghost btn-circle" onClick={toggleProjectActive(project.id)}>
              {project.active ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                        clipRule="evenodd"/>
                </svg>
                ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
                </svg>
                )}
                </button>
          </th>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
)