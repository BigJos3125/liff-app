import { Button, Form } from 'antd';
import { InputOTP } from 'antd-input-otp'; // Don't forget to import this too!
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // เปลี่ยนจาก useHistory เป็น useNavigate
import Grid from './Grid';
import Screen from './Screen';
import './InputOTPPage.css';
import { LeftOutlined } from '@ant-design/icons';

const InputOTPPage = () => {
  const [value, setValue] = useState([]);
  const location = useLocation();
  const navigate = useNavigate(); //  useNavigate
  const phoneNumber = location.state?.phoneNumber || '';
  
    
      const handleClick = () => {
        navigate(-1);
      };

  const handleFinish = (otp) => {
    const payload = otp || value;
    // ทำการยืนยัน OTP และเมื่อสำเร็จให้เปลี่ยนหน้าไปที่ SuccessMessage
    navigate('/SuccessMessage'); 

   
  };

  return (
    <Grid>
      <Screen>
        <div className="form-container">
          <div style={{ width: '100%', textAlign: 'left' }}>
       <LeftOutlined onClick={handleClick} />
        </div>
          <h2 style={{fontFamily:"Kanit"}}>ยืนยันตัวตน</h2>
          <p style={{fontFamily:"Kanit"}}>โปรดตรวจสอบและส่งหมายเลขรหัสด้านล่าง</p>
          <p className="phone-number">{phoneNumber} </p>
          <InputOTP length={4} onChange={setValue} value={value} autoSubmit={handleFinish} className="custom-otp-input"/>
          <p style={{fontFamily:"Kanit"}}>ยังไม่ได้รับรหัส?</p>
          <div style={{ width: '100%', textAlign: 'right' }}>
          <p style={{fontFamily:"Kanit"}}>ส่งรหัสอีกครั้ง?</p>
          </div>
          <br />
          {/* <Button type="primary" size={20} onClick={() => handleFinish()} style={{fontFamily:"Kanit"}} >Submit</Button> */}
        </div>
      </Screen>
    </Grid>
  );
};

export default InputOTPPage;
