import { PageContainer } from '@ant-design/pro-components';
import { Button, Col, Form, Input, QRCode, Row, Switch } from 'antd';
import { useEffect, useState } from 'react';

const AccessPage: React.FC = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const [form] = Form.useForm();
  const defaultData = {
    url: 'https://github.com/LinJieLinLin',
    isIcon: true,
    icon: 'https://img.lj4.top/avatar.png',
    iconSize: 40,
  };
  const [qrData, setQrData] = useState(defaultData);

  const onFinish = () => {
    setQrData(form.getFieldsValue());
  };
  const onReset = () => {
    form.resetFields();
    setQrData(form.getFieldsValue());
  };

  useEffect(() => {
    console.log(form.getFieldsValue());
    // form.setFieldsValue(defaultData)
  }, []);
  return (
    <PageContainer ghost>
      <Row justify="center" className="mg-b20">
        <Col>
          <QRCode
            errorLevel="H"
            value={qrData?.url}
            size={200}
            icon={qrData.isIcon ? qrData.icon : undefined}
            iconSize={qrData.iconSize ? qrData.iconSize : undefined}
          />
        </Col>
      </Row>

      <Form
        {...layout}
        form={form}
        name="qrForm"
        style={{ maxWidth: 600 }}
        initialValues={defaultData}
        onFinish={onFinish}
        onReset={onReset}
      >
        <Form.Item name="url" label="url" rules={[{ required: true }]}>
          <Input allowClear />
        </Form.Item>
        <Form.Item name="isIcon" label="展示图标" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.isIcon !== currentValues.isIcon
          }
        >
          {({ getFieldValue }) =>
            getFieldValue('isIcon') ? (
              <>
                <Form.Item name="icon" label="图标url">
                  <Input allowClear />
                </Form.Item>
                <Form.Item name="iconSize" label="图标大小">
                  <Input type="number" allowClear />
                </Form.Item>
              </>
            ) : null
          }
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            生成
          </Button>
          <Button htmlType="reset" style={{ margin: '0 8px' }}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default AccessPage;
