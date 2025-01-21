import '../App.css';

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

export const WhyNL = () => {

return (

<section class="text-gray-600 bg-gray-900 body-font">
    
    {/* Title */}
    <div class="container px-20 pt-5 pb-5 flex flex-col items-start">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            Introducing Netlearn</h1>
        <div class="">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
    </div>
   
    <div class="px-20 pb-10 grid grid-cols-2 justify-items-center">
      
      {/* LHS */}
      <div class="container my-auto">

      <div class="flex relative pb-8 text-left">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-wrap pl-4">
            <h2 class="font-medium title-font text-md text-gray-900 mb-1 tracking-wider uppercase text-white">
            Unified view of baseline performance</h2>
            <p class="leading-relaxed text-white">
            Consolidate performance signals across multiple sources, leveraging Netlearn's integrations with leading feedback and performance intelligence tools or our voice feedback channels.
            </p>
          </div>
        </div>

        <div class="flex relative pb-8 text-left">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-md text-gray-900 mb-1 tracking-wider uppercase text-white">
            Connect the dots
            </h2>
            <p class="leading-relaxed text-white">
            Bridge the gap between feedback and growth by identifying patterns, connecting the dots, and delivering personalized learning recommendations.
            </p>
          </div>
        </div>
    

        <div class="flex relative pb-8 text-left">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-md text-gray-900 mb-1 tracking-wider uppercase text-white">
            Learn while you work
            </h2>
            <p class="leading-relaxed text-white">
            Offer in-the-moment learning interventions tailored to employee developmental needs and learning preferences, seamlessly integrated into daily workflows.
            </p>
          </div>
        </div>

                
        <div class="flex relative pb-8 text-left">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-md text-white mb-1 tracking-wider uppercase">
            Enterprise-ready, secure and scalable</h2>
            <p class="leading-relaxed text-white">
            Built for businesses of all sizes, our robust enterprise stack ensures compliance, security, and seamless integration with your existing systems.
            </p>
          </div>
        </div>

      </div>

      {/* RHS */}
      <div class="flex items-center">
      <img class="lg:w-1/5 md:w-1/5 rounded-lg" src={qrfeedbackimg} style={{width:600}} alt="image"/>
      </div>
    </div>

</section>

    )};