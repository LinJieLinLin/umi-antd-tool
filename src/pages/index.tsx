import { history } from '@umijs/max';
import { useEffect } from 'react';
const Index: React.FC = () => {
  useEffect(() => {
    history.replace('/home');
  }, []);
  return <></>;
};

export default Index;
