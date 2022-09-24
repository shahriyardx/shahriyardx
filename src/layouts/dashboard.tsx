import DashLoading from "components/dashboard/shared/DashLoading"
import Sidebar from "components/dashboard/Sidebar/Sidebar"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import React from "react"

type Props = {
  children: React.ReactElement | React.ReactElement[]
}

const Dashboard = ({ children }: Props) => {
  const router = useRouter()
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <DashLoading />
  }

  if (status !== "authenticated" || session.admin) {
    router.push("/")
  }

  return (
    <div className="grid grid-cols-dashboard font-montserrat">
      <Sidebar />
      <div className="p-5 max-h-screen overflow-y-auto scrollbar">
        {children}
      </div>
    </div>
  )
}

export default Dashboard
