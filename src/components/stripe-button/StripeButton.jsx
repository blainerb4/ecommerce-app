import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Hkl10LjXBZioDCPqGlqt42ciijxQZPBbXstoRCkqUeINs9WMOXhJ3gPoXyBs9UnVU2OWMwFOCyZaDq6dACSpEBa00njJcc6Wq'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
//triggers when we submit
    return (
        <StripeCheckout 
        label= 'Pay Now'
        name= 'Whatsup Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel= 'Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
//price has to be in cents 50= 5000