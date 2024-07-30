import React from 'react';
import { Button, Typography, Row, Col, Card } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import './SuccessMessage.css'; // เพิ่ม CSS ไฟล์เพื่อจัดการสไตล์เพิ่มเติมถ้าจำเป็น
import Screen from './Screen';

const { Title, Text } = Typography;

const SuccessMessage = () => {
  return (
    <Screen>
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col>
        <Card bordered={false} style={{ textAlign: 'center' }}>
          <CheckCircleOutlined style={{ fontSize: 60, color: 'green' }} />
          <Title level={2} style={{ marginTop: 16, fontFamily: "Kanit" }}>เรียบร้อย!</Title>
          <Text style={{fontFamily:"Kanit"}}>คุณสามารถกดออกจากหน้านี้ได้</Text>
        </Card>
      </Col>
    </Row>
    </Screen>
  );
};

export default SuccessMessage;
