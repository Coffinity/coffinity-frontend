import CoffeeBeans from '../components/CoffeeBeans'
import Detail from '../components/Detail'
import Equipment from '../components/Equipment'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const Home = () => {
  return (
    <div>
      <Header />
      <Detail />
      <CoffeeBeans />
      <Equipment />
      <Footer />
    </div>
  )
}
