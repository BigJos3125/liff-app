import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Screen from './Screen';
import Grid from './Grid';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const VerificationScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleConfirmClick = () => {
    navigate('/InputOTPPage', { state: { phoneNumber } });
  };

  return (
    <Grid columns={1}>
      <Screen>
        <div className="content">
          <h2 style={{fontFamily:"Kanit"}}>ยืนยันตัวตน</h2>
          <p style={{fontFamily:"Kanit"}} >กรุณากรอกข้อมูลดังกล่าว</p>
          
          <Input 
            size="large" 
            placeholder="เบอร์โทรศัพท์" 
            prefix={<UserOutlined />} 
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            style={{

              borderRadius: '8px',          // กำหนดความโค้งของมุมกรอบ
              padding: '10px',              // เพิ่มช่องว่างภายใน
              backgroundColor: '#ECECEC'    // พื้นหลังสีขาว
            }}
            
          />
          <br/><br/>
          <Button type="primary" size="large" className="confirm-button" onClick={handleConfirmClick} style={{fontFamily:"Kanit",background: "linear-gradient(45deg, #90D5FD, #90D5FD)", // ปรับสีการไล่เฉดสีที่ต้องการ
    border: "none"}}>ยืนยัน</Button>
        </div>
      </Screen>
    </Grid>
  );
};

export default VerificationScreen;
