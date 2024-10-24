import * as S from './styles'

import ProjectDetailsItem, {
  ProjectDetailsProps
} from '@/Components/Cards/ProjectDetails'
import Banner from '@/Components/Banner'
import CustomText from '@/Components/Typography/CustomText'

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const projectDetailsData: ProjectDetailsProps[] = [
    {
      id: '1',
      imageUrl: '/image/banner.jpg',
      detailsImage: 'image for tests',
      text1:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est dolores eos blanditiis praesentium ad ratione accusamus labore tenetur aspernatur quam, fuga omnis inventore doloremque itaque dicta soluta delectus quasi. Inventore doloremque itaque dicta soluta delectus quasi.',
      text2:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est dolores eos blanditiis praesentium ad ratione accusamus labore tenetur aspernatur quam, fuga omnis inventore doloremque itaque dicta soluta delectus quasi. Inventore doloremque itaque dicta soluta delectus quasi.',
      text3:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est dolores eos blanditiis praesentium ad ratione accusamus labore tenetur aspernatur quam, fuga omnis inventore doloremque itaque dicta soluta delectus quasi. Inventore doloremque itaque dicta soluta delectus quasi.',
      text4:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est dolores eos blanditiis praesentium ad ratione accusamus labore tenetur aspernatur quam, fuga omnis inventore doloremque itaque dicta soluta delectus quasi. Inventore doloremque itaque dicta soluta delectus quasi.',
      text5:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est dolores eos blanditiis praesentium ad ratione accusamus labore tenetur aspernatur quam, fuga omnis inventore doloremque itaque dicta soluta delectus quasi. Inventore doloremque itaque dicta soluta delectus quasi.',
      features: [
        'Responsive web',
        'Responsive web',
        'Responsive web',
        'Responsive web',
        'Responsive web'
      ],
      stacks: [
        'Nodejs',
        'React',
        'NextJs',
        'PostgresSQL',
        'Python',
        'TypeScript'
      ],
      name: 'Google',
      category: 'Web Develop',
      duration: '12 month (Jan 2025 - Dec 2025)',
      state: 'Progress 1%',
      url: 'https://clone-disney-pi-six.vercel.app/'
    }
  ]

  const details = projectDetailsData.find((p) => p.id === params.id)

  return (
    <>
      {details ? (
        <>
          <Banner urlImage="/image/banner.jpg" />
          <S.ProjectDetailsContainer>
            <div className="container">
              <ProjectDetailsItem
                imageUrl={details.imageUrl}
                detailsImage={details.detailsImage}
                text1={details.text1}
                text2={details.text2}
                text3={details.text3}
                text4={details.text4}
                text5={details.text5}
                features={details.features}
                stacks={details.stacks}
                name={details.name}
                category={details.category}
                duration={details.duration}
                state={details.state}
                url={details.url}
              />
            </div>
          </S.ProjectDetailsContainer>
        </>
      ) : (
        <CustomText as="p">Project not found</CustomText>
      )}
    </>
  )
}

export default ProjectDetails
