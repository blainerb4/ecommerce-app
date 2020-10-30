import React from 'react';

import './sign-in-and-sign-up-page.scss';

import SignIn from '../../components/SignIn/SignIn';

import SignUp from '../../components/SIgnUp/SignUp';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage