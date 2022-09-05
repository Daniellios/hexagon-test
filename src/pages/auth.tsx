import React, { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import Link from "next/link"

const Auth = () => {
  const [userLogin, setUserLogin] = useState<string>("")

  const [userPassword, setUserPassword] = useState<string>("")

  const [error, setError] = useState<boolean>(false)

  const router = useRouter()

  const hadleUserLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin(e.target.value)
  }

  const hadleUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value)
  }

  const handleSignUpInfo = async () => {
    const BASE_SIGNUP_URL = "http://79.143.31.216/register?"
    try {
      const response = await axios({
        method: "post",
        url: `${
          BASE_SIGNUP_URL +
          "username=" +
          userLogin +
          "&password=" +
          userPassword
        }`,
      })
      setUserLogin("")
      setUserPassword("")
    } catch (e) {
      console.log(e)
    }
  }

  const handleLoginInfo = async () => {
    const BASE_LOGIN_URL = "http://79.143.31.216/login"

    const response = await axios
      .post(
        BASE_LOGIN_URL,
        new URLSearchParams({
          grant_type: "",
          username: userLogin,
          password: userPassword,
          scope: "",
          client_id: "",
          client_secret: "",
        }),
        {
          headers: {
            accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res)
        console.log(res.data.access_token)
        console.log(res.data.token_type)

        // document.cookie = res.data.access_token
        return res
      })
      .catch((err) => {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 1500)
      })

    if (response) {
      setUserLogin("")
      setUserPassword("")
      router.push("/")
    }
  }

  return (
    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex flex-col border border-black rounded p-4 items-center justify-center gap-6">
        <div className="flex gap-4 items-center justify-center">
          <h1 className="text-3xl text-center font-bold">
            WELCOME!
            <br />
            LOG IN TO CONTINUE
          </h1>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {/* LOGIN */}
          <div className="flex flex-col gap-2 justify-center items-start w-full">
            <h2
              className={
                error
                  ? "text-red-500 font-semibold"
                  : "text-black font-semibold"
              }
            >
              Login
            </h2>
            <input
              value={userLogin}
              className={
                error
                  ? "p-2 w-full border border-red-500 rounded"
                  : "p-2 w-full border border-black rounded"
              }
              type="text"
              onChange={hadleUserLogin}
              placeholder="Enter Your Username"
            />
          </div>
          {/* PASSWORD */}
          <div className="flex flex-col gap-2 justify-center items-start w-full">
            <h2
              className={
                error
                  ? "text-red-500 font-semibold"
                  : "text-black font-semibold"
              }
            >
              Password
            </h2>
            <input
              className={
                error
                  ? "p-2 w-full border border-red-500 rounded"
                  : "p-2 w-full border border-black rounded"
              }
              value={userPassword}
              type="text"
              onChange={hadleUserPassword}
              placeholder="Enter Your Password"
            />
          </div>
        </div>

        {/* SIGN/LOG UP/IN  */}
        <button
          onClick={handleSignUpInfo}
          className="w-full rounded text-black p-2 font-semibold border border-black hover:scale-[0.99]"
        >
          SIGN UP
        </button>

        <button
          onClick={handleLoginInfo}
          className="bg-blue-500 w-full rounded text-white p-2 font-semibold border border-transparent hover:scale-[0.99]"
        >
          LOG IN
        </button>
      </div>
    </main>
  )
}

export default Auth
