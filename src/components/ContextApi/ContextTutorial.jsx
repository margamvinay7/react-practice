import { useContext,} from 'react'
import { DataContext } from './ContextApi';
const ContextTutorial = () => {
  const {theme } = useContext(DataContext);
  console.log(theme);
  return <div>{`context contextData is ${theme}`}</div>;
};

export default ContextTutorial;
