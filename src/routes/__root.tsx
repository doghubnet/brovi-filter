import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Toaster } from 'sonner'
import '@/styles.css'

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster richColors />
    </>
  ),
})
