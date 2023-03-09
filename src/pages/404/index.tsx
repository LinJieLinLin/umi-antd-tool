import React from 'react';
import { Button, Result } from 'antd';
import { Link } from '@umijs/max';

const App: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle=""
    extra={
      <Link to="/">
        <Button type="primary" href="/">
          回到首页
        </Button>
      </Link>
    }
  />
);

export default App;
