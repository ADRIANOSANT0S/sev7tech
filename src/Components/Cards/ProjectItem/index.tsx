import { FaLaptopCode } from 'react-icons/fa'

import * as S from './styles'

import { LinkItem, Text, Title } from '@/Components/Typography'
type Props = {
  imagUrl: string
}

const ProjectItem = () => {
  return (
    <>
      <S.ProjectItemContainer
        className="container-flex"
        style={{
          backgroundImage: `url('/image/banner.jpg')`
        }}
      >
        <div>
          <Title as="h3">Website</Title>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            dolorem eaque pariatur ex, culpa voluptates nihil voluptatem quidem.
            Neque eligendi voluptate placeat dolore quia fuga consequatur
            voluptatem veniam cupiditate at.
          </Text>
        </div>
        <div>
          <Title as="h3">Portfolio</Title>
          <Text as="span">
            <FaLaptopCode size={18} />
            Website
          </Text>
          <LinkItem href="/">Read More</LinkItem>
        </div>
      </S.ProjectItemContainer>
    </>
  )
}

export default ProjectItem
