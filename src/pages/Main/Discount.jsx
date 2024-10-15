import styled from "styled-components";
import img from "../../assets/frame.png"
import ButtonComp from "../../component/Button";



const Container =  styled.div ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "15rem 0"
})


const Img = styled.img ({
  width: "20rem",
  objectFit: "cover",
  position: "absolute",
  zIndex: "10",
  left: "16rem"
})

const Content =  styled.div ({
  display: "flex",
  backgroundColor: "#d5664e",
  width: "70%",
  flexDirection: "column",
  gap: "1.4rem",
  padding:"3rem",
  borderRadius: "2rem",
  alignItems: "end",
  position: "relative"
})
const Title = styled.span ({
  fontSize: "1rem",
  color: "white"
})

const Heading =  styled.span ({
  fontSize: "2rem",
  fontWeight: "900"
})

const Span =  styled.span ({
  color: "white"

})

const Align  = styled.div ({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
 
})








export default function Discount() {
  return (
    <Container>
      <Img src= {img} alt="Revolt Resturant"/>
      <Content>
        <Align>
          <Title>Invite Your Friends To Enjoy The Revolt Discount</Title>
          <Heading>Only @ Revolt<Span>15% Discount</Span></Heading>
          <Title>Fresh Food Round The Clock</Title>
          <ButtonComp title='Discount' bg='black'  color='white' />

        </Align>
      </Content>
    </Container>
  )
}
