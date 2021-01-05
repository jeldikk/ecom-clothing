import React from 'react'

import {SpinnerOverlay, SpinnerContainer} from "./with-spinner.styles"

//Just like React component is a function or class that takes props as input and generates dynamic Jsx
// Similarly Higher order components are function that take a component and create a new component.

const WithSpinner = (WrappedComponent) => {

    return ({isLoading, ...otherProps}) => {

                return isLoading ? (
                    <SpinnerOverlay>
                        <SpinnerContainer />
                    </SpinnerOverlay>
                ) : (<WrappedComponent {...otherProps} />);
            }
}

export default WithSpinner
