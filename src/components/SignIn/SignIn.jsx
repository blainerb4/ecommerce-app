import React from 'react';
import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase'
//class component - we have to store what the user types in

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword (email, password);
            this.setState({email:'', password: ''})
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
// on change value points to handlechange function
//pulls the value and name off event.target
//event.target is the input element itself
// we want the name value and the value of the target the user types in
//this,setstate dynamically sets our state 
//so it sets that name and renders the value the user types in
    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name ='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label='email'
                    required />
                    <FormInput
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='password'
                    required 
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        SIGN IN WITH GOOGLE 
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
//we have children so we could replace the value='submit form'
// our onsubmit function calls our method handlesubmit
// handlesubmit prevents the default submit action from firing
//want full control over what the submit is gonna do
//use input to do html form submission it can work if we switch to a button
// button and input can both take property of type submit
//they can both submit the form they are in
//they can both trigger when clicked if they have the type submit
//the onsubmit method into our form

export default SignIn