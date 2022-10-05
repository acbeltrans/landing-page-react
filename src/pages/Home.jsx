import { useState } from 'react'
import {
  MainSection,
  NavBar,
  SideBar,
  InfoSection,
  Services,
  Footer,
} from '../components'

import { InfoOne, InfoTwo } from '../data'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <MainSection />
      <InfoSection {...InfoOne} />
      <InfoSection {...InfoTwo} />
      <Services />
      <Footer />
    </>
  )
}

export default Home
