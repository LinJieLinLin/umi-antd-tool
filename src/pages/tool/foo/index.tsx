import React, { useEffect } from 'react';
import styles from './index.less';
import { RchyControllerGetContact } from '@/services/antdpro/RchyControllerGetContact';
import { PageContainer } from '@ant-design/pro-components';

export default function Page() {
  useEffect(() => {
    const getData = async () => {
      const res = await RchyControllerGetContact({});
      console.error(res);
    };
    getData();
  }, []);
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <div>123</div>
      <h1 className={styles.title}>Page index</h1>
    </PageContainer>
  );
}
