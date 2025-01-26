import React from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpiner from "../../components/ShareComponets/LoadingSpiner";
import UseAuth from "../../hook/UseAuth";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const Payment = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { user } = UseAuth();

  const {
    data: cls = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/class/${id}`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpiner></LoadingSpiner>;
  }

  console.log(cls);

  const { name, title, photo, price, description, email, enroll, _id } =
    cls || {};

  return (
    <div className="card mt-14 mx-auto bg-base-100 max-w-xl shadow-xl">
      <div className="card-body">
        <div>
          <p>
            {" "}
            Name: <span className="font-semibold">{user?.displayName}</span>
          </p>
          <p className="mt-1 mb-2">
            {" "}
            Email: <span className="font-semibold">{user?.email}</span>
          </p>
          <p>
            {" "}
            Price: <span className="font-bold">${price}</span>
          </p>
        </div>
        <div className="divider"></div>

        <Elements stripe={stripePromise}>
          <CheckOutFrom price={price} teacherEmail={email} id={_id}></CheckOutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
