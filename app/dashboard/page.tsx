'use client'

import Header from "@/components/RouteHeader"
import Projects from "@/components/Projects"
import { useSession } from "next-auth/react"

export default async function Page(){
    const { data: session } = useSession()
    return <div className="bg-gray-900 h-screen overflow-y-auto">
        {Header("/ dashboard", session)}
        <div className="px-40 py-20">
            <Projects />
        </div>
    </div>
}