import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
export function ThemeToggle(){const dark=typeof document!=='undefined'&&document.documentElement.classList.contains('dark');return <Button variant='ghost' onClick={()=>document.documentElement.classList.toggle('dark')}>{dark?<Sun size={16}/>:<Moon size={16}/>}</Button>}
