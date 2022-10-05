import Icon1 from '../assets/images/service-1.png'
import Icon2 from '../assets/images/service-2.png'
import Icon3 from '../assets/images/service-3.png'

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from '../styled/Services.styles'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Accommodation</ServicesH2>
          <ServicesP>
            Select the destination and category and we do the rest
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Airline tickets</ServicesH2>
          <ServicesP>Find the best prices on the web</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Attractions</ServicesH2>
          <ServicesP>
            Continuous advice so that you live the best experience
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
