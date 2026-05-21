import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
export const Input=({className,...props}:InputHTMLAttributes<HTMLInputElement>)=><input className={cn('w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2',className)} {...props}/>
