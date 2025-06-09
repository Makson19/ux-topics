import Link from '../components/button/Link'
import Title from '../components/title/Title'

const UsabilidadePage = () => {
  return (
    <div className='usabilidade_container'>
      <div className='link_container'>
        <Link to='/'>
          Voltar
        </Link>
      </div>

      <div className='content'>
        <Title>Usabilidade</Title>

        <p>
          Usabilidade se refere à facilidade e eficiência com que o usuário consegue interagir com um produto, sistema ou serviço para alcançar seus objetivos.
        </p>

        <p>
          Em sistemas interativos, usabilidade é a qualidade que determina o quão fácil, eficiente, eficaz e satisfatório é a interação do usuário com esse sistema para alcançar determinados objetivos em um contexto específico.
        </p>
      </div>

      <div className='content'>
        <Title>Importância da usabilidade no design de interfaces</Title>
        <p>
          A usabilidade é um fator crítico que orienta a forma como elementos visuais, fluxos de navegação e interações são construídos. Sua aplicação correta traz os seguintes benefícios:
        </p>

        <ul>
          <li>Interface intuitiva</li>
          <li>Maior produtividade e rapidez</li>
          <li>Redução de erros</li>
          <li>Menor necessidade de suporte</li>
          <li>Aumento da satisfação e fidelização</li>
        </ul>
      </div>

      <div className='content'>
        <Title>Como a usabilidade impacta a experiência do usuário (UX)</Title>
        <p>
          Uma interface com boa usabilidade transmite confiança, faz o usuário sentir-se no controle e gera experiências positivas e memoráveis.
        </p>

        <ul>
          <li>
            <strong>Apreensibilidade:</strong>&nbsp;
            Capacidade do produto de software de possibilitar ao usuário aprender sua aplicação. Se refere à facilidade com que o usuário consegue compreender e interpretar uma interface ou sistema, ou seja, o quanto é fácil de entender o que está sendo apresentado e como usá-lo.
          </li>

          <li>
            <strong>Legibilidade:</strong>&nbsp;
            É a possibilidade que um usuário tem de enxergar, ouvir e perceber a informação de maneira clara e legível.
          </li>

          <li>
            <strong>Inteligibilidade:</strong>&nbsp;
            Se refere à clareza e facilidade com que as informações e os elementos de uma interface podem ser compreendidos pelo usuário, sem ambiguidades ou confusões.
          </li>

          <li>
            <strong>Ergonomia:</strong>&nbsp;
            É a competência que busca atribuir o máximo de conforto e memória e o mínimo de frustração e perca de tempo nas tarefas do software.
          </li>

          <li>
            <strong>Interação:</strong>&nbsp;
            Pode ser entendida como as "respostas" que o software entrega ao usuário antes, durante ou após realizar uma tarefa.
          </li>
        </ul>
      </div>

      <div className='content'>
        <Title>Abordagens para o design de interface</Title>

        <ul>
          <li>
            <strong>Design de interface:</strong>&nbsp;
            Projeta os padrões de apresentação das informações do software.
          </li>

          <li>
            <strong>Design de interação:</strong>&nbsp;
            Projeta as ações do usuário, bem como as respostas do software para as mesmas.
          </li>
        </ul>
      </div>

      <div className='content'>
        <p>
          É uma entrada composta por vários elementos. É a ligação do homem com o software.
        </p>

        <p>A interface possui:</p>
        <ul>
          <li>Controles de entrada de dados;</li>
          <li>Componentes de navegação de dados;</li>
          <li>Componentes informativos;</li>
          <li>Ícones;</li>
          <li>Mídias</li>
        </ul>
      </div>
    </div>
  )
}

export default UsabilidadePage