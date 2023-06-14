import { EmailAuthProvider } from 'firebase/auth'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; //install option 1


//an object of configuration values
const firebaseUIConfig = {
    //array of sign in options supported
    signInOptions: [
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
  ],
  signInFlow: 'popup', //don't redirect to authenticate
  credentialHelper: 'none', //don't show the email account chooser
  callbacks: { //"lifecycle" callbacks
    signInSuccessWithAuthResult: () => {
      return false; //don't redirect after authentication
    }
  }
}

function SignIn(props) {
    return (
      <div>
        <StyledFirebaseAuth className="sign-in" uiConfig={firebaseUIConfig} firebaseAuth={props.auth} />
        {props.user ? (
            <div className="container">
                <div className='row justify-content-center'>
                    <h1>
                        Welcome, {props.user.displayName}!
                    </h1>
                </div>
                <div className='row justify-content-center'>
                    <button className="sign-out-button" onClick={props.handleSignOut}>
                        Sign Out
                    </button>
                </div>
                
                
            </div>
        ) : (
            <StyledFirebaseAuth
            className="sign-in"
            uiConfig={firebaseUIConfig}
            firebaseAuth={props.auth}
            />
        )}
      </div>
    );
}


  export default SignIn;