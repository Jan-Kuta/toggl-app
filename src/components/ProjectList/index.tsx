
type Poject = {
  id: number
  name: string
  active: boolean
  user_name: string
}

type Props = {
  projects: Poject[]
}

export const ProjectList = ({projects}: Props) => (
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
        <tr>
          <td>
            <div className="font-bold">{project.name}</div>
          </td>
          <td>
            {project.user_name}
          </td>
          <th className="flex justify-end flex-wrap">
            {/* edit */}
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path
                  d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"/>
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"/>
              </svg>
            </button>
          </th>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
)