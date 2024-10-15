import styled from "styled-components"


const Container = styled.div ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem'
})

export default function Global() {
  return (
    <Container>Global</Container>
  )
}
