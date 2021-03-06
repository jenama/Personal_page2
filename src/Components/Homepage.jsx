import React from "react";
// import { StackCard, TinderLikeCard } from 'react-stack-cards'
 
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img:"https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-0/p206x206/555769_10151266620092927_706690383_n.jpg?_nc_cat=103&_nc_sid=dd7718&_nc_ohc=1pejw86iMjcAX-MCFOs&_nc_ht=scontent-bos3-1.xx&_nc_tp=6&oh=221d4626126cfb17d3caa810051066cd&oe=5E969A2D",
          greetings: [
            { language: "Welcome" },
            {language: "Bienvenue" },
            { language: "Bienvenido" },
            { language: "Hoşgeldiniz" },
            { language: "Huānyíng Guānglín" },
            { language: "Aapaka Svaagat Hai" },
            {language: "Benvenguts"},
            {language: "Bem-Vindos"},
            {language: "Benvenuti"},
            {language: "Ahlaan Bik"},
            {language: "Dobro Pozhalovat"},
            {language: "Yōkoso"}

          ],
          button: false,
          directionTinder: "swipeCornerDownRight",
        github: 'https://github.com/jenama',
        linkedIn: 'https://www.linkedin.com/in/johanne-enama-6b318a189/',
        // email: 'johanneenama@pursuit.org'
    }
     this.Tinder = null
  }

  render() {
    const { greetings, github, linkedIn } = this.state;
    return (
      <div className="home-page">

        {/* {console.log("hey", greetings)} */}
        <div className='hello-container'>
          <h1 className="greetings">
            {greetings.map(greeting => {
              return <div className="welcome-bubble">{greeting.language}</div>;
            })}
          </h1> 
           {/* <img className='image' src= {img} alt='me'/> */}

        </div>
        <div>
            
           
        </div>
      </div>
    );
  }
}

export default Homepage;
