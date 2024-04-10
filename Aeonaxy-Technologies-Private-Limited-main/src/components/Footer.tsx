import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
 
export default function Footer() {
    return (
        <div className="py-20 px-10 bg-white items-center">

            <div className="flex gap-10 md:gap-28 flex-col md:flex-row">
                <div className="">
                    <div className="">
                        <p className="font-extrabold text-4xl">Easy <span className="text-blue-600">ahead</span></p>
                        <p className="text-lg mt-10">We take the work out of connecting with others so you can accomplish more.</p>
                        <select name="" id="" className="mt-10 border border-slate-800 rounded-md py-2.5 bg-transparent px-3 w-64 md:w-80">
                            <option value="english">English</option>
                        </select>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <p className="text-xl mt-4 font-semibold">Download here</p>
                        <div className="flex gap-3 md:gap-5 mt-4 flex-wrap">
                            <img className="h-14 w-44" src="/google-play-store.png" alt="" />
                            <img className="h-14 w-44" src="/app-store.png" alt="" />
                        </div>
                        <div className="flex gap-8 items-center text-2xl mt-10">
                            <a href=""><BsTwitterX /></a>
                            <a href=""><BsFacebook /></a>
                            <a href=""><BsInstagram /></a>
                            <a href=""><BsLinkedin /></a>
                            <a href=""><BsYoutube /></a>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />

            <div className="grid md:grid-cols-3 gap-10 lg:grid-cols-6">
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-xl">About</p>
                    <p className="text-lg">About Calendly</p>
                    <p className="text-lg">Contact Sales</p>
                    <p className="text-lg">NewsRoom</p>
                    <p className="text-lg">Career</p>
                    <p className="text-lg">Security</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-xl">Solutions</p>
                    <p className="text-lg">Costumer Success</p>
                    <p className="text-lg">Sales</p>
                    <p className="text-lg">Recruiting</p>
                    <p className="text-lg">Information Technology</p>
                    <p className="text-lg">Marketing</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-xl">Popular Features</p>
                    <p className="text-lg">Embed Calendly</p>
                    <p className="text-lg">Availability</p>
                    <p className="text-lg">Sending Notification</p>
                    <p className="text-lg">Using Calendly Mobile</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-xl">Support</p>
                    <p className="text-lg">Help Center</p>
                    <p className="text-lg">Video Tutorials</p>
                    <p className="text-lg">Cookies Setting</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-xl">Add-Ons</p>
                    <p className="text-lg">Download for Chrome</p>
                    <p className="text-lg">Download for Firefox</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-xl">Developers</p>
                    <p className="text-lg">Developers Tools</p>
                </div>
            </div>


            <div className="mt-10 text-stone-500 flex justify-between gap-3 flex-col md:flex-row">
                <p className="">Copyright Calendly 2022</p>
                <p className="">Privacy / Terms and Conditions</p>
            </div>
        </div>
    )
}
