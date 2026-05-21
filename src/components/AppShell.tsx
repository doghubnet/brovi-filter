import { Link, Outlet } from '@tanstack/react-router'
import { TopNav } from './TopNav'
const links=['/app','/app/profile','/app/program-match','/app/documents','/app/bank','/app/interview','/app/report','/app/consultant','/app/settings','/app/admin']
export function AppShell(){return <div className='mx-auto max-w-6xl space-y-4 p-4'><TopNav/><div className='grid gap-4 md:grid-cols-[220px_1fr]'><aside className='glass rounded-2xl p-3'><div className='space-y-1'>{links.map((to)=><Link key={to} to={to as never} className='block rounded-lg px-3 py-2 hover:bg-[var(--muted)]'>{to.replace('/app/','').replace('/app','dashboard') }</Link>)}</div></aside><main className='glass rounded-2xl p-5'><Outlet/></main></div></div>}
