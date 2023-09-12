'use client'
import { Input } from '@/components/Input'
import { useEffect, useState } from 'react'
import { getUserName } from '@/helpers/getUserName'
import { formatDate } from '@/helpers/formatDate'
import { generateLocalUrl } from '@/helpers/generateUrl'
import { useRouter } from 'next/navigation'

const initalState = {task: '', start: '', end: '', project_id: 1, user_name: getUserName()}
export const TimeEntryForm = () => {
  const router = useRouter()
  // todo - select project
  const [timeEntry, setTimeEntry] = useState(initalState)

  useEffect(() => {
    if (timeEntry.end) {
      fetch(generateLocalUrl('/api/time-entries'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        },
        body: JSON.stringify(timeEntry)
      })
        .then(() => {
          setTimeEntry(initalState)
          router.refresh()
        })
    }}, [timeEntry])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTimeEntry({ ...timeEntry, [name]: value });
  };

  return (
    <form className="space-y-6">
      <div className="flex flex-wrap mb-6 items-end">
        <Input label="Task" name="task" value={timeEntry.task} onChange={handleInputChange} />
        <Input label="Start" name="start" value={timeEntry.start} onChange={handleInputChange} type="datetime-local" />
        <Input label="End" name="end" value={timeEntry.end} onChange={handleInputChange} type="datetime-local"/>
        <div className="ml-8">
        {timeEntry.start ? (
          //start button
          <button
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault()
              setTimeEntry({...timeEntry, end: formatDate(new Date())})
            }}
            disabled={!!timeEntry.end}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z"
                    clipRule="evenodd"/>
            </svg>
          </button>
        ) : (
          //end button
          <button className="btn btn-circle" onClick={(e) => {
            e.preventDefault()
            setTimeEntry({...timeEntry, start: formatDate(new Date()) })
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"/>
            </svg>
          </button>
            )}
        </div>
      </div>
    </form>
  )
}