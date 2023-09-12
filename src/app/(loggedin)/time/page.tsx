import { Projects } from '@/components/Projects'
import { generateLocalUrl } from '@/helpers/generateUrl'
import { TimeEntryForm } from '@/components/TimeEntryForm'


async function getData() {

  const res = await fetch(generateLocalUrl('/api/time-entries'), {
    method: 'GET',
    cache: 'no-store'
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function TimePage() {
  const { data } = await getData()
  return (
    <>
      <TimeEntryForm />
      <p>{JSON.stringify(data)}</p>
    </>
  )
}
