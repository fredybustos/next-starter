import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const user = await request.json()
  try {
    return NextResponse.json({ data: user, status: 'success' }, { status: 200 })
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}
