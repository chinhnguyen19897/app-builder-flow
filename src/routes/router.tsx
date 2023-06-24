import { routesConfig } from '@config/routes'
import Flow from '@pages/flow/Flow'
import Home from '@pages/home/Home'
import { useRoutes } from 'react-router-dom'

export const Router = () => {
  return useRoutes([
    {
      path: routesConfig.home,
      element: <Home />,
    },
    {
      path: routesConfig.flow,
      element: <Flow />,
    },
  ])
}
