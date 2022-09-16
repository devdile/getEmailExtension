import './App.css';
import AppRouting from './routing';
import AutoLogout from './Account/AutoLogout';
import "./Assets/css/customStyle.css";
import { Amplify, Analytics, Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import { useEffect } from "react";

Amplify.configure(awsconfig);

function App() {
  useEffect(()=>{
    currentUser();
  },[])

  const currentUser = async () => {
   
    const user = await Auth.currentAuthenticatedUser();
    if (user) {
      Analytics.record({
        name: "getemailapp",
        attributes: {
          username: user.email
        }
      });
    }
  }

  return (
    <div className="App">
      <AppRouting />
      <AutoLogout />
    </div>
  );
}

export default App;
