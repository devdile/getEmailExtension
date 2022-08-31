import {gql} from "@apollo/client"

export const LOAD_USER=(id)=>gql`
query
{
user(id:${id}) {
last_logged_in
firstname
lastname
emailaddress
joined
password
 }
}
`

export const LOGIN_USER=(emailaddress,password)=>gql`
query{
    loginUser(emailaddress:${emailaddress},password:${password}){
      firstname
      emailaddress
      password
    }
  }
`