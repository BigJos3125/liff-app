import React from 'react';
//import { useHistory } from 'react-router-dom';
import '../../src/App.css'; 
import { useNavigate } from 'react-router-dom';// Ensure the path is correct

const ConfirmationScreen = () => {
    const navigate = useNavigate();


  return (
    <div className="confirmation-screen">
      <div className="overlay">
        <button className="back-button" onClick={() => navigate('/')}>
          &lt; ย้อนกลับ
        </button>
        <div className="form-container">
          <h2>ยืนยันตัวตน</h2>
          <p>โปรดตรวจสอบและพิมพ์ข้อความของท่านและนำส่งหมายเลขรหัสด้านล่าง</p>
          <p className="phone-number">+66 - 9876543210</p>
          <div className="code-inputs">
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
          </div>
          <p>ไม่ได้รับหมายเลข? <span className="resend">ส่งใหม่อีกครั้ง</span></p>
          <button onClick={() => navigate('/SuccessMessage')}>ถัดไป</button>

        </div>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
