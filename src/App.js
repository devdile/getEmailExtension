import logo from './logo.svg';
import './App.css';
import AppRouting from './routing';
import "./Assets/css/customStyle.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from "@apollo/client";
import {onError} from "@apollo/client/link/error"
import SignIn from './Account/SignIn';
import { BrowserRouter } from 'react-router-dom';

var baseUrl=process.env.REACT_APP_DOMAIN;
const errorLink=onError(({graphqlError,networkError})=>{
if(graphqlError){
  graphqlError.map(({message,location,path})=>{
 alert(`Graphql error ${message}`)
  });
}
});
const link=from([
errorLink,
new HttpLink({uri:`${baseUrl}`}),
]);


const client=new ApolloClient({
  link:link,
  cache:new InMemoryCache(),

});


function App() {
  return (
    <div className="wrapper">
      
      <ApolloProvider client={client}>
      <AppRouting/>
      </ApolloProvider>
     

    </div>
  );
}

export default App;
