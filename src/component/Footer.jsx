import styled from "styled-components"
import { footerMenu, locations } from "../constant/data"
import { Logo } from "./styles"


const Container = styled.div({
  display:  "flex",
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '4rem 0'

  
})

const Wrapper = styled.div ({
  display: 'flex',
  width: '90%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem'

})

const Box =  styled.div ({
  backgroundColor: 'red',
  width: '4rem',
  height:  '4rem',
  borderRadius: '1rem'

})

const HoursWrapper =  styled.div ({
  display: 'flex',
  gap: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'max-content'
})

const Hours =  styled.div ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '0.5rem'
})

const Wrap1 = styled.div ({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column'
})

const Heading1 = styled.span ({
  fontSize: '0.7rem',
  fontWeight: '800',
  textTransform: 'uppercase'

})
const Heading = styled.span ({
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'uppercase'

})

const FooterMenu =  styled.div ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
})

const TimeOfOpen =  styled.span ({
  justifyContent: 'center',
  flexDirection: 'column'
})

const State =   styled.div ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  fontWeight: '500'

})

const StateName =  styled.span ({
  textTransform: 'uppercase'
})


const WrapContent =  styled.div ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  width: '25rem'
})
const WrapContent2 =  styled.div ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  width: '10rem'
})

const MenuText = styled.span ({
  cursor: 'pointer',
  '&:hover': {
    color: 'red'
  }
})






export default function Footer() {
  return (
    <Container>
      <Wrapper>
      <Wrap1>
        <Logo>Revolt</Logo>
        <HoursWrapper>
          <Box></Box>
          <Hours>
            <Heading1>Opening Hours</Heading1>
            <TimeOfOpen>Mon-Sat (8am - 6pm)</TimeOfOpen>
            <TimeOfOpen>Sunday  (10am - 5pm)</TimeOfOpen>

          </Hours>
        </HoursWrapper>
      </Wrap1>
      <WrapContent>
        <Heading>Contact Us</Heading>
        <State>
          {locations?.map((item, index) => {
            return (
              <StateName key={index}>{item}</StateName>
            )
          })}
        </State>
        <span>Email: info@revoltpub.com</span>
        <span>Phone: 01234 567890,  01234 567891</span>

      </WrapContent>
      <WrapContent2>
        <Heading>Help & Support</Heading>
        <FooterMenu>
          {footerMenu?.map((item, index) => {
            return(
              <MenuText key={index}>{item}</MenuText>

            )
          })}
        </FooterMenu>
      </WrapContent2>
      </Wrapper>
    </Container>
  )
}
