import { generateUrl } from '@/helpers/generateUrl'
import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { json } from 'stream/consumers'


export async function GET(request: Request) {
  const res = await fetch(generateUrl('/projects'), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
    },
    next: {
      tags: ['projects'],
    }
  })

  const data = await res.json()

  return NextResponse.json({ data })
}

export async function POST(request: Request) {
  const json = await request.json()
  const res = await fetch(generateUrl('/projects'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
    },
    body: JSON.stringify(json)
  })

  if (res.ok) {
    revalidateTag('projects')
  }

  const data = await res.json()

  return NextResponse.json({ data })
}

export async function PUT(request: Request) {
  const json = await request.json()
  const res = await fetch(generateUrl('/projects'), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
    },
    body: JSON.stringify(json),
  })

  if (res.ok) {
    revalidateTag('projects')
  }

  const data = await res.json()

  return NextResponse.json({ data })
}