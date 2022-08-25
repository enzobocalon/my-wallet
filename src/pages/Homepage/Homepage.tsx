import React from 'react'
import Header from '../../components/Homepage/Header/Header'
import HomePageContainer from '../../components/Homepage/HomePageContainer/HomePageContainer'
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