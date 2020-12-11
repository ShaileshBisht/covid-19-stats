import React from 'react'
import "./Rules.css"

function Rules() {
    return (
        <div className="rules">
            <div className="rules_left">
                <img className="rules_img" alt="symptoms" src="https://www.mygov.in/sites/all/themes/mygov/images/covid/symptoms.png"></img>
            </div>
            <div className="rules_right">
                <div className="rules_spread">
                    <h3>HOW IT SPREADS</h3>
                    <img className="rules_img" alt="symptoms" src="https://www.mygov.in/sites/all/themes/mygov/images/covid/block-one.png"></img>
                </div>
                <div className="rules_prevention">
                    <h3>PREVENTION</h3>
                    <img className="rules_img" alt="symptoms" src="https://www.mygov.in/sites/all/themes/mygov/images/covid/block-two.png"></img>
                </div>
                              
            </div>
            
        </div>
    )
}

export default Rules;
