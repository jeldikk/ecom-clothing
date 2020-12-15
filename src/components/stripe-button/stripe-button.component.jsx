import React from 'react'
import StripeCheckOut from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {

    const priceInCents = price * 1000;
    const publishableKey = 'pk_test_51Hv30JJRhrT20vM5BQUWMbOloHA6Zhi1KN7nYyPZGS0NdeKSkgXeumz7LMXogkUxIvkSNkKnzbbcRaR8N4B3UHsy00JfQdlxNI'

    const onToken = (token) => {
        console.log(token);
        alert('Payment successful')
    }
    return (
        <StripeCheckOut 
            label="Pay Now"
            name="CRWN Clothing Co."
            description="Ecommerce clothing company for your dream"
            billingAddress
            shippingAddress
            image='https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/caution.svg'
            ComponentClass="div"
            description={`Your Total is $${price}`}
            amount={priceInCents}
            panelLabel="Pay Now panelLabel"
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton