
import Faq from "../components/home/faq"
import GameProduct from "../components/home/game-product"
import Hero from "../components/home/hero"
import PopularProduct from "../components/home/popular-product"
import Promo from "../components/home/promo"
import Testimoni from "../components/home/testimoni"

const Home = () => {
    return (
        <section className="mt-17 md:mt-30">
            <Hero />
            <div className="mt-5"></div>
            <Promo />
            <PopularProduct/>
            <GameProduct/>
            <Testimoni/>
            <Faq/>
        </section>
    )
}

export default Home
