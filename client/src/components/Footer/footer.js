import React from 'react';
import "./style.css";


class Footer extends React.Component 
{
    render()
    {
        return (
            <footer>
    <div className="container">
        <div className="footer-cols">
            <ul>
                <li className="listEle">Helpful Links</li>
                <li><a href="http://www.health.gov.lk/moh_final/english/" target="_blank" rel="noreferrer">Ministry of Health, Gov. of SRI LANKA</a></li>
                <li><a  href="http://www.health.gov.lk/moh_final/english/others.php?pid=14" target="_blank" rel="noreferrer">LK -HEALTH HELPLINE NUMBERS</a></li>
                <li><a  href="https://www.who.int/transplantation/Guiding_PrinciplesTransplantation_WHA63.22en.pdf" target="_blank" rel="noreferrer">Transplantation - WHO | World Health Organization</a></li>
                <li><a  href="https://coronavirus.thebaselab.com/" target="_blank" rel="noreferrer">COVID-19 Global Tracker</a></li>
            </ul>
            <ul>
                <li className="listEle">Sources</li>
                <li><a href="https://www.hpb.health.gov.lk/en/covid-19" target="_blank" rel="noreferrer"> 🔗 APIs by Covid19LK</a></li>
                
                
            </ul>
        </div>
    </div>
    <hr/>
    <p>An effort by our Team to keep our loved ones safe and informed ❤️</p>
</footer>
        )
    }
}

export default Footer