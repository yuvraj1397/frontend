

export default function Section2() {
    return (
        <div className="flex gap-10 md:gap-20 items-center px-5 md:px-20 lg:px-48 pb-20 flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2">
                <img src="/asset2.png" alt="" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-5">
                <p className="text-blue-600 font-semibold">AUTOMATED EXPERIENCE</p>
                <p className="text-3xl md:text-4xl font-bold leading-snug">Schedule effeciently and save everyone time</p>
                <p className="text-lg">The faster you connect clients, students, or customers the right people and resources, the more time everyone gets back.</p>
            </div>
        </div>
    )
}
