import styled from "styled-components"
import img from '../../assets/NaijaFood.jpg'


const Main = styled.div ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
})

const ImgWrapper = styled.div({
  width:'100%',
  height:  '90vh',

})

const Content = styled.div ({
  position: 'absolute',
  color: 'white',
  fontSize: '3rem',
  fontWeight:  'bold',
  alignItems:  'center',
  top: '50%',
  left: '50%',
  transform:  'translate(-50%, -50%)',
  width: '80%'


  
})

const Img = styled.img ({
  width: '100%',
  height:  '100%',
  objectFit:  'cover',
  backgroundColor:   'black',

})






export default function Hero() {
  return (
    <Main>
      <Content>
        <span>Revolt Restaurants | The Home for Delicious Nigerian Food and intercontinetal Cuisine</span>


      </Content>
      <ImgWrapper>
      <Img src= {img} alt="Hero" />
      </ImgWrapper>
    </Main>
  )
}
