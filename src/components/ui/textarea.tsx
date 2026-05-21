import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
export const Textarea=({className,...props}:TextareaHTMLAttributes<HTMLTextAreaElement>)=><textarea className={cn('w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2',className)} {...props}/>
