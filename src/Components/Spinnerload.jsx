import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const Spinnerload = () => {
  return (
    <div className='spinload'>
       <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 24,
        }}
        spin
      />
    }
  />
    </div>
  )
}

export default Spinnerload
