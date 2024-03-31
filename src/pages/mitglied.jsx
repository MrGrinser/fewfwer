import Contact from '../assets/Contact'
import contactPic from '../images/contactPic.png'
import '../styles/contact.css'
const Mitglied = () => {
    return (
        <div>
            <img src={contactPic} alt="homePic" className="homePic" /> 
    <div className="distance"></div>
    <Contact></Contact>
    {/* <div className="distance">hi</div>
    <div className="distance">h</div>
    <div className="distance">h</div>
    <div className="distance">h</div>
    <div className="distance">h</div> */}
    <div className="distanceExtreme"></div>
    </div>
    )
    ;
};
 
export default Mitglied;