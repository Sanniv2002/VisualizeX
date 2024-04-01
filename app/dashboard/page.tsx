'use client'

import Header from "@/components/RouteHeader"
import Projects from "@/components/Projects"

export default function Page(){
    return <div className="bg-gray-900 h-screen overflow-y-auto">
        {Header("/ Try it")}
        <div className="px-40 py-20">
            <Projects />
        </div>
    </div>
}