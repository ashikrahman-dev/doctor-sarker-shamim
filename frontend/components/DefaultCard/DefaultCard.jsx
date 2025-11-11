import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DefaultCard({ article, index }) {
    return (
        <motion.div
            key={article?.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 0.25],
            }}
            className="flex flex-col col-span-1 bg-white rounded-xl border border-dark-5/30 p-1 transform-fill duration-300 shadow-[0px_24px_48px_0px_rgba(12,14,58,0.0)] hover:shadow-[0px_24px_48px_0px_rgba(12,14,58,0.15)]"
        >
            <div className="relative">
                <Image
                    src={article?.img}
                    alt="Featured image"
                    width={340}
                    height={250}
                    className="w-full rounded-xl"
                />

                {/* Category Name */}
                <span className="absolute top-4 left-4 text-xs bg-white rounded-full px-3 py-1.5 text-light-foreground uppercase">
                    {article?.category}
                </span>
            </div>

            {/* Content */}
            <div className="pt-5 px-4 pb-6">
                {/* Date */}
                <span className="inline-flex items-center gap-2 text-sm font-normal text-light-secondary mb-3">
                    <Image
                        src="/images/calendar-icon.svg"
                        alt="Calendar"
                        width={20}
                        height={20}
                    />
                    {article?.date}
                </span>

                {/* Title */}
                <Link href={`/news/${article?.id}`}>
                    <h3 className="text-lg font-anton font-normal leading-[1.3] mb-3 min-h-auto md:min-h-12">
                        {article?.title}
                    </h3>
                </Link>
                {/* Excerpt */}
                <p className="text-sm text-light-foreground/60 font-normal font-plus-jakarta-sans line-clamp-3 min-h-10">
                    {/* {article?.excerpt} */}
                </p>
                {/* Divider */}
                <div className="border-t border-dark-2/20 mt-4 mb-3"></div>

                {/* Author box */}
                <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <Image
                            src={article?.authorImg}
                            alt="Author"
                            width={30}
                            height={30}
                            className="w-9 h-9 rounded-full"
                        />
                        <div className="flex flex-col">
                            <span className="text-sm font-bold font-plus-jakarta-sans text-light-foreground">
                                {article?.designation}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
