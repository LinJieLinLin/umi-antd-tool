import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess, useModel } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const { setName } = useModel('global');
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button className="w-500">只有 Admin 可以看到这个按钮!</Button>
      </Access>
      <Access accessible={access.canTest}>
        <Button>看不到我</Button>
      </Access>
      <Button type="primary" className="ml-20" onClick={() => setName('1231')}>
        1231
      </Button>
    </PageContainer>
  );
};

export default AccessPage;
