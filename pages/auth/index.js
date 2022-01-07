import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import clientApp from '../../firebase/clientApp';

// Configure firebaseUI
const uiConfig = {
    // Redirect to / after sign in si successful.
    signInSuccessUrl: '/',
    // We will display GitHub as auth providers.
    signInOptions: [clientApp.auth.GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
    return (
        <div
            style = {{
                maxWidth: '320px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <h1>Cookbook Login</h1>
            <p>Please sign-in</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={clientApp.auth()} />
        </div>
    )
}

export default SignInScreen;