import { DiNodejs } from 'react-icons/di'
import { TbBrandPython, TbBrandReact, TbBrandTypescript } from 'react-icons/tb'
import { BiLogoPostgresql } from 'react-icons/bi'

import * as S from './styles'

import Banner from '@/Components/Banner'
import ProjectItem, { ProjectItemProps } from '@/Components/Cards/ProjectItem'
import { CustomText } from '@/Components/Typography'

const Projects = () => {
  const details: ProjectItemProps[] = [
    {
      id: '1',
      title: 'Project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quae et tempore modi consectetur! Magnam, quasi sit inventore, quibusdam error iste aliquid accusantium libero reiciendis et!',
      result: ' inventore doloremque itaque dicta soluta delectus quasi.',
      stacks: [
        <DiNodejs size={18} aria-label="Icon Nodejs" />,
        <TbBrandTypescript size={18} aria-label="Icon TypeScript" />,
        <TbBrandReact size={18} arial-label="Icon React" />,
        <TbBrandPython size={18} aria-label="Icon Python" />,
        <BiLogoPostgresql size={18} aria-label="Icon Postgres" />
      ],
      url: 'projects/details/1'
    }
  ]
  return (
    <>
      <Banner urlImage="/image/banner_about.jpg"></Banner>
      <S.ProjectContainer className="container">
        <ul>
          {details ? (
            details.map((item) => (
              <li key={item.id}>
                <ProjectItem
                  title={item.title}
                  text={item.text}
                  result={item.result}
                  stacks={item.stacks}
                  url={item.url}
                />
              </li>
            ))
          ) : (
            <CustomText as="p">Project not found</CustomText>
          )}
        </ul>
      </S.ProjectContainer>
    </>
  )
}

export default Projects
