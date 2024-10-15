import styled from 'styled-components';
import {menu} from '../constant/index';
import { BsCart4 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Logo } from './styles';

const Main = styled.div ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '4rem'

});

const Wrapper = styled.div ({
  width: '95%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const MenuWrapper = styled.div({
  display: "flex",
  gap: '2rem',
  fontSize: '1.3rem'
});


const IconWrapper = styled.div ({
  fontSize:'1.2rem',
  gap: '1.2rem',
  display: 'flex'

})

const Nav = styled.span ({
  cursor: 'pointer',
  '&:hover': {
    color: 'red'
  }
})

const Icon = styled.span ({
  cursor: 'pointer',
  display: 'flex',
  backgroundColor: 'black',
  color: 'white',
  width: '2.6rem',
  height: '2.6rem',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  

})



export default function Header() {
  return (
   
    <Main>
      <Wrapper>
        <Logo>
          <span>Revolt</span>
        </Logo>
        <MenuWrapper>
          {menu?.map((item, index) => {
            return <Nav key={index}>{item?.name}</Nav>
          })}
        </MenuWrapper>
        
        <IconWrapper>
          <Icon>
          <FaRegUserCircle/>
          </Icon>
          <Icon>
          <BsCart4 />
          </Icon>
        </IconWrapper>
        </Wrapper>
       
    </Main>
    
  )
}
