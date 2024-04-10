import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

export default function Navbar() {

    const [hide, setHide] = useState<boolean>(false)

    return (
        <div className="font-bold flex justify-between items-center w-screen px-4 md:px-10 lg:px-20 pt-4 text-lg">
            <img src="/logo.png" alt="" className="h-10 w-28 md:h-16 md:w-48" />

            <div className="hidden lg:flex gap-10">
                <a href="#">Individuals</a>
                <a href="#">Teams</a>
                <a href="#">Enterprise</a>
                <a href="#">Product</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
            </div>

            {
                hide ?
                    <div className="flex lg:hidden gap-10 pl-7 lg:pl-0 flex-col absolute top-28 lg:static bg-white w-full shadow-md shadow-slate-200 lg:shadow-none pb-8 left-0 lg:flex-row">
                        <a href="#">Individuals</a>
                        <a href="#">Teams</a>
                        <a href="#">Enterprise</a>
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
                    </div>
                    : ""
            }
            <div className="flex gap-4 md:gap-8 items-center">
                <a href="#" className="hidden md:block">Log In </a>
                <button className="bg-blue-600 text-white text-sm font-semibold rounded-full px-3 md:px-5 py-2.5">Get Started</button>
                {
                    <div className="lg:hidden text-2xl p-1" onClick={() => setHide(!hide)}>
                        {
                            hide ? <GrClose /> : <FaBars />
                        }
                    </div>
                }
            </div>

        </div>
    )
}
