import { createFileRoute } from '@tanstack/react-router'
import { DisclaimerBanner } from '@/components/DisclaimerBanner'
import { Card } from '@/components/ui/card'
export const Route = createFileRoute('/app/profile')({component:()=> <div className='space-y-4'><h1 className='text-2xl font-semibold capitalize'>profile</h1><DisclaimerBanner/><Card><p>Professional profile workflow with local demo inputs and readiness scoring.</p></Card></div>})
