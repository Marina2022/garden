import Hero from "./Hero/Hero";
import Catalog from "./Catalog/Catalog";
import DiscountForm from "./DiscountForm/DiscountForm";
import Sale from "./Sale/Sale";
import {useEffect} from "react";

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
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
