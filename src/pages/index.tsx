import { history } from '@umijs/max';
import { useEffect } from 'react';
const Index: React.FC = () => {
  useEffect(() => {
    history.replace('/tool/qrcode');
  }, []);
  return <></>;
};

export default Index;
