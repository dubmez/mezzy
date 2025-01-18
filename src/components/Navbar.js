import {Link} from 'react-router-dom';
import logo from '../images/purple-full-logo.png'
import logowhite from '../images/white-full-logo.png'
import logo2 from '../images/purple-icon.png'

export const Navbar = () => {
   return ( 
    <div class = "bg-black p-3 grid grid-cols-4">
         <Link to="/" class='place-self-start ml-10 mt-2'>
               <img src={logowhite} className="h-10" alt="Netlearn Logo" />
           </Link>
         
         <nav class="col-span-2 basis-full text-white font-semibold place-self-center">
            <Link to="/" class="text-lg uppercase mx-5 hover:text-purple-900"> Splash </Link>
            <Link to="/profile" class="text-lg uppercase mx-5 hover:text-purple-900"> Profile </Link>
            <Link to="/dashboard" class="text-lg uppercase mx-5 hover:text-purple-900"> Dashboard </Link>  
         </nav>

{/* If State is logged out, show login; if State is logged out, show Profile */}
         <div className='mt-4 md:mt-0 place-self-center'>
         <button class="text-white bg-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
           </div>

    </div>
   )};
