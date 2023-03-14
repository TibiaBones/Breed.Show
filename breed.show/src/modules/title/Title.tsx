import React from "react";
import '../profileStyle.css';
import AccountImg from "./components/accountImg";
import NurseryIco from "./components/Nursery";

function Title() {
    return(
    <div>
        <div className="panel-background"></div>

        <div className="accountHeader-background">
            <div className="accountHeader-title">
                <AccountImg className="accountHeader-account_img"/>

                <span className="accountHeader-accountName">Евгений Федоров</span>

                <div className="accountHeader-cattery_flexContainer">
                    <NurseryIco className="nursery-big_img"/>

                    <span className="accountHeader-catteryName">Golden StapWay</span>
                </div>
            </div>

            <div className="delimiter accountHeader-delimiter"></div>
        </div>
    </div>
    )
    
}

export default Title;