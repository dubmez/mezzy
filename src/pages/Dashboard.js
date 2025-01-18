// the hook is used to get data from an API
import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';

export const Home =() => {
//   useQuery has two main args - queryKey (for ID'ing and caching data) and queryFn to return the raw data to React Query
// In addition to the main data, you can also pass useful functions like isLoading, isError...
   const { data: catData, isLoading, isError, refetch } = useQuery({
      queryKey:["id1"], 
      queryFn: () => {
      return Axios.get('https://catfact.ninja/fact').then((res) => res.data);
      }
   });

   // Show loading message when waiting for data
   if (isLoading) {
      return <h1>Loading...</h1>
   }
   //  Handle errors
   if (isError) {
      return <h1>Sorry, there was an error</h1>
   }
   
   return (
   <div>
   <h1>This is Home</h1>
   <p>{catData?.fact}</p>
   
   {/* easily refetch the data from API */}
   <button onClick={refetch}>Update Data</button>
   </div>
   )
};