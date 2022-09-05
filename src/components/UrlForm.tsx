import React, { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import axios from "axios"

const UrlForm = () => {
  const [userInput, setUserInput] = useState<string>("")
  const [shortenedLink, setShortenedLink] = useState<string>(
    "Submit link and get it here!"
  )
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const SHORT_URL = "http://79.143.31.216/s/"

  const handleCopied = () => {
    console.log(shortenedLink)
    setIsCopied(true)
    setUserInput("")
    setTimeout(() => {
      setIsCopied(false)
    }, 1200)
  }

  console.log(userInput)

  const shortenUrl = async () => {
    const BASE_SQUEEZE_URL = "http://79.143.31.216/squeeze?link="
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_SQUEEZE_URL}`,
        params: {
          link: userInput,
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer 9s5-rsC-2jQYZixgDWCyMX7kzAK5w70KQlJR7Rot1wSZqY_hAqRJDdrMM238-6eVi8k",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      setShortenedLink(`${SHORT_URL + response.data.short}`)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h2 className="text-xl font-bold">URL Shortener</h2>
      <div className="flex gap-4 items-center justify-center">
        <input
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value)
          }}
          type="text"
          placeholder="Paste your link to shorten"
          className="border border-black p-2 rounded w-[30rem]"
        />
        <button
          onClick={shortenUrl}
          className="bg-blue-500 rounded text-white p-2 font-semibold border border-transparent hover:bg-blue-400"
        >
          Submit URL
        </button>
      </div>

      {/* SHORTENED LINK */}
      <div className="flex justify-center items-center mt-5 gap-4 font-semibold">
        <CopyToClipboard text={shortenedLink} onCopy={handleCopied}>
          <button
            className={
              isCopied
                ? "border-2 border-green-500 text-green-500 font-medium px-5 py-2 ml-4 rounded-md w-80 text-center"
                : "border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md  w-80 text-center"
            }
          >
            {isCopied ? "COPIED" : shortenedLink}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default UrlForm
