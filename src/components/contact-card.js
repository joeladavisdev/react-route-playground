import React from 'react';
import { render } from 'node-sass';

export default function ContactCard(props) {
    
    contactInfo = (props) => {
        const Contact = {
            firstName: "",
            lastName: "",
            image: ""
        }
        
    }


    return <h1>Hello</h1>;
}
  
  


// # ContactCards / State & Props
// - Create a new project called contact-cards
// - Create some state inside of the app.js:
// ```javascript
// [
//   {
//     firstName: 'yourName',
//     lastName: 'yourLastName',
//     phoneNumber: '828-828-2822'
//   },
//   {
//     firstName: 'yourName',
//     lastName: 'yourLastName',
//     phoneNumber: '828-819-1234'
//   },
// ]
// ```
// - Create a new functional Component called ContactCard
// - ContactCard will render:
//   - a picture
//   - the users FirstName
//   - the users LastName
//   - the users phone Number
// - The info to render in ContactCard will come from app.js as props
// - You will need to map over state in app.js to render ContactCards and pass the user info as props
// ​
// If you want to use my image:
// https://image.flaticon.com/icons/svg/2494/2494965.svg