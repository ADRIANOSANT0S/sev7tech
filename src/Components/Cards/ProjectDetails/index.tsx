'use client'

import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import { useEffect, useState } from 'react'

import * as S from './styles'

import { Title, CustomText, LinkItem } from '@/Components/Typography'

export interface ProjectDetailsProps {
  id?: string
  imageUrl: string
  detailsImage: string
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  features: string[]
  stacks: string[]
  name: string
  category: string
  duration: string
  state: string
  url: string
}

const ProjectDetails = ({
  imageUrl,
  detailsImage,
  text1,
  text2,
  text3,
  text4,
  text5,
  features,
  stacks,
  name,
  category,
  duration,
  state,
  url
}: ProjectDetailsProps) => {
  const [isLinkVisible, setIsLinkVisible] = useState(false)

  useEffect(() => {
    setIsLinkVisible(url.length > 0)
  }, [url])

  return (
    <div>
      <S.ImageContainer>
        <Image src={imageUrl} alt={detailsImage} width={1280} height={600} />
      </S.ImageContainer>
      <S.DetailsContainer className="container-flex">
        <div>
          <div>
            <Title as="h2">Intro of the project</Title>
            <CustomText as="p">{text1}</CustomText>
            <CustomText as="p">{text2}</CustomText>
          </div>
          <div>
            <Title as="h2">Objetivos do Projeto</Title>
            <CustomText as="p">{text3}</CustomText>
            <Title as="h3">Key Features</Title>
            <S.DetailsList className="fullSize">
              {features.map((item, index) => (
                <li key={index}>
                  {' '}
                  <FaCheck size={14} />
                  <CustomText as="span">{item}</CustomText>
                </li>
              ))}
            </S.DetailsList>
          </div>

          <div>
            <Title as="h2">Challenges and Solutions</Title>
            <CustomText as="p">{text4}</CustomText>
            <Title as="h3">Tech Stack</Title>
            <CustomText as="p">{text5}</CustomText>
            <S.DetailsList>
              {stacks.map((item, index) => (
                <li key={index}>
                  <FaCheck size={14} />
                  <CustomText as="span">{item}</CustomText>
                </li>
              ))}
            </S.DetailsList>
          </div>
          <div>
            <Title as="h2">Interested in Working with Us?</Title>
            <CustomText as="p">
              If you'd like to know more about this project or discuss how we
              can help with your next big idea,{' '}
              <LinkItem href="/">get in touch</LinkItem> with us today!
            </CustomText>
          </div>
        </div>
        <S.AsideContainer>
          <div>
            <Title as="h4">Costumer:</Title>
            <CustomText as="span" size="small">
              {name}
            </CustomText>
          </div>
          <div>
            <Title as="h4">Category:</Title>
            <CustomText as="span" size="small">
              {category}
            </CustomText>
          </div>
          <div>
            <Title as="h4">Duration:</Title>
            <CustomText as="span" size="small">
              {duration}
            </CustomText>
          </div>
          <div>
            <Title as="h4">State project:</Title>
            <CustomText as="span" size="small">
              {state}
            </CustomText>
          </div>
          <div>
            <Title as="h4">Preview Link:</Title>
            {isLinkVisible && <LinkItem href={url}>Nome costumer</LinkItem>}
          </div>
        </S.AsideContainer>
      </S.DetailsContainer>
    </div>
  )
}

export default ProjectDetails
