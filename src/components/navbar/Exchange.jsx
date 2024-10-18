import React from 'react'
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

// Data array with icons and text for each card
const data = [
  {
    id: 1,
    icon: <MdOutlineCurrencyExchange size={40} />,
    text: 'Currency Exchange'
  },
  {
    id: 2,
    icon: <RiSecurePaymentLine size={40} />,
    text: 'Secure Payments'
  },
  {
    id: 3,
    icon: <FaMoneyBillWave size={40} />,
    text: 'Money Transfer'
  },
  {
    id: 4,
    icon: <GiReceiveMoney size={40} />,
    text: 'Receive Money'
  }
];

const Exchange = () => {
  return (
    <div className='eseyExchange'>
  
        {data.map(item => (
          <div key={item.id} className="card">
            <div className="icon">
              {item.icon}
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      
    </div>
  )
}

export default Exchange;
