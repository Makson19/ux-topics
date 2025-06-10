import Link from '../components/button/Link'
import Title from '../components/title/Title'

const DesignThinkingPage = () => {
  return (
    <div>
      <div>
        <Link to='/'>Voltar</Link>
      </div>

      <div>
        <div className='content'>
          <Title>O que é Design Thinking?</Title>
          <p>
            Design thinking é uma abordagem centrada no usuário, focada em resolver problemas complexos de forma criativa e inovadora. Visa entender as necessidades das pessoas para quem se está a desenvolver um produto, serviço ou sistema, e encontrar soluções que atendam a essas necessidades. 
          </p>

          <p>
            É um conjunto de métodos, processos e técnicas criativas para facilitar o desenvolvimento de novas soluções.
          </p>

          <p>
            Utiliza os conceitos de criação, conhecimento e entendimento da real situação do problema com um aprofundamento do problema tratado.
          </p>
        </div>

        <div className='content'>
          <Title>Etapas</Title>

          <ul>
            <li>
              <strong>Imersão:</strong>&nbsp;
              É a etapa em que são delimitados os aspectos e ideias do artefato com o entendimento do propósito do mesmo. Uma técnica utilizada constantemente é o Brainstorm.
            </li>

            <li>
              <strong>Ideação:</strong>&nbsp;
              É a etapa em que são delimitados os aspectos relacionais e é delimitado o escopo da solução proposta. Uma técnica utilizada constantemente é a de mapas mentais.
            </li>

            <li>
              <strong>Prototipagem:</strong>&nbsp;
              É a etapa em que são construídas as representações das personas, estórias e demais coisas que materializam a solução. Uma técnica constantemente utilizada é a concepção de protótipos reais.
            </li>

            <li>
              <strong>Validação:</strong>&nbsp;
              É a etapa onde há as validações das representações das personas, estórias e as demais coisas que materializam a solução. Uma técnica constantemente utilizada é o modelo Canvas.
            </li>
          </ul>
        </div>

        <div className='content'>
          <Title>Conceitos importantes</Title>
          <ul>
            <li>
              <strong>Design Thinking:</strong>&nbsp;
              projeta os cenários, histórias, a comunicação entre os usuários e a integração entre os mesmos com a proposta de soluções.
            </li>

            <li>
              <strong>Desing de interface:</strong>&nbsp;
              projeta os padrões de apresentação das informações do software.
            </li>

            <li>
              <strong>Design de interação:</strong>&nbsp;
              projeta as ações so usuário, bem como as respostas do software para as mesmas.
            </li>

            <li>
              <strong>Design eXperience:</strong>&nbsp;
              projeta novas situações em função do comportamento e das interações do usuário com o software.
            </li>
          </ul>
        </div>

        <div className='content'>
          <Title>Então por que precisamos do design utilizar o design já no início do desenvolvimento do software?</Title>

          <p>
            Precisamos utilizar o design já no início do desenvolvimento do software porque ele orienta e fundamenta todo o processo de criação, garantindo que o produto final atenda às necessidades reais dos usuários e do negócio. Aqui estão os principais motivos:
          </p>
          <ul>
            <li>Foco no usuário desde o começo</li>
            <li>Direcionamento claro</li>
            <li>Redução de custos e retrabalho</li>
            <li>Melhor comunicação entre equipes</li>
            <li>Entrega mais rápida e eficiente</li>
            <li>Validação antecipada</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DesignThinkingPage
