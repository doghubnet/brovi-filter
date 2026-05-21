import { createFileRoute } from '@tanstack/react-router'
import { DisclaimerBanner } from '@/components/DisclaimerBanner'
import { Card } from '@/components/ui/card'
export const Route = createFileRoute('/app/bank')({component:()=> <div className='space-y-4'><h1 className='text-2xl font-semibold capitalize'>bank</h1><DisclaimerBanner/><Card><p>Professional bank workflow with local demo inputs and readiness scoring.</p></Card></div>})
