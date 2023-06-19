import s from './Home.module.scss';
import Hero from "./Hero/Hero";
import Catalog from "./Catalog/Catalog";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Catalog/>
    </div>
  );
};

export default Home;
