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

export const Intro = () => {

return (

<section class="text-gray-600 body-font">
  <div class="container px-20 pt-5 pb-10 mx-auto">
    {/* Lead */}
    <div class="text-center mb-10">
      <div class='flex flex-col'>
      <h1 class="title-font font-medium text-4xl text-amber-600 italic mb-4">
      "Management is the most noble of professions if it's practiced well."</h1>
      <p class='flex place-self-end mr-20 text-sm text-amber-600 italic uppercase'>Professor Clayton Christensen, Harvard Business School</p>
      </div>

    <div>
      <p class="text-2xl leading-relaxed my-10 mx-auto">
      Companies spend <span class="text-amber-600 font-bold"> more than $350B </span> each year on corporate training programs.
      <br/> Yet <span class="text-amber-600 font-bold">less than 25% </span> say they see improved performance.
      </p>
      </div>
    
    </div>

    {/* Key Points */}
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
          Poor baseline understanding</h2>
          <p class="leading-relaxed text-base">
          Performance signals (e.g. feedback) are scattered, poorly structured, and often too late
          </p>
        </div>
      </div>
      
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
          Ineffective targetting</h2>
          <p class="leading-relaxed text-base">
          No straight line between performance signals and "so what" practical coaching
          </p>
        </div>
      </div>

      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
          Out-of-context interventions
          </h2>
          <p class="leading-relaxed text-base">
          Delivering the right content at wrong time, place, situation, or format</p>
        </div>
      </div>

    </div>
  </div>
</section>

    )};