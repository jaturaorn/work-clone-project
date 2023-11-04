import ButtonGroup from "./component/ButtonGroup";
import CardButton6 from "./component/CardButton6";
import CardProduct from "./component/CardProduct";
import CardProduct1 from "./component/CardProduct1";
import Explain from "./component/Explain";
import Hero from "./component/Hero";
import Indicator from "./component/Indicator";
import Footer from "./page/Footer";
import Navbar from "./page/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Indicator />
      <Hero />
      <ButtonGroup />
      <CardProduct />
      <CardProduct1 />
      <CardButton6 />
      <Explain />
      <Footer />
    </>
  );
}
