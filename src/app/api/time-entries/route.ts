import { generateUrl } from '@/helpers/generateUrl'
import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'


export async function GET(request: Request) {
  const res = await fetch(generateUrl('/time-entries'), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
    },
    cache: 'no-store',
  })

  const data = await res.json()

  return NextResponse.json({ data })
}

export async function POST(request: Request) {
  const json = await request.json()
  const res = await fetch(generateUrl('/time-entries'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
    },
    body: JSON.stringify(json)
  })

  if (res.ok) {
    revalidateTag('time-entries')
  }

  const data = await res.json()

  return NextResponse.json({ data })
}
