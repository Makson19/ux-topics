import Link from '../components/button/Link'
import Title from '../components/title/Title'

const PersonaPage = () => {
  return (
    <div>
      <div>
        <Link to='/'>Voltar</Link>
      </div>

      <div>
        <div className='content'>
          <Title>Persona</Title>
          <p>
            Persona é uma representação fictícia e realista do usuário ideal de um produto, baseado em dados reais sobre o público-alvo, como comportamentos, necessidades, motivações, objetivos e dores.
          </p>

          <p>
            Ela é usada em UX, marketing, design e desenvolvimento para colocar a equipe no lugar do usuário final e orientar decisões centradas nas pessoas que realmente usarão o produto.
          </p>

          <p>
            Uma persona é um personagem semi-fictício que representa um grupo de usuários com características, desejos e desafios semelhantes.
          </p>
        </div>

        <div className='content'>
          <Title>Por que criar um Persona?</Title>
          <p>
            Abaixo temos alguns motivos que provam a importância da criação de personas para seu negócio:
          </p>

          <ul>
            <li>
              Determinar o tipo de conteúdo que você precisa para atingir seus objetivos;
            </li>

            <li>Definir o tom e o estilo do seu conteúdo;</li>
            <li>
              Ajudar a desenhar suas estratégias de marketing apresentando o público que deve ser focado;
            </li>
            <li>
              Definir os tópicos sobre os quais você deve descrever;
            </li>
            <li>
              Entender onde os prospectos buscam suas informações e como eles querem consumí-las.
            </li>
          </ul>
        </div>

        <div className='content'>
          <Title>Para que serve uma Persona?</Title>
          <ul>
            <li>Guiar o design de interfaces e funcionalidade;</li>
            <li>Ajudar a equipe a tomar decisões centradas no usuário;</li>
            <li>Priorizar recursos com base nas reais necessidades;</li>
            <li>Evitar achismos e suposições genéricas sobre "o usuário";</li>
            <li>Humanizar o processo de criação.</li>
          </ul>
        </div>

        <div className='content'>
          <Title>Características utilizadas para definir uma Persona</Title>
          <ul>
            <li>Idade</li>
            <li>Cargo</li>
            <li>Hábitos</li>
            <li>Frustrações</li>
            <li>Desafios</li>
            <li>Crenças</li>
            <li>Hobbies</li>
            <li>Estilo de vida</li>
            <li>Hábitos de compra</li>
            <li>Quais mídias preferem</li>
            <li>Quem os influencia</li>
            <li>Quais tecnologias usa</li>
            <li>Onde busca informação</li>
            <li>Critérios de decisão na hora da compra</li>
            <li>Momento da jornada de compra em que se encontra</li>
          </ul>
        </div>

        <div className='content'>
          <Title>Etapas do Design Thinking para usar na construção de Personas</Title>
          <ol>
            <li>
              <strong>Imersão:</strong>&nbsp;
              Etapa onde é necessário buscar o máximo possível de informações, pesquisar, olhar dados, procurar novas perspectivas, compartilhar conhecimentos. Para iniciar, chame o grupo escolhido e apresente a ideia do projeto e o objetivo, que é a criação de personas.
            </li>

            <li>
              <strong>Ideação:</strong>&nbsp;
              Em cima dos agrupamentos de características, como idade, profissão, gênero e escolaridade, defina as que mais aparecem e comece a montar sua persona.
            </li>

            <li>
              <strong>Prototipagem:</strong>&nbsp;
              É hora de dar nome aos bois, literalmente. Defina um nome, um cargo, uma idade, sua formação e escreva parágrafos com características comportamentais. Após essa prototipagem, precisamos de validação. Avalie se os suas personas estão fazendo sentido e que representam perfis extremos de usuários do produto ou serviço.
            </li>
          </ol>
        </div>

        <div className='content'>
          <Title>Diferença entre persona e público-alvo</Title>
          <p>
            A diferença entre persona e público-alvo está no nível de detalhamentoe na forma como essas ferramentas representam os usuários.
          </p>

          <p>
            <strong>Persona</strong> é um personagem semi-fictício, criada com base em dados reais de usuário. Representa um perfil específico de usuário real, com características humanas e contextos de uso.
          </p>

          <p>
            <strong>Publico-alvo</strong> é uma descrição demográfica e comportamental de um grupo de pessoas. Serve para segmentar o mercado e definir estratégias gerais de marketing.
          </p>

          <p>
            Resumindo: público-alvo é um recorte de mercado genérico, persona é um perfil humanizado e específico, criado para ajudar a projetar melhores experiências.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PersonaPage
