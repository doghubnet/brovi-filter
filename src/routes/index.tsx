import { createFileRoute, Link } from '@tanstack/react-router'
import { TopNav } from '@/components/TopNav'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
export const Route = createFileRoute('/')({component: Home})
function Home(){return <div className='mx-auto max-w-6xl space-y-6 p-4'><TopNav/><section className='rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 p-10 text-white'><h1 className='text-4xl font-bold'>Brovi Filter</h1><p className='mt-3 max-w-2xl'>Premium study visa readiness scanning for students planning international education.</p><Button className='mt-6' asChild><Link to='/app'>Run Readiness Scan</Link></Button></section><div className='grid gap-4 md:grid-cols-3'>{['Program Match','Document Scan','Interview Prep'].map((x)=><Card key={x}><h3 className='font-semibold'>{x}</h3><p className='text-sm opacity-80'>Professional assessment workflows with local demo storage.</p></Card>)}</div></div>}
