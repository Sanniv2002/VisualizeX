import { useState } from 'react'
import NewProject from "./NewProject"
import Link from "next/link"

export type projectProps = {
    name: string,
    CreatedAt: string
    description: string
}

export const MAX_PROJECTS = 0;

export default function Projects(){
    const [projects, setProjects] = useState<projectProps[]>([])
    const [newProject, setNewProject] = useState<projectProps>({name:"", description: "", CreatedAt:""})
    const [float, setFloat] = useState(false)

    const allProjects  = (projects: projectProps[]) => {
        return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6'>
            {projects.map((p) => { return <>
            <Link href={`/workspace/${p.name}`}>
                <div className="flex justify-center items-end bg-gradient-to-tr from-pink-400 to-cyan-400 rounded-md h-36 w-60 cursor-pointer opacity-75 hover:opacity-100 transition-opacity duration-300">
                    <div className='flex justify-between w-full px-3 pb-1'>
                        <h2 className='text-xs text-white'>{p.name}</h2>
                        <h2 className='text-xs text-white'>Created at: {p.CreatedAt.slice(4, 10)}</h2>
                    </div>
                </div>
            </Link>
            </>
            })}
            {projects.length <= MAX_PROJECTS ? <div onClick={() => setFloat(true)} className="flex justify-center items-center bg-gray-600 rounded-md h-36 w-60 cursor-pointer hover:bg-gray-700 transition-colors duration-300">
                <p className="text-center text-white text-3xl">+</p>
            </div>: null}
            
        </div>
    }

    return <div className="bg-gray-900">
        <div className='mb-6'>
            <h2 className="text-white text-lg border-b-fuchsia-400 border-b-2 pb-4 font-bold">My Workspaces</h2>
        </div>
        {allProjects(projects)}
        {float?<div className='fixed inset-0 bg-gray-700 h-screen flex items-center justify-center bg-opacity-45 backdrop-blur-sm'>
            {/* Lots of prop drilling */}
            <NewProject newProject={newProject} setProps={setNewProject} setFloat={setFloat} float={float} Projects={projects} setProjects={setProjects}/>
        </div>
        :
        null}     
    </div>
}