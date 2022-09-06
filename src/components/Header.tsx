import { useRouter } from "next/router"
import React from "react"
import { useAuth } from "../hooks/useAuth"

const Header = () => {
  const router = useRouter()
  const {
    setToken,
    sessionUserName,
    setSessionUserName,
    setSessionUserPassword,
  } = useAuth()

  const handleSignOut = () => {
    setToken("")
    setSessionUserName("")
    setSessionUserPassword("")
    router.push("/auth")
  }

  return (
    <div className="flex w-full justify-end items-center border-b  border-black py-2 px-8 mb-12 gap-8 absolute left-0">
      <div className="flex justify-center items-center gap-4 ">
        <h2 className="font-semibold">{sessionUserName}</h2>
        <button
          className="text-white font-semibold rounded hover:bg-blue-400 bg-blue-500 p-2"
          onClick={handleSignOut}
        >
          SIGN OUT
        </button>
      </div>
    </div>
  )
}

export default Header
