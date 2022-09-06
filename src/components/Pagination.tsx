import React, { useEffect, useState } from "react"
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"
const Pagination = ({
  linksPerPage,
  totalLinks,
  selectPage,
  activePage,
}: any) => {
  const [currentPageNums, setCurrentPageNums] = useState<number[]>()
  const [pageNumberShown, setPageNumbersShown] = useState<number>(0)

  const countPages = () => {
    const pageNumbers = []
    for (let i = 1; i < Math.ceil(totalLinks / linksPerPage); i++) {
      pageNumbers.push(i)
    }
    setCurrentPageNums(pageNumbers)
  }

  useEffect(() => {
    countPages()
  }, [totalLinks])

  const handleSelectedPage = (pgNum: number) => {
    selectPage(pgNum)
  }

  const handleNextPage = () => {
    if (currentPageNums && activePage < currentPageNums.length) {
      selectPage(activePage + 1)
    }
    return
  }
  const handlePreviousPage = () => {
    if (activePage > 1) {
      selectPage(activePage - 1)
    }
    return
  }

  if (totalLinks.length < 21) {
    return <></>
  } else {
    return (
      <div className="pb-10 w-1/2  flex justify-center items-center gap-4">
        <button className="incative-page" onClick={handlePreviousPage}>
          <AiOutlineLeft></AiOutlineLeft>
        </button>
        <ul className="flex gap-4 overflow-x-auto">
          {currentPageNums &&
            currentPageNums.map((pgNum: number) => (
              <li
                onClick={() => handleSelectedPage(pgNum)}
                className={
                  activePage === pgNum ? "active-page" : "incative-page"
                }
                key={pgNum}
              >
                {pgNum}
              </li>
            ))}
        </ul>
        <button className="incative-page" onClick={handleNextPage}>
          <AiOutlineRight></AiOutlineRight>
        </button>
      </div>
    )
  }
}

export default Pagination
