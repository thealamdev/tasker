import { useState } from "react";

export default function OldSearch({
    setTasks
}: {
    setTasks: (tasks: any) => void
}) {
    const [search, setSearch] = useState<string>('');
    const handleSearch = () => {
        setTasks((prev: any) => (
            prev.filter((item: any) => (
                item.title.toLowerCase().includes(search.toLowerCase())
            ))
        ))
    }
    return (
        <div className="p-2 flex justify-end">
            <form>
                <div className="flex">
                    <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                        <input type="search"
                            onChange={(e: any) => setSearch(e.target.value)}
                            value={search}
                            className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none" placeholder="Search Task"
                            required />
                        <button
                            type="button"
                            onClick={() => handleSearch()}
                            className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4">
                            <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 16 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
