import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { scoreLabel } from '@/lib/scoring'
export function Score({title,score}:{title:string;score:number}){return <div className='space-y-2'><div className='flex items-center justify-between'><p className='font-medium'>{title}</p><Badge>{scoreLabel(score)} {score}%</Badge></div><Progress value={score}/></div>}
