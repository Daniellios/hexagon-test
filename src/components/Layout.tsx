import React from "react"
import Header from "./Header"
import UrlForm from "./UrlForm"

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  console.log("rendered")

  return (
    <main className="container w-full mx-auto flex flex-col gap-12 items-center justify-start min-h-screen  ">
      <Header></Header>
      <UrlForm></UrlForm>
      {children}
    </main>
  )
}

export default Layout
