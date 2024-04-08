import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess, useModel } from '@umijs/max';
import { Button, Col, Form, InputNumber, Row } from 'antd';
import { useEffect, useState } from 'react';

const AccessPage: React.FC = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const [form] = Form.useForm();
  const [defaultData] = useState(
    JSON.parse(localStorage.getItem('temFormData') || '') || {
      hideCount: 0,
      readCount: 0,
      chatCount: 0,
      getCvCount: 0,
      faceCount: 0,
      facePassCount: 0,
    },
  );
  console.log(defaultData);
  const [formList] = useState([
    { key: 'hideCount', name: '打招呼次数' },
    { key: 'readCount', name: '已读' },
    { key: 'chatCount', name: '回应沟通' },
    { key: 'getCvCount', name: '要简历数' },
    { key: 'faceCount', name: '邀面试' },
    { key: 'facePassCount', name: '面试通过' },
  ]);
  const { setName } = useModel('global');
  const access = useAccess();
  const [isLocal] = useState(location.host === 'localhost:8000');
  const onFinish = () => {
    console.log(form.getFieldsValue());
    localStorage.setItem('temFormData', JSON.stringify(form.getFieldsValue()));
  };
  const onReset = () => {
    form.resetFields();
    console.log(form.getFieldsValue());
  };

  useEffect(() => {}, []);
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
      <Button
        type="primary"
        className="ml-20"
        onClick={() => setName(String(Date.now()))}
      >
        1231
      </Button>
      <Row justify="start" className="mt-20">
        <Col span={12}>
          {isLocal && (
            <Form
              {...layout}
              form={form}
              name="qrForm"
              style={{ maxWidth: 600 }}
              initialValues={defaultData}
              onFinish={onFinish}
              onReset={onReset}
            >
              {formList.map((v) => {
                return (
                  <Form.Item
                    key={v.key}
                    name={v.key}
                    label={v.name}
                    rules={[{ required: true }]}
                  >
                    <InputNumber />
                  </Form.Item>
                );
              })}
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  保存一下
                </Button>
                <Button htmlType="reset" style={{ margin: '0 8px' }}>
                  重置
                </Button>
              </Form.Item>
            </Form>
          )}
        </Col>
      </Row>
    </PageContainer>
  );
};

export default AccessPage;
