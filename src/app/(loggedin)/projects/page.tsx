import { Projects } from '@/components/Projects'
import { generateLocalUrl } from '@/helpers/generateUrl'

async function getData() {

  const res = await fetch(generateLocalUrl('/api/projects'), {
    method: 'GET',
    next: {
      tags: ['projects'],
    }
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function ProjectsPage() {
  const { data } = await getData()
  return (
    <Projects projects={data}/>
  )
}
