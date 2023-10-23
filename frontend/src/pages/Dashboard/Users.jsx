import { useContext, useEffect, useState } from "react"
import UserContext from "../../services/userContext"
import { getUsers } from "../../api/users"
import { format } from "date-fns"
import User from "../../components/User"

function Users() {
  const { token } = useContext(UserContext)
  const [user, setUser] = useState(null)
  const [formValue, setFormValue] = useState({})

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsers(token)
        setUser(users)
      } catch (error) {}
    }
    fetchData()
  }, [token])

  return (
    <div>
      {user?.length &&
        user.map((user) => (
          <User
            key={user._id}
            name={user.name || "none"}
            date={format(new Date(user.createdAt), "dd/MM/yyyy")}
          />
        ))}
    </div>
  )
}

export default Users
