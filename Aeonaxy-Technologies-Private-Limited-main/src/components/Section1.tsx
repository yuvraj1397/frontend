

export default function Section1() {
    return (
        <div className="flex gap-10 md:gap-20 items-center px-5 md:px-20 lg:px-48 pb-20 mt-10 flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col gap-5">
                <p className="text-blue-600 font-semibold">BETTER CONVERSIONS</p>
                <p className="text-3xl md:text-4xl font-bold leading-snug">Screen and Qualify websites
                    visitors or invitees.</p>
                <p className="text-lg">Prioritize scheduling  with high-value leads based on industry, company size, and other requirement. Send people who are&apos;t a fit to a referral page or other resources.</p>
            </div>
            <div className="w-full md:w-1/2">
                <img src="/asset1.png" alt="" />
            </div>
        </div>
    )
}
