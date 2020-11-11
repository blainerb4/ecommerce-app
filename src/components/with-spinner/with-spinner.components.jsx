import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps}) =>{
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}
    return Spinner;
}
//isloading is a true false value that gets loaded by outside value
//we put spinner on shop page because then we know loading is done
export default WithSpinner