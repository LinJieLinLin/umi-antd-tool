import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Col, Form, Input, Row } from 'antd';
import { useEffect } from 'react';

const Token: React.FC = () => {
  const { setName } = useModel('wechat.wechat');

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const [form] = Form.useForm();
  const defaultData = {};

  const onFinish = () => {
    setName(123);
    console.debug(form.getFieldsValue());
  };
  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {}, []);
  return (
    <PageContainer ghost>
      <Row>
        <Col span={12}>
          <Form
            {...layout}
            form={form}
            name="qrForm"
            style={{ maxWidth: 600 }}
            initialValues={defaultData}
            onFinish={onFinish}
            onReset={onReset}
          >
            <Form.Item name="appid" label="appid" rules={[{ required: true }]}>
              <Input allowClear placeholder="请输入" />
            </Form.Item>
            <Form.Item
              name="secret"
              label="secret"
              rules={[{ required: true }]}
            >
              <Input allowClear placeholder="请输入" />
            </Form.Item>
            <Form.Item name="accessToken" label="accessToken">
              <Input disabled placeholder="请输入" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                获取token
              </Button>
              <Button htmlType="reset" style={{ margin: '0 8px' }}>
                重置
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Token;
