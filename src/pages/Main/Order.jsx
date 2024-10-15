import styled from 'styled-components'
import img from '../../assets/order.png'
import ButtonComp from '../../component/Button'




const Img  = styled.img ({
    width: '25rem',
    objectFit: 'cover',
    position: 'absolute',
    right: '2rem'
})

const Container =  styled.div ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem 0 5rem 0'
    
})

const Content =  styled.div ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#d5664e',
    color: 'white',
    width: '50%',
    padding: '3rem',
    borderRadius: '2.4rem',
    gap: '2rem',
    position: 'relative'
})

const Heading =   styled.span({
    fontSize: '1rem',
 

})

const LargeHeading = styled.span ({
    fontSize: '2.5rem',
    fontWeight: '800',
    width: '60%'

})



export default function Order() {
  return (
    <Container>
        <Content>
            <Heading>Speed Delivery</Heading>
            <LargeHeading>The order will be delivered within 35 minute</LargeHeading>
            <ButtonComp title='Order Now' bg='black' color='white'/>

        </Content>
        <Img src={img} alt="" />
    </Container>
  )
}
