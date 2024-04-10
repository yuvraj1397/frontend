
export default function Feedback() {
    return (
        <div className="flex gap-5 md:gap-20 py-10 bg-slate-50 items-center px-5 md:px-48 pb-20 flex-col lg:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src="/man.png" alt="" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-5">
                <p className="text-xl md:text-2xl font-bold leading-snug">"Before adding Calendly Routing Forms, 60% of people who started to book a meeting on our website did not complete the booking. Now, we're automatically sending demos to specific reps based on company size, which has created better experiences for both our customers and employees. We're winning more business with less work."</p>
                <div className="mt-2">
                    <p className="text-lg">Vice President of Marketing, Text Request</p>
                    <p className="text-lg font-semibold">Kenneth Burke</p>
                </div>
            </div>
        </div>
    )
}
