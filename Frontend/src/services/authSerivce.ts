import axios from "axios"

export const registerCustomer = async (customer: {
  email: string
  password: string
}) => {
  return await axios.post(
    `${import.meta.env.VITE_BASE_URL}/auth/register`,
    JSON.stringify(customer),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}

export const loginCustomer = async (customer: {
  email: string
  password: string
}) => {
  return await axios.post(
    `${import.meta.env.VITE_BASE_URL}/auth/login`,
    JSON.stringify(customer),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}
