import '../App.css';
import {Link} from 'react-router-dom';

// Image imports  
import logo from '../images/purple-full-logo.png';
import logo2 from '../images/purple-icon.png';
import logowhite from '../images/white-full-logo.png';
import logohugo from '../images/hugo_logo.png';
import logozoopla from '../images/zoopla.jpg';
import logomck from '../images/mck_logo.png';
import logols from '../images/ls_logo.png';
import changeimg from '../images/change.jpg';
import riverimg from "../images/river-mountain.jpg";
import qrfeedbackimg from "../images/qr-feedback.jpg";
import mountainimg from "../images/mountain-reflect.jpg";
import sunriseimg from "../images/sunrise.jpg";
import darkpink from "../images/darkpink.jpg";

export const Hero = () => {

    return (

    <section class="text-gray-400 bg-black body-font"
    style={{backgroundImage: `url(${darkpink})`, backgroundSize: 'cover',
    backgroundPosition: 'center'}}>
  <div class="container px-10 py-24 mx-auto flex flex-wrap items-center">
    
    {/* LHS text */}
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0"> 
      <h1 class="title-font font-medium text-4xl text-white mb-10">
      Turbocharge your most valuable asset, <span class="text-indigo-500 font-bold"> your people. </span></h1>
      <p class="title-font text-2xl text-white italic mb-10">
      Netlearn is the modern AI-native platform for continuous performance coaching.
      Leverage our tools to unify your employee's performance signals,
      personalize learning experiences, and deliver contextual coaching.</p>
    </div>
    
    {/* RHS box */}
    <div class="lg:w-2/6 md:w-1/2 bg-gray-500 bg-opacity-30 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h1 class="text-white text-2xl font-medium title-font mb-5">Get Started</h1>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-400">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>   
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-400">Work Email</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book a Demo</button>
      <p class="text-xs mt-3">
        We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services, in accordance with our <Link to="/" class="underline text-blue-600 hover:text-white visited:text-purple-600">
        privacy policy.</Link>
        </p>
    </div>
  </div>

    {/* Trusted by*/}
    <div class="bg-white w-screen mx-auto pt-6 pb-4">
        <div class="mb-5 text-center">
            <h4 class="text-sm uppercase text-gray-500 text-center font-medium">
                Trusted by teams across leading enterprises</h4>
        </div>
        <div
            class="flex justify-center  gap-20 md:grid-cols-3">
            <a href="#" class="flex justify-center items-center">
                <img src ={logohugo} alt="Logo" style={{height:50}}></img>
            </a>
            <a href="#" class="flex justify-center items-center">
                <img src ={logozoopla} alt="Logo" style={{height:50}}></img>
            </a>
            <a href="#" class="flex justify-center items-center">
                <img src ={logols} alt="Logo" style={{height:50}}></img>
            </a>
            <a href="#" class="flex justify-center items-center">
                <img src ={logomck} alt="Logo" style={{height:50}}></img>
            </a>      
        </div>
        {/* Line */}
        <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
    </div>
                                            

</section>

    )};