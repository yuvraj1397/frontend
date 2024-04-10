

export default function HeroSection() {
    return (
        <div className="text-center flex flex-col gap-10 py-24 items-center justify-center px-2">
            <p className="text-blue-500">ROUTING FORMS</p>
            <p className="font-extrabold text-3xl md:text-5xl lg:text-6xl">Make higher quality connections</p>
            <p className="md:text-lg text-stone-500 font-normal">Request information from website visitors or invitees and-based on their responses-route them to the right person or resourse.
                <br />
                <span className="italic">Available on Professional Plans and Up</span>
            </p>
            <div className="flex gap-5 items-center justify-center">
                <button className="bg-blue-600 text-white font-semibold rounded-full px-5 py-2.5">Start for Free</button>
                <button className="font-semibold rounded-full px-5 py-2.5 border-2 border-slate-900 bg-transparent">Talk with Sales</button>
            </div>
        </div>
    )
}
