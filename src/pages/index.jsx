import Hero from './Main/Hero';
import Discount from './Main/Discount';
// import AppDownload from './Main/AppDownload'
import Order from './Main/Order';
import Vibe from './Main/Vibe';
import Global from '../component/Global';



export default function Home() {
  return (
    <>
      <Hero/>
      <Order/>
      <Vibe/>
      <Discount/>
      {/* <AppDownload/> */}
      <Global/>
      
      

    </>
  )
}
