import React from 'react';
import styles from './plasma.module.css';
import plasma from './images/plasma.jpg';
import donation from './images/donation.png';
import validate from './images/youcan.png';
import notable from './images/youcannot.png';
import remember from './images/remember.jpg';

export default function PlasmaInfo() {
    return (
      <div className={styles.container}>

            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>What is organ donation and transplantation?</p>
                <img src={plasma} className={styles.image} alt="Avatar"/>
                </div>
                <div className={styles.flipcardback}>
                <p className={styles.content}>Organ donation is the process of surgically removing an organ or tissue from one person (the organ donor) and placing it into another person (the recipient).<br></br>
                Transplantation is necessary because the recipient’s organ has failed 
                or has been damaged by disease or injury.Organ transplantation is one of the great advances in modern medicine. Unfortunately, the need for organ donors is much greater than the number of people who actually donate.</p>
                </div>
            </div>
            </div>
            <br/><br/><br/><br/>
            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>Importance of Donation</p>
                <img src={donation} className={styles.image} alt="Avatar"/>
                </div> 
                <div className={styles.flipcardback}>
                    
                <p className={styles.content}>
                "<span className={styles.quote}> DONATE ORGAN SAVE LIVES❤️ </span>"<br></br>
                Donation is the giving of <b>an organ and tissue to help someone that needs a transplant</b>. 
                Transplants can save or transform the life of a person. 
                One organ and tissue donor can help transform the lives of more than 10 people. 
                This relies on donors and their families agreeing to donate their organ and tissue after death.</p>
                </div>
            </div>
            </div>

            <br/><br/><br/><br/>
            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>REASONS to BECOME AN ORGAN DONOR</p>
                <img src={validate} className={styles.image} alt="Avatar"/>
                </div> 
                <div className={styles.flipcardback}>
                    
                <p>
                <ul className={styles.ulcontent}>
                    <li className={styles.licontent}>✅ The organ waiting list is always long.</li>
                    <li className={styles.licontent}>✅ Most religions support organ donation.</li>
                    <li className={styles.licontent}>✅ One organ donor can help multiple people.</li>
                    <li className={styles.licontent}>✅ People are dying while waiting for an organ.</li>
                    <li className={styles.licontent}>✅ Organ donation is an opportunity to help others.</li>
                    <li className={styles.licontent}>✅ Organ donation can be a rewarding and positive experience.</li>
                </ul>
                </p>
                </div>
            </div>
            </div>

            <br/><br/><br/><br/>
            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>You CANNOT donate Organ If</p>
                <img src={notable} className={styles.image} alt="Avatar"/>
                </div> 
                <div className={styles.flipcardback}>
                    
                <p>
                <ul>
                    <li className={styles.licontent}>🚫 You are having <b>HIV</b> or actively spreading <b>cancer</b>.</li>
                    <li className={styles.licontent}>🚫 You are under 18(NEED GURDIAN).</li>
                    <li className={styles.licontent}>🚫 You are passed away due to an infectious disease.</li>
                    <li className={styles.licontent}>🚫 Your are donated more than 3 times.</li> 
                    <li className={styles.licontent}>🚫 Your are not ood halth and phychological condition.</li> 
                    <li className={styles.licontent}>🚫 You have chronic kidney problems.</li> 
                    <li className={styles.licontent}>🚫 You having any conditions that may jeopardize your health by kidney donation (e.g., pregnancy, being underweight, etc.).</li>
                </ul>
                </p>
                </div>
            </div>
            </div>

            <br/><br/><br/><br/>
            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>Things to remember before you donate Organ</p>
                <img src={remember} className={styles.image} alt="Avatar"/>
                </div> 
                <div className={styles.flipcardback}>
                    
                <p>
                <ul>
                    <li className={styles.licontent}>📌 Do not drink alcohol for at least 24 hours before you donate blood. Alcohol remains in your system for about a day
                        and so could end up in the blood that is collected from you. Besides alcohol acts as a blood thinner, so there
                        could be a lot of bleeding when you are hooked to the blood extraction device.
                    </li>
                    <li className={styles.licontent}>📌 Do not smoke or consume heavy meals/greasy foods before organ donation.</li>
                    <li className={styles.licontent}>📌 Do not pop an aspirin or any kind of pain-relieving medication for 48 hours before the donation. These medicines 
                     affect your blood’s platelets.
                     </li>
                </ul>
                </p>
                </div>
            </div>
            </div>
      </div>
    );
  }