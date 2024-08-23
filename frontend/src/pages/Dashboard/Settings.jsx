import { useContext, useState } from "react"
import { changePassword } from "../../api/session"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import UserContext from "../../services/userContext"

function Settings() {
  const navigate = useNavigate()
  const { setConnected } = useContext(UserContext)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage("")

    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas.")
      return
    }

    if (newPassword.length < 5 || newPassword.length > 16) {
      setErrorMessage(
        "Le mot de passe doit comporter entre 5 et 16 caractères."
      )
      return
    }

    try {
      await changePassword(oldPassword, newPassword)
      Swal.fire(
        "Succès",
        "Le mot de passe a été modifié avec succès",
        "success"
      ).then(() => {
        localStorage.removeItem("token")
        setConnected(false)
        navigate("/login")
      })
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Erreur lors du changement de mot de passe"
      )
    }
  }

  return (
    <div className="w-full">
      <form
        className="w-full flex flex-col items-center mt-4"
        onSubmit={handleSubmit}
      >
        {errorMessage && (
          <div className="text-red-500 mt-2">{errorMessage}</div>
        )}
        <div className="relative flex items-center mt-4 mb-4">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            maxLength="16"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
            placeholder="Votre mot de passe"
            onChange={(e) => setOldPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={newPassword}
            maxLength="16"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
            placeholder="Nouveau mot de passe"
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={confirmNewPassword}
            maxLength="16"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
            placeholder="Confirmation"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500 mt-2"
        >
          {showPassword ? "Cacher le mot de passe" : "Afficher le mot de passe"}
        </button>
        <button
          type="submit"
          className="tracking-wide mt-4 rounded-lg bg-vert_principal px-4 py-2 text-center text-base font-semibold text-white shadow-md transition ease-in hover:bg-vert_principal"
        >
          <span className="w-full"> Changer mot de passe </span>
        </button>
      </form>
    </div>
  )
}

export default Settings
