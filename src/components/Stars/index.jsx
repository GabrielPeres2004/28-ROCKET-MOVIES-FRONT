import { Container } from './style'

import { FiStar } from 'react-icons/fi'

import { AiFillStar } from 'react-icons/ai'

export function Stars({ rating, ...rest }) {
   if(!rating) {
      return null
   }

   let stars = []

   for(let cont = 1; cont <= 5; cont++) {
      if(cont > rating) {
         stars.push(<FiStar key={cont} />)
      } else {
         stars.push(<AiFillStar key={cont} />)
      }
   }

   return (
      <Container {...rest}>
         {stars}
      </Container>
   )
}