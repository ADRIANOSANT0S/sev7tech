import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

import * as S from './styles'

import { Title, Text, LinkItem } from '@/Components/Typography'

const ProjectDetails = () => {
  return (
    <div>
      <S.ImageContainer>
        <Image src="/image/banner.jpg" alt="text" width={1280} height={600} />
      </S.ImageContainer>
      <S.DetailsContainer className="container-flex">
        <div>
          <div>
            <Title as="h2">Intro of the project</Title>
            <Text as="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis soluta sequi obcaecati quis exercitationem officia,
              adipisci neque consequatur assumenda non natus quae deserunt
              eveniet excepturi culpa nihil vero sunt doloremque? eveniet
              excepturi culpa nihil vero sunt doloremque?{' '}
            </Text>
            <Text as="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis soluta sequi obcaecati quis exercitationem officia,
              adipisci neque consequatur assumenda non natus quae deserunt
              eveniet excepturi culpa nihil vero sunt doloremque? eveniet
              excepturi culpa nihil vero sunt doloremque?{' '}
            </Text>
          </div>
          <div>
            <Title as="h2">Objetivos do Projeto</Title>
            <Text as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              reiciendis veniam esse necessitatibus earum repudiandae excepturi
              dolore odit maiores ullam veritatis nulla, laboriosam recusandae
              eveniet nesciunt officia eum. Cupiditate, natus?
            </Text>
            <Title as="h3">Key Features</Title>
            <ul>
              <li>
                {' '}
                <FaCheck size={14} />
                <Text as="span">Responsive design across all devices</Text>
              </li>
              <li>
                {' '}
                <FaCheck size={14} />
                <Text as="span"> Real-time data synchronization</Text>
              </li>
              <li>
                {' '}
                <FaCheck size={14} />
                <Text as="span"> Integrated payment gateway</Text>
              </li>
              <li>
                {' '}
                <FaCheck size={14} />
                <Text as="span"> Customizable admin dashboard</Text>
              </li>
            </ul>
          </div>

          <div>
            <Title as="h2">Challenges and Solutions</Title>
            <Text as="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              nemo debitis laudantium repellat exercitationem, incidunt odit
              expedita eius facilis earum animi inventore? Facilis inventore eum
              minima autem eius eos nostrum.
            </Text>
            <Title as="h3">Tech Stack</Title>
            <Text as="p">
              This project was built using modern technologies to ensure
              scalability and performance.
            </Text>
            <S.ListTechnology>
              <li>
                <FaCheck size={14} />
                <Text as="span">Nodejs</Text>
              </li>
              <li>
                <FaCheck size={14} />
                <Text as="span">JavaScript</Text>
              </li>
              <li>
                <FaCheck size={14} />
                <Text as="span">React</Text>
              </li>
              <li>
                <FaCheck size={14} />
                <Text as="span">Python</Text>
              </li>
              <li>
                <FaCheck size={14} />
                <Text as="span">PostgresSQL</Text>
              </li>
            </S.ListTechnology>
          </div>
          <div>
            <Title as="h2">Interested in Working with Us?</Title>
            <Text as="p">
              If you'd like to know more about this project or discuss how we
              can help with your next big idea,{' '}
              <LinkItem href="/">get in touch</LinkItem> with us today!
            </Text>
          </div>
        </div>
        <S.AsideContainer>
          <div>
            <Title as="h4">Costumer:</Title>
            <Text as="span" size="small">
              Nome costumer
            </Text>
          </div>
          <div>
            <Title as="h4">Category:</Title>
            <Text as="span" size="small">
              Nome costumer
            </Text>
          </div>
          <div>
            <Title as="h4">Duration:</Title>
            <Text as="span" size="small">
              6 months (Jan 2024 - Jun 2024)
            </Text>
          </div>
          <div>
            <Title as="h4">State project:</Title>
            <Text as="span" size="small">
              Nome costumer
            </Text>
          </div>
          <div>
            <Title as="h4">Preview Link:</Title>
            <LinkItem href="/">Nome costumer</LinkItem>
          </div>
        </S.AsideContainer>
      </S.DetailsContainer>
    </div>
  )
}

export default ProjectDetails
