import * as S from './styles'

import ProjectDetailsItem from '@/Components/Cards/ProjectDetails'
import Banner from '@/Components/Banner'

const ProjectDetails = () => {
  return (
    <>
      <Banner urlImage="/image/banner.jpg" />
      <S.ProjectDetailsContainer>
        <div className="container">
          <ProjectDetailsItem />
        </div>
      </S.ProjectDetailsContainer>
    </>
  )
}

export default ProjectDetails
