import React, { FC, useEffect, useState } from "react"

import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri"

interface IFilterProps {
  linkList: any[]
  setCurrentPageLinks: any
}

const FIlter: FC<IFilterProps> = ({ linkList, setCurrentPageLinks }) => {
  const [isDescending, setIsDescending] = useState<boolean>(false)
  const [filterInput, setFilterInput] = useState<string>("")
  const [unfilteredList, setUnfilteredList] = useState<any[]>([])

  //   useEffect(() => {
  //     console.log("linkLIST", linkList)

  //     setUnfilteredList(linkList)
  //   }, [])

  const handleFilterByVisits = () => {
    const sorted = linkList.sort((a, b) => {
      if (isDescending) {
        setIsDescending(false)
        return a.counter - b.counter
      } else {
        setIsDescending(true)
        return b.counter - a.counter
      }
    })
    setCurrentPageLinks([...sorted])
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value)
    // if (filterInput !== "") {
    //   const filterdBySearch = linkList.filter((link) => {
    //     link.target.includes(filterInput)
    //   })
    //   setCurrentPageLinks(filterdBySearch)
    // } else {
    //   setCurrentPageLinks(unfilteredList)
    // }
  }

  console.log("unfiltered ", unfilteredList)

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        className="border-2 border-blue-500 px-4 py-2 rounded flex justify-center items-center  gap-2 font-medium"
        onClick={handleFilterByVisits}
      >
        Filter by visits
        {isDescending ? (
          <RiArrowDownSFill></RiArrowDownSFill>
        ) : (
          <RiArrowUpSFill></RiArrowUpSFill>
        )}
      </button>
      {/* <input
        type="text"
        onChange={handleSearchInput}
        value={filterInput}
        placeholder="Find a link"
        className="p-2 border-2 border-blue-500 rounded focus: outline-blue-500"
      /> */}
    </div>
  )
}

export default FIlter
