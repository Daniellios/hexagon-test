import axios from "axios"
import React, { useEffect, useState } from "react"

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"

const Statistics = () => {
  const [pageLimit, setPageLimit] = useState<number>(20)
  const [pageOffset, setPageOffset] = useState<number>(0)
  const [linkList, setLinkList] = useState([])
  const SHORT_URL = "http://79.143.31.216/s/"

  const fetchData = async () => {
    const BASE_STATS_URL = `http://79.143.31.216/statistics?offset=${pageOffset}&limit=${pageLimit}`

    const response = await axios({
      method: "get",
      url: BASE_STATS_URL,
      params: {
        username: "login",
        password: "password",
      },
      headers: {
        Authorization:
          "Bearer 9s5-rsC-2jQYZixgDWCyMX7kzAK5w70KQlJR7Rot1wSZqY_hAqRJDdrMM238-6eVi8k",
      },
    })
      .then((res) => {
        console.log(res.data)
        setLinkList(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    fetchData()
  }, [pageOffset])

  const handleNextPage = () => {
    setPageOffset(pageOffset + 20)
  }

  const hanldePreviousPage = () => {
    setPageOffset(pageOffset - 20)
  }

  return (
    <>
      {/* PAGINATION */}
      <div className="w-full flex ">
        <button
          onClick={hanldePreviousPage}
          className="hover:text-blue-500 p-2 flex justify-center items-center"
        >
          <AiOutlineLeft></AiOutlineLeft>
        </button>
        <button className="border hover:bg-blue-500 hover:text-white px-4 py-2">
          1
        </button>
        <button
          onClick={handleNextPage}
          className="hover:text-blue-500 p-2 flex justify-center items-center"
        >
          <AiOutlineRight></AiOutlineRight>
        </button>
      </div>

      <div className="flex flex-col border  border-black py-2  gap-4 mb-10 ">
        <div className="grid grid-cols-4  border-b border-black px-4 py-2">
          <h1 className="font-bold">SHORT URL</h1>
          <h1 className="font-bold">ORIGINAL URL </h1>
          <h1 className="font-bold"> VISITS</h1>
        </div>

        {/* TABLE CONTENTS */}
        {linkList &&
          linkList.map((link: any) => (
            <div
              key={link.id}
              className="w-full grid grid-cols-4 justify-center items-center gap-10 border-b border-black/30 px-4 py-2 last:border-b-0 "
            >
              <h3>
                <a
                  className="hover:text-blue-500 font-medium"
                  href={link.target}
                >
                  {SHORT_URL + link.short}
                </a>
              </h3>
              <h3 className="overflow-x-hidden">
                <a
                  className="hover:text-blue-500 font-medium"
                  href={link.target}
                >
                  {link.target}
                </a>
              </h3>
              <h3>{link.counter}</h3>
            </div>
          ))}
      </div>
    </>
  )
}

export default Statistics
