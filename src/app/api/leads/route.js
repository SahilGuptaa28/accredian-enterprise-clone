import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, teamSize, message } = body

    if (!name || !company || !email) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name, company and email are required.',
        },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide a valid email address.',
        },
        { status: 400 }
      )
    }

    const lead = {
      id: Date.now().toString(),
      name: name.trim(),
      company: company.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      teamSize: teamSize || '',
      message: message?.trim() || '',
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thanks! We'll be in touch within 24 hours.",
        data: lead,
      },
      { status: 201 }
    )
  } catch (err) {
    console.error('Lead API error:', err)

    return NextResponse.json(
      {
        success: false,
        error: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Lead API is working.',
    note: 'Lead persistence is disabled in production deployment.',
  })
}