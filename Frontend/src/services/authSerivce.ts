import axios from "axios";

export const saveCustomer = async (customer: {email: string, password: string}) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/customer`,
    JSON.stringify(customer),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
