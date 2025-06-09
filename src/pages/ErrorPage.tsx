import Link from '../components/button/Link'
import Title from '../components/title/Title'
import './styles/ErrorPage.styles.scss'

const ErrorPage = () => {
  return (
    <div className='error_container'>
      <div className='content'>
        <Title>Ops! Página não encontrada!</Title>
        <Link to='/'>Voltar</Link>
      </div>
    </div>
  )
}

export default ErrorPage
