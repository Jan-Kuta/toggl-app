import { getProjects } from '@/api/projects'

async function getData() {
  const res = await getProjects()
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Projects() {
  const data = await getData()
  return (
    <>
      <h1 className="text-2xl font-bold">Projects</h1>
      {JSON.stringify(data)}
    </>
  )
}
