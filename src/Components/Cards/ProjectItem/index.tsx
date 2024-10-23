import Image from 'next/image'

import * as S from './styles'

import { LinkItem, CustomText, Title } from '@/Components/Typography'

export interface ProjectItemProps {
  id?: string
  title: string
  text: string
  result: string
  stacks: React.ReactElement[]
  url: string
}

const ProjectItem = ({
  title,
  text,
  result,
  stacks,
  url
}: ProjectItemProps) => {
  return (
    <S.ProjectItemContainer>
      <S.ImageContainer>
        <Image src="/image/site.png" alt="test" width={600} height={328} />
      </S.ImageContainer>
      <S.ProjectDetails>
        <Title as="h4">{title}</Title>
        <CustomText as="p">{text}</CustomText>
        <Title as="h4">Project Highlights</Title>
        <CustomText as="p" size="small">
          {result}
        </CustomText>
        <S.TechnologyList>
          {stacks.map((item, index) => (
            <li key={index}>
              <CustomText as="span">{item}</CustomText>
            </li>
          ))}
        </S.TechnologyList>
        <LinkItem href={url}>Read More</LinkItem>
      </S.ProjectDetails>
    </S.ProjectItemContainer>
  )
}

export default ProjectItem
