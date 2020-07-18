import React from 'react'
import {
  StyledHomepageLayout,
  StyledBlogEntry,
} from '../screen/homepage.styles'
import { StyledMatrixParagraph } from '../shared/paragraph.styles'

const HomepageScreen = ({ data }) => {
  console.log('homepage screen data', data)
  return (
    <StyledHomepageLayout>
        {data.map((x) => (
          <StyledBlogEntry>
            <StyledMatrixParagraph>{x.title}</StyledMatrixParagraph>
            <StyledMatrixParagraph>{x.date}</StyledMatrixParagraph>
          </StyledBlogEntry>
        ))}
    </StyledHomepageLayout>
  )
}

export default HomepageScreen
