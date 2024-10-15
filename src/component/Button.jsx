import styled from "styled-components"



// eslint-disable-next-line react/prop-types
export default function ButtonComp({title, bg, color}) {

    const Button =  styled.button ({
        backgroundColor: `${bg}`,
        color: `${color}`,
        border: 'none',
        borderRadius: '1.2rem',
        padding: '1rem 1rem',
        cursor: 'pointer',
        width: '7rem',
        outline: 'none',
        fontWeight: 'bold',
        fontSize: '0.8rem'
    
    })
  return (
    <Button>{title}</Button>
  )
}
