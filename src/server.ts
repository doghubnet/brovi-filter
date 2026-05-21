import { createStartHandler, defaultStreamHandler } from '@tanstack/react-start/server'
import { getRouterManifest } from '@tanstack/react-start/router-manifest'
import { createAppRouter } from './router'

export default createStartHandler({
  createRouter: createAppRouter,
  getRouterManifest,
})(defaultStreamHandler)
