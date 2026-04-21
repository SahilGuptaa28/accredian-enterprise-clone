import { NextResponse } from 'next/server'

const stats = [
  { id: 1, value: '500+',   label: 'Enterprise Partners',   icon: 'building' },
  { id: 2, value: '1,20,000+', label: 'Learners Upskilled',  icon: 'users' },
  { id: 3, value: '200+',   label: 'Learning Programs',     icon: 'book' },
  { id: 4, value: '95%',    label: 'Learner Satisfaction',  icon: 'star' },
  { id: 5, value: '40+',    label: 'Expert Mentors',        icon: 'award' },
  { id: 6, value: '15+',    label: 'Industry Domains',      icon: 'layers' },
]

export async function GET() {
  await new Promise(r => setTimeout(r, 50))
  return NextResponse.json({ success: true, data: stats })
}
