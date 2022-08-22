import React from 'react'
import Header from '../../components/Header/Header'
import HomePageContainer from '../../components/HomePageContainer/HomePageContainer'
import { HomepageGlobalStyle } from './style'

const Homepage = () => {
  return (
    <>
      <Header />
      <HomePageContainer />
      <HomepageGlobalStyle />
    </>
  )
}

export default Homepage