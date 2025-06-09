import Link from '../components/button/Link'
import Title from '../components/title/Title'

const HeuristicaPage = () => {
  return (
    <div>
      <div>
        <Link to='/'>Voltar</Link>
      </div>

      <div className='content'>
        <Title>Avaliação Heurística</Title>

        <p>
          A avaliação heurística pode ser definida como um método de revisão de uma interface para identificação de problemas.
        </p>

        <p>
          Uma avaliação heurística tem como objetivo detectar e classificar problemas de usabilidade para melhorar a interface e proporcionar uma melhor experiência do usuário (UX).
        </p>
      </div>

      <div className='content'>
        <Title>Etapas</Title>
        <ul>
          <li>
            <strong>Planejamento:</strong>&nbsp;
            Ter objetivo claro do que se espera desta execução de modo que todos venham a entender exatamente o que precisa ser avaliado.
          </li>

          <li>
            <strong>Execução:</strong>&nbsp;
            Definir a lista de autistas a ser utilizada durante a execução.
          </li>

          <li>
            <strong>Revisão:</strong>&nbsp;
            Importante nesta fase que relatórios sejam geradas e compartilhados com o time, podendo ser através de evidências captadas durante a execução, para tomada de decisões posteriormente a depender da classificação destes possíveis bugs encontrados.
          </li>
        </ul>
      </div>

      <div className='content'>
        <Title>Vantagens</Title>
        <ul>
          <li>Fornece um feedback rápido.</li>
          <li>Baixo custo (comparado a testes com usuários).</li>
          <li>Pode ser feito em qualquer etapa do projeto.</li>
          <li>Detecta problemas antes do lançamento.</li>
          <li>Pode ser utilizado em conjunto com outras metodologias de testes de usabilidade.</li>
        </ul>
      </div>

      <div className='content'>
        <Title>Desvantagens</Title>
        <ul>
          <li>Requer conhecimento e experiência para aplicar a heurística de uma forma eficaz.</li>
          <li>É recomendável utilizar vários especialistas (de 3 a 5 profissionais).</li>
        </ul>
      </div>

      <div className='content'>
        <Title>As 10 heurísticas de Jakob Nielsen</Title>

        <ol>
          <li>
            <strong>Visibilidade do status do sistema:</strong>&nbsp;
            O sistema deve sempre manter o usuário informado sobre o que está acontecendo, por meio de feedbacks apropriados e em tempo real.
          </li>

          <li>
            <strong>Correspondência entre o sistema e o mundo real:</strong>&nbsp;
            O sistema deve falar a linguagem dos usuários, com palavras, frases e conceitos familiares, seguindo convenções do mundo real.
          </li>

          <li>
            <strong>Controle e liberdade do usuário:</strong>&nbsp;
            Usuários frequentemente cometem erros. O sistema deve oferecer "saídas de emergência", como desfazer e cancelar opções.
          </li>

          <li>
            <strong>Consistência e padrões:</strong>&nbsp;
            É importante que o software mantenha padrões de linguagem, cores e formas para orientar ações.
          </li>

          <li>
            <strong>Prevenção de erros:</strong>&nbsp;
            Melhor do que boas mensagens de erro é projetar a interface para evitar que o erro aconteça.
          </li>

          <li>
            <strong>Reconhecimento ao invés de memória:</strong>&nbsp;
            Minimize a carga de memória do usuário, mostre opções, ajude com preenchimentos automáticos, menus, dicas.
          </li>

          <li>
            <strong>Flexibilidade e eficiência de uso:</strong>&nbsp;
            A interface deve atender tanto iniciantes quanto usuários experientes, oferecendo atalhos ou configurações avançadas.
          </li>

          <li>
            <strong>Estética e design minimalista:</strong>&nbsp;
            Não sobrecarregue a interface com informações irrelevantes. Cada elemento deve ter um propósito claro.
          </li>

          <li>
            <strong>Recuperação de diante de erros:</strong>&nbsp;
            As mensagens de erro devem ser claras, indicar o problema e sugerir uma solução.
          </li>

          <li>
            <strong>Ajuda e documentação:</strong>&nbsp;
            Mesmo que o sistema seja fácil de usar, é útil oferecer ajuda acessível, focada na tarefa e fácil de buscar.
          </li>
        </ol>
      </div>
    </div>
  )
}

export default HeuristicaPage
