import { useNavigate } from 'react-router-dom'
import Button from '../components/button/Button'
import './styles/HomePage.styles.scss'

const HomePage = () => {
  const navigate = useNavigate()

  const handleGoToUsabPage = () => navigate('/usabilidade')
  const handleGoToHeuristicaPage = () => navigate('/heuristica')
  const handleGoToPersonaPage = () => navigate('/persona')

  return (
    <div className='container'>
      <Button
        onClick={handleGoToUsabPage}
      >
        Usabilidade
      </Button>

      <Button
        onClick={handleGoToHeuristicaPage}
      >
        Avaliação Heurística
      </Button>

      <Button
        onClick={handleGoToPersonaPage}
      >
        Persona
      </Button>
    </div>
  )
}

export default HomePage