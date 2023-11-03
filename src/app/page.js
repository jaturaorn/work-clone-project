import CardProduct from "./component/CardProduct";
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
      <CardProduct />
      <Explain />
      <Footer />
    </>
  );
}
