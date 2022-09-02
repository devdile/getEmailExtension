
export const SIGN_UP_USER = `mutation createSignUpModel(
    $firstname:String!,
    $lastname:String!,
    $emailaddress: String!, 
    $password:String!,
    $istermsandcondtionaccepted:Boolean!
) {
    CreateSignUpModelInput(input:{ firstname :$firstname  lastname: $lastname  emailaddress:$emailaddress password:$password istermsandcondtionaccepted:$istermsandcondtionaccepted})
        {
            id
     
        }
}`;

