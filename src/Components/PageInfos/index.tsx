import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

import { LinkItem, Title } from '../Typography'
import * as S from './styles'

export interface NavigateItem {
  id?: number
  children: string
  url: string
  iconLabel: string
}

type NavigateProps = {
  items: NavigateItem[]
  title: string
}

const PageInfos = ({ items, title }: NavigateProps) => {
  return (
    <S.Container>
      <Title as="h1">{title}</Title>
      <S.BreadcrumbNavigation>
        <ul>
          <li className="container-flex">
            <LinkItem href="/">Home</LinkItem>
          </li>
          <li>
            <MdKeyboardDoubleArrowRight
              size={24}
              aria-label={`Navigate to section ${items[0].iconLabel} `}
            />
          </li>
          {items.map((item, index) => (
            <>
              <li key={index}>
                <LinkItem href={item.url}>{item.children}</LinkItem>
              </li>
              {index < items.length - 1 && (
                <li>
                  <MdKeyboardDoubleArrowRight
                    size={24}
                    aria-label={item.iconLabel}
                  />
                </li>
              )}
            </>
          ))}
        </ul>
      </S.BreadcrumbNavigation>
    </S.Container>
  )
}

export default PageInfos
