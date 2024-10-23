import * as S from './styles'

import Banner from '@/Components/Banner'
import ProjectItem from '@/Components/Cards/ProjectItem'

const Projects = () => {
  return (
    <>
      <Banner urlImage="/image/banner_about.jpg"></Banner>
      <S.ProjectContainer className="container">
        <ProjectItem></ProjectItem>
      </S.ProjectContainer>
    </>
  )
}

export default Projects
