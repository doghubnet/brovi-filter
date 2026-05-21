import { StartClient } from '@tanstack/react-start'
import { hydrateRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'

hydrateRoot(document, <StartClient><RouterProvider router={router} /></StartClient>)
