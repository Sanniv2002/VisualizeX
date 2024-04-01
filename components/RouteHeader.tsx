import Link from 'next/link'

export default function Header(path: string){
    
    return <header className="bg-gray-900">
        <div className="flex justify-center sm:justify-between px-10 pt-3">
            <Link href="/">
                <div className="">
                    <h2 className="text-white text-2xl font-semibold cursor-pointer">VisualizeX <span className='cursor-default bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400'>{path}</span></h2>
                    <h2 className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-600">Explore Your Data's Journey</h2>
                </div>
            </Link>
            <nav>
            <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            </button>
            <ul className="hidden pt-2 text-white sm:flex gap-6" id="navbar-default">
                <li className="bg-white text-md bg-clip-text text-transparent cursor-pointer hover:bg-gradient-to-r from-red-500 to-indigo-600"> <Link href="/signin">Sign In</Link> </li>
                <li className="bg-white text-md bg-clip-text text-transparent cursor-pointer hover:bg-gradient-to-r from-red-500 to-indigo-600"> <Link href="/docs">Docs</Link> </li>
                <li className="bg-white text-md bg-clip-text text-transparent cursor-pointer hover:bg-gradient-to-r from-red-500 to-indigo-600">Github</li>
                <li className="bg-white text-md bg-clip-text text-transparent cursor-pointer hover:bg-gradient-to-r from-red-500 to-indigo-600"> <Link href="/about">About</Link> </li>
            </ul>
            </nav>    
        </div>
    </header>
}