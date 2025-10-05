import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";

export default function MyExpertise() {
    return (
        <section className="py-12 md:py-16 xl:py-20 2xl:py-24 bg-dark-8 overflow-hidden">
            <div className="container">
                {/* Section Heading */}
                <div className="text-center max-w-[720px] 2xl:max-w-[854px] mx-auto">
                    <h2 className="text-dark self-stretch font-normal text-2xl lg:text-3xl xl:text-4xl font-anton leading-[1.3]">
                        My Expertise Areas
                    </h2>
                </div>

                {/* Expertise card wrapper */}
                <div className="">
                    <ExpertiseCard />
                </div>
            </div>
        </section>
    );
}
