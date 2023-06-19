import s from './SectionTitle.module.scss';
import cn from 'classnames'

const SectionTitle = ({classname, children}) => {
  return (

    <h2 className={cn(s.title, classname)}>
      {children}
    </h2>
  );
};

export default SectionTitle;
