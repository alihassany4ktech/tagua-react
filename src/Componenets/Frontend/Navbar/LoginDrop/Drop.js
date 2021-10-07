import React, { useState } from 'react';
import './Drop.css';

const NotificationDrop = (props) => {
    const [notifyOpen, setNotifyOpen] = useState(false);
    const [numberNotification, setNumberNotification] = useState(3);

    return (
        <>

            <div className="dropdown"> 
                <i className="bi bi-person-fill"></i>
                <div className="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>




        </>
    );
}
export default NotificationDrop;


function DropdownMenu() {
    function DropdownItem(props) {
        return (
            <>
                <div className="p-2">
                    <div className="ND-menu-item-dark card bg-dark-mode border-0 shadow-sm rounded-10 p-3">
                        <div className="d-flex flex-row align-items-center">
                            <img class="ND-icon-img img-fluid" src={props.imgSource} alt="image" />
                            <small><strong className="mx-2 text-white">{props.title}</strong></small>
                        </div>
                        <small className="text-white" align="left">{props.description}</small>
                        <small align="left" className="text-muted">{props.experience}</small>

                    </div>

                </div>
            </>

        );

    }
    return (
        <div className="ND-dropdown-dark">
            <button className="btn btn-success w-100"><b>Notification</b></button>
            <DropdownItem

                imgSource={"https://i.imgur.com/IRsUTtE.jpg"}
                title={"Airbnb"}
                description={"Word press 2 vacancies are available."}
                experience={"HTML CSS coder 2 to 3 year experience."}
            ></DropdownItem>
            <DropdownItem

                imgSource={"https://i.imgur.com/IRsUTtE.jpg"}
                title={"Airbnb"}
                description={"Word press 2 vacancies are available."}
                experience={"HTML CSS coder 2 to 3 year experience."}
            ></DropdownItem>
            <DropdownItem

                imgSource={"https://i.imgur.com/IRsUTtE.jpg"}
                title={"Airbnb"}
                description={"Word press 2 vacancies are available."}
                experience={"HTML CSS coder 2 to 3 year experience."}
            ></DropdownItem>




        </div>

    );

}
