import Template from '../components/template/Template'
import DesignThinkingPage from '../pages/DesignThinkingPage'
import ErrorPage from '../pages/ErrorPage'
import HeuristicaPage from '../pages/HeuristicaPage'
import HomePage from '../pages/HomePage'
import PersonaPage from '../pages/PersonaPage'
import UsabilidadePage from '../pages/UsabilidadePage'

export const routes = [
  {
    path: '/',
    element: <Template />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true,
        element: <HomePage />
      },
      {
        path: '/usabilidade',
        element: <UsabilidadePage />
      },
      {
        path: '/heuristica',
        element: <HeuristicaPage />
      },
      {
        path: '/persona',
        element: <PersonaPage />
      },
      {
        path: '/design-thinking',
        element: <DesignThinkingPage />
      }
    ]
  }
]
