import Sidebar from "components/dashboard/Sidebar/Sidebar"
import React from "react"

type Props = { children: React.ReactElement | React.ReactElement[] }

const Dashboard = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-dashboard font-montserrat">
      <Sidebar />
      <div className="p-5">{children}</div>
    </div>
  )
}

export default Dashboard
