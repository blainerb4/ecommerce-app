import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {connect} from 'react-redux'
//import { auth, createUserProfileDocument } from '../../firebase/firebase'
import {signUpStart} from '../../redux/user/user.action'
import './SignUp.scss';

//we will be verifying and authenticating new users
//we need to store what the user is typing into forminput
//state class
//class SignUp extends React.Component {
const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({ displayName: '', email: '', password: '',confirmPassword: '' });
//    constructor(){
 //       super();
 //       this.state = {
 //           displayName: '',
  //          email: '',
 //           password: '',
 //           confirmPassword: '',
 //       }
//    }
const {displayName, email, password, confirmPassword} = userCredentials;
//    handleSubmit = async event => {

    const handleSubmit = async event => {
        event.preventDefault();
//        const {signUpStart} = this.props
//const {displayName, email, password, confirmPassword} = this.state;

 //       const {displayName, email, password, confirmPassword} = userCredentials;

        if (password != confirmPassword) {
            alert("passwords don't match");
            return;
        }
        signUpStart({ displayName, email, password })
 //       try {
 //       const { user } = await auth.createUserWithEmailAndPassword(
 //           email, 
 //           password
//            );
//        await createUserProfileDocument(user, { displayName })
 //       this.setState({
  //          displayName: '',
  //          email: '',
 //           password: '',
  //          confirmPassword: '',
 //       })
//        } catch(error) {
 //           console.error(error);
 //       }
    };
//    handleChange = event => {

    const handleChange = event => {
        const { name, value } = event.target;
        //this.setState({ [name]: value })
        setUserCredentials({ ...userCredentials, [name]: value })
    }
//remove this from {this.handleSubmit} as they have their own function before they were their onw class methods
//    render(){
//        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value= {displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value= {email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value= {password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value= {confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
//}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)