import IconArrowRightWrapper from "../IconArrowRightWrapper/IconArrowRightWrapper";


export default function Buttons({
    size,
    style,
    state,
    leftIcon,
    rightIcon,
    className,
    visible = true,
    text = "Subscribe",
    divClassName,
}) {
    return (
        <div
            className={`inline-flex h-[58px] items-center justify-center gap-2 px-8 py-[19px] relative bg-[#1c2f72] rounded-[50px] overflow-hidden ${className}`}
        >
            {visible && (
                <IconArrowRightWrapper
                    className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
                    icon="arrow-right-line"
                    iconArrowRight="https://c.animaapp.com/mf3repmz3M9ECb/img/frame.svg"
                />
            )}

            <div
                className={`relative w-fit mt-[-1.00px] font-dashboard-text-button font-[number:var(--dashboard-text-button-font-weight)] text-white text-[length:var(--dashboard-text-button-font-size)] tracking-[var(--dashboard-text-button-letter-spacing)] leading-[var(--dashboard-text-button-line-height)] whitespace-nowrap [font-style:var(--dashboard-text-button-font-style)] ${divClassName}`}
            >
                {text}
            </div>

            <IconArrowRightWrapper
                className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
                icon="arrow-right-line"
                iconArrowRight="https://c.animaapp.com/mf3repmz3M9ECb/img/frame.svg"
            />
        </div>
    );
};
