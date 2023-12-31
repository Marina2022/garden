import s from './Hero.module.scss';
import {Link} from "react-router-dom";
import cn from "classnames";

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={cn("container", s.wrapper)}>
        <h1 className={s.title}>Sale</h1>
        <h2 className={s.subtitle}>New season</h2>
        <Link to='/sale' className={s.saleBtn}>
          Sale
        </Link>
      </div>
    </div>
  );
};

export default Hero;
