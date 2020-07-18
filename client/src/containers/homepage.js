import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import HomepageScreen from '../screen/homepage.screen'

const POSTS_QUERY = gql`
  {
    allPosts {
      title
      date
    }
  }
`

const Homepage = () => {
  const {loading, error, data} = useQuery(POSTS_QUERY)
  if(loading) {
    return <h1>LOADING</h1>
  }
  if(error) {
    return <h2>something went wrong...</h2>
  }
  console.log(data)
  return (
   <HomepageScreen data={data.allPosts} />
  )
}

export default Homepage
