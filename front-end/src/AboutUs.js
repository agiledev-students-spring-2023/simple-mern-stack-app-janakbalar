import { Link } from 'react-router-dom'
import './AboutUs.css'
const image = require("./IMG_1950.jpeg");
/**
 * A React component that represents one Message in the list of messages.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  // this component expects to be passed all the details of the message it should display
  // format the date of the message nicely
  return (
    <>
      <h1>About me</h1>
      <p>Hi! My name is Janak Balar and I am a junior at NYU. I am majoring in Computer Science and minoring in Data Science and Business Studies. 
       I have two siblings, one older sister and a identical twin brother. </p>
       <p>
       I also have a pet, a golden retriever. I enjoy playing videogames, watching tv, and sports. </p>
      
	<img src={image} />

    </>
  
  )
}

// make this component available to be imported into any other file
export default AboutUs
