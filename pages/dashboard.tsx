import { error } from "console";
import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { api } from "../services/api";

export default function dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/me')
      .then((response) => console.log(response))
      .catch(() => console.log(error))
  },[])

  return (
    <h1>Bem-vindo: {user?.email}</h1>
  )
}