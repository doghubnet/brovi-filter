import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
export const Badge=({className,...props}:HTMLAttributes<HTMLSpanElement>)=><span className={cn('rounded-full px-2 py-1 text-xs bg-cyan-500/15 text-cyan-700',className)} {...props}/>
