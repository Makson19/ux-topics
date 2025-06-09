import HeuristicaPage from '../pages/HeuristicaPage'
import HomePage from '../pages/HomePage'
import PersonaPage from '../pages/PersonaPage'
import UsabilidadePage from '../pages/UsabilidadePage'

export const routes = [
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
  }
]
