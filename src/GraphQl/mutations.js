import {gql} from "@apollo/client"


export const SIGN_UP_USER = gql`
    mutation (
            $firstname:String!,
            $lastname:String,
            $emailaddress: String, 
            $password:String,
            $istermsandconditionaccept:Boolean)
            {
            signUp(
                firstname :$firstname
                lastname: $lastname
                emailaddress:$emailaddress
                password:$password
                istermsandconditionaccept:$istermsandconditionaccept
                ){
                    firstname
                }
    }
`

export const SIGN_IN_USER = gql`
    mutation (
            $emailaddress: String!, 
            $password:String!)
            {
               signInUser(
                emailaddress:$emailaddress
                password:$password
                 ){
                    emailaddress
                }
    }
`