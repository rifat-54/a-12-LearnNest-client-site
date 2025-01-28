import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useNavigate } from "react-router-dom";

import './checkout.css'
import UseAuth from "../../hook/UseAuth";
import toast from "react-hot-toast";

const CheckOutFrom = ({id,price,teacherEmail }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const{user}=UseAuth()

  useEffect(() => {
    paymentIntent();
  }, [id]);

  

  const paymentIntent = async () => {
    try {
      const { data } = await axiosSecure.post("/create-payment-intent", {id});
         
      setClientSecret(data?.clientSecret);
    } catch (error) {
      // console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    setProcessing(true);
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      setProcessing(true);
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setProcessing(true);
      return console.log("[error]", error);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
    }

    // confrim payment
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name:user?.displayName,
          email:user.email,
        },
      },
    });

    

    const purchaseInfo={
        email:user?.email,
        name:user?.displayName,
        courceId:id,
        teacherEmail:teacherEmail,
        tranjectionId:paymentIntent?.id,
        date:new Date()
    }

    if (paymentIntent.status === "succeeded") {
         try {
          const { data } = await axiosSecure.post("/orders", purchaseInfo);
          
          
            toast.success("Succesfully Purchase!");
            
            navigate('/dashboard/myEnroll-class')
          
        } catch (error) {
          // console.log(error);
        } finally {
         
          setProcessing(false)
        }
    }

   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex gap-3 justify-evenly">
          <button
          className="btn bg-[#6DC5D1] text-white"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            // label={`Pay ${purchaseInfo.price || 0}$`}
          >
            Pay ${price}
          </button>
          <button className="bg-red-400 btn text-white">Cencel</button>
        </div>
        
      </form>
    </div>
  );
};

export default CheckOutFrom;
