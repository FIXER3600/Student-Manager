import { ChakraProvider } from '@chakra-ui/react'
import { ConfigRoutes } from './router/routes';
function App() {


  return (
    <ChakraProvider>
     
      <ConfigRoutes/>
    </ChakraProvider>
  );
}

export default App;
