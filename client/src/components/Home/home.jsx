import React, {useState} from 'react';
import styles from './home.module.css';
import Footer from '../Footer/footer';
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
function Index ()  {

    const [price, setPrice] = useState(0)
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value:price,
          },
        },
      ],
    });
  }


    const onApprove = (data, actions) => {
      return actions.order.capture();
    }

    return (

      <div className={styles.container}>

        <p className={styles.para}>
          <h1>WELCOME</h1>
        
          Organ failure was one of the major comorbid issues that led to losing a greater number of lives in the pandemic situation. 
          A single person’s initiative can save up to 8 lives by donating heart, kidney, pancreas, lungs, liver, intestines, hands, face, tissues, bone marrow, and stem cells.
          A number of people lose their lives because of the unavailability of organs.People can donate organs at any age except the donor under the age of 18 has to register themselves with the consent of their parents or guardians.
          <div className={styles.quoteDiv}>
          <span className={styles.quote}>DONATE AND SAVE LIVES❤️</span> <br></br>

            <div className = {styles.app}>
            <div className = {styles.wrapper}>
            
            <input type = "number" onChange = {e=>setPrice(e.target.value)} value={price}/>
            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />
            </div>
            </div>
          </div>
        </p>

        <p>
          </p><br></br><br></br><br></br>
        
        <Footer/>
      </div>
    
    )
}

export default Index;
