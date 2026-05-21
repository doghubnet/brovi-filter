import * as P from '@radix-ui/react-progress'
export function Progress({value}:{value:number}){return <P.Root className='h-2 w-full overflow-hidden rounded bg-slate-300/30'><P.Indicator className='h-full bg-[var(--primary)]' style={{transform:`translateX(-${100-value}%)`}}/></P.Root>}
