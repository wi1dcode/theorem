import { useContext, useEffect, useState } from "react"
import UserContext from "../../services/userContext"
import { getUsers } from "../../api/users"
import UserTable from "../../components/UserTable"

function Users() {
  const { token } = useContext(UserContext)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsers()
        setUser(users)
      } catch (error) {}
    }
    fetchData()
  }, [token])

  return (
    <div className="w-full">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-marron/30">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nom
              </th>
              <th scope="col" className="px-6 py-3">
                Ville
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Tel
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Forms
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user?.length &&
              user.map((user) => (
                <UserTable
                  key={user._id}
                  name={user.name || "Pas defini"}
                  city={user.city}
                  email={user.email}
                  tel={user.tel}
                  type={user.type}
                  forms={user.forms?.length}
                  status={user.status}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
