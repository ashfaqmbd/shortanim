import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './Boxes.css';
import office from './images/office.gif';
import socialtree from './images/socialtree.gif';
import autumn from './images/autumn.gif';
import os from './images/os.gif';
import fireworks from './images/fireworks.gif';
import './tiny.css';


const Tinyanimation=()=>{
     useEffect(()=>{
Aos.init({
    offset:200,
    duration:2000});
    },[]);
    return(
<div className="App">
<header>
        <h1><span>Social</span> Media</h1>
        <p>How do you benefit?</p>
        
    </header>
    <div className="container">
        <div className="card" >
            <img src={autumn} alt=""/>
            <div className="body">
                <h3>Thought Process</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo molestiae expedita nam, culpa eaque suscipit aspernatur, error sequi reprehenderit accusantium tempore deserunt animi cumque? Eveniet saepe magni delectus nisi ab.</p>
                
            </div>
        </div>
        <div className="card">
            <img src={office} alt="" data-aos="fade-left"/>
            <div className="body" data-aos="fade-right">
                <h3>Official Community</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo molestiae expedita nam, culpa eaque suscipit aspernatur, error sequi reprehenderit accusantium tempore deserunt animi cumque? Eveniet saepe magni delectus nisi ab.</p>
                
            </div>
        </div>
        <div className="card">
            <img src={socialtree} alt="" data-aos="fade-right"/>
            <div className="body" data-aos="fade-left">
                <h3>Social Priorities</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo molestiae expedita nam, culpa eaque suscipit aspernatur, error sequi reprehenderit accusantium tempore deserunt animi cumque? Eveniet saepe magni delectus nisi ab.</p>
                
            </div>
        </div>
        <div className="card">
            <img src={fireworks} alt="" data-aos="fade-left"/>
            <div className="body" data-aos="fade-right">
                <h3>Social Interaction</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo molestiae expedita nam, culpa eaque suscipit aspernatur, error sequi reprehenderit accusantium tempore deserunt animi cumque? Eveniet saepe magni delectus nisi ab.</p>
                
            </div>
        </div>
        <div className="card">
            <img src={os} alt="" data-aos="fade-right"/>
            <div className="body" data-aos="fade-left">
                <h3>Alternatives</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo molestiae expedita nam, culpa eaque suscipit aspernatur, error sequi reprehenderit accusantium tempore deserunt animi cumque? Eveniet saepe magni delectus nisi ab.</p>
                
            </div>
        </div>
    </div>
    <footer><h4>Ashfaq Ahmed Warraich <span>PIAIC</span></h4></footer>
        
</div>

    );
};
export default Tinyanimation;


