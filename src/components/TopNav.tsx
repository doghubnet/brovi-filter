import { Link } from '@tanstack/react-router'
import { ThemeToggle } from './ThemeToggle'
export function TopNav(){return <header className='glass sticky top-0 z-20 flex items-center justify-between rounded-2xl px-4 py-3'><Link to='/' className='font-semibold'>Brovi Filter</Link><div className='flex items-center gap-4'><Link to='/pricing'>Pricing</Link><Link to='/app'>Dashboard</Link><ThemeToggle/></div></header>}
