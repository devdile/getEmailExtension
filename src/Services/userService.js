import axios from "axios";
import {getUser} from '../Endpoints/constraints';
import { GraphQLClient, gql } from "graphql-request";


const graphQLClient = new GraphQLClient(getUser, {
  // headers: {
  //   Authorization: `Bearer ${process.env.API_KEY}`
  // }
});

export const  getGitHubUserWithFetch = async (id) => {
  debugger;
  const data = await axios.get(getUser, {
    query: `
      user(id: $id){
        last_logged_in
        firstname
        lastname
        emailaddress
        joined
        password
      }
    `,
    variables: {
      id: 4
     
    }
  }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log("axios response",data);
    debugger;
 // setUserData(response.data);
};
