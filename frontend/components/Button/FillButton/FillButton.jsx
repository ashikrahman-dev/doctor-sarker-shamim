import Link from "next/link";

export default function FillButton({ text, link }) {
    return (
        <Link href={link || "/"} className="bg-light-accent rounded-full py-4 px-8 text-light-foreground font-semibold leading-[1.2] h-[58px] inline-flex gap-2 items-center group transition-colors duration-300 hover:bg-accent-bg">
            {text || "Button"}
            <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.976 9.16609L9.50601 4.69609L10.6845 3.51758L17.1663 9.99943L10.6845 16.4812L9.50601 15.3027L13.976 10.8328H3.83301V9.16609H13.976Z"
                    fill="#060C22"
                    className="transition-all duration-200 group-hover:fill-light-foreground"
                />
            </svg>
        </Link>
    );
}
