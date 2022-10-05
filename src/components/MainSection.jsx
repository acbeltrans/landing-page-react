import { useState } from 'react'
import Video from '../assets/videos/video1.mp4'
import { Button } from '../styled/Button.styles'
import {
  MainContainer,
  MainBackground,
  VideoBackground,
  MainContent,
  MainH1,
  MainP,
  MainBtnWrapper,
  ArrowForward,
  ArrowRight,
} from '../styled/MainSection.styles'

const MainSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <MainContainer>
      <MainBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
        <MainContent>
          <MainH1>Go to your next exciting vacation</MainH1>
          <MainP>And make it memorable</MainP>
          <MainBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </MainBtnWrapper>
        </MainContent>
      </MainBackground>
    </MainContainer>
  )
}

export default MainSection
