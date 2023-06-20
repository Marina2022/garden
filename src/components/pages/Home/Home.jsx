import s from './Home.module.scss';
import Hero from "./Hero/Hero";
import Catalog from "./Catalog/Catalog";
import DiscountForm from "./DiscountForm/DiscountForm";
import Sale from "./Sale/Sale";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Catalog/>
      <DiscountForm />
      <Sale/>
    </div>
  );
};

export default Home;
