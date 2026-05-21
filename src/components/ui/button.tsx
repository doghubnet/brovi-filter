import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
const v = cva('inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition', {variants:{variant:{default:'bg-[var(--primary)] text-white hover:opacity-90',outline:'border border-[var(--border)] glass'},ghost:'hover:bg-[var(--muted)]'}} ,defaultVariants:{variant:'default'}})
export function Button({className,variant,asChild,...props}:ButtonHTMLAttributes<HTMLButtonElement>&VariantProps<typeof v>&{asChild?:boolean}){const C=asChild?Slot:'button';return <C className={cn(v({variant}),className)} {...props} />}
