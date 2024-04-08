import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>('');
  console.log('useUser', name);
  // const get
  return {
    name,
    setName,
  };
};

export default useUser;
