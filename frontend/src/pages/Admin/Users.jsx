import { useContext, useEffect, useState } from "react"
import UserContext from "../../services/userContext"
import { deleteUser, getUsers, updateUser } from "../../api/users"
import UserTable from "../../components/UserTable"
import Swal from "sweetalert2"

function Users() {
  const { token } = useContext(UserContext)
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchUsers()
  }, [token, page])

  const fetchUsers = async () => {
    try {
      const { users, totalPages } = await getUsers(page, searchTerm)
      setUsers(users)
      setTotalPages(totalPages)
    } catch (error) {
      console.error("Failed to fetch users:", error)
    }
  }

  const handleSearch = () => {
    setPage(1)
    fetchUsers()
  }

  const handleUserEdit = async (userData) => {
    const { value: formValues } = await Swal.fire({
      title: "Modifier l'utilisateur",
      html: `
        <div class="swal2-input-container flex flex-col">
          <label class="font-semibold">Nom</label>
          <input id="swal-input-name" class="swal2-input" placeholder="Nom" value="${
            userData.name
          }">
  
          <label class="font-semibold">Ville</label>
          <input id="swal-input-city" class="swal2-input" placeholder="Ville" value="${
            userData.city
          }">
  
          <label class="font-semibold">Email</label>
          <input id="swal-input-email" class="swal2-input" placeholder="Email" value="${
            userData.email
          }" readonly>
  
          <label class="font-semibold">Téléphone</label>
          <input id="swal-input-tel" class="swal2-input" placeholder="Téléphone" value="${
            userData.tel
          }">
  
          <label class="font-semibold">Type</label>
          <input id="swal-input-type" class="swal2-input" placeholder="Type" value="${
            userData.type
          }">
  
          <label class="font-semibold">Statut</label>
          <select id="swal-input-status" class="swal2-input">
            <option value="true" ${
              userData.isActivated ? "selected" : ""
            }>Confirmé</option>
            <option value="false" ${
              !userData.isActivated ? "selected" : ""
            }>En attente</option>
          </select>
  
          <label class="font-semibold">Rôle</label>
          <select id="swal-input-role" class="swal2-input">
            <option value="USER" ${
              userData.roles?.includes("USER") ? "selected" : ""
            }>USER</option>
            <option value="ADMIN" ${
              userData.roles?.includes("ADMIN") ? "selected" : ""
            }>ADMIN</option>
          </select>
  
          <button id="swal-input-reset-password" class="swal2-confirm mt-3">
            Réinitialiser le mot de passe
          </button>
        </div>`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonColor: "#C8B790",
      cancelButtonColor: "#D76C66",
      confirmButtonText: "Changer",
      cancelButtonText: "Annuler",
      preConfirm: () => {
        return {
          name: document.getElementById("swal-input-name").value,
          city: document.getElementById("swal-input-city").value,
          tel: document.getElementById("swal-input-tel").value,
          type: document.getElementById("swal-input-type").value,
          isActivated:
            document.getElementById("swal-input-status").value === "true",
          role: document.getElementById("swal-input-role").value,
        }
      },
    })

    if (formValues) {
      const updatedData = {
        name: formValues.name,
        city: formValues.city,
        tel: formValues.tel,
        type: formValues.type,
        isActivated: formValues.isActivated,
        roles: [formValues.role],
      }

      try {
        const response = await updateUser(userData._id, updatedData)
        console.log(response)

        setUsers((prevUsers) => {
          return prevUsers.map((users) => {
            if (users._id === userData._id) {
              return { ...users, ...updatedData }
            }
            return users
          })
        })

        Swal.fire(
          "Modifié!",
          "Les données de l'utilisateur ont été mises à jour.",
          "success"
        )
      } catch (error) {
        console.error("Error updating user:", error)
      }
    }
  }

  const handleUserDelete = async (email) => {
    const result = await Swal.fire({
      title: "Êtes-vous sûr(e) ?",
      text: "Vous ne pourrez pas annuler cette action !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#C8B790",
      cancelButtonColor: "#D76C66",
      confirmButtonText: "Supprimer",
      cancelButtonText: "Annuler",
    })

    if (result.isConfirmed) {
      console.log("Suppression de l'utilisateur avec l'email :", email)
      await deleteUser(email)
      Swal.fire({
        title: "Supprimé !",
        text: "L'utilisateur a été supprimé.",
        icon: "success",
      })
    }
  }

  const getPageButtons = () => {
    let buttons = []
    let startPage = Math.max(page - 2, 1)
    let endPage = Math.min(page + 2, totalPages)

    if (page > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => setPage(page - 1)}
          className="bg-marron rounded-lg px-4 py-2 text-white font-semibold"
        >
          Prev
        </button>
      )
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`bg-marron rounded-lg px-4 py-2 text-white font-semibold ${
            i === page ? "bg-marron/50" : ""
          }`}
        >
          {i}
        </button>
      )
    }

    if (page < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => setPage(page + 1)}
          className="bg-marron rounded-lg px-4 py-2 text-white font-semibold"
        >
          Next
        </button>
      )
    }

    return buttons
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center gap-2 mb-4 max-md:justify-center max-md:mt-4">
        <input
          type="text"
          placeholder="Recherche..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-marron rounded-lg px-4 py-2 text-white font-semibold"
        >
          Chercher
        </button>
      </div>
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
                Projets
              </th>
              <th scope="col" className="px-6 py-3 w-24 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.length &&
              users.map((user) => (
                <UserTable
                  key={user._id}
                  name={user.name || "Pas defini"}
                  city={user.city}
                  email={user.email}
                  tel={user.tel}
                  type={user.type}
                  forms={user.forms?.length}
                  status={user.isActivated}
                  username={user.username}
                  modifyButton={() => handleUserEdit(user)}
                  deleteButton={() => handleUserDelete(user.email)}
                />
              ))}
          </tbody>
        </table>
      </div>
      <div className="my-4 flex gap-x-2 justify-end">{getPageButtons()}</div>
    </div>
  )
}

export default Users
