export default function IconArrowRightWrapper({
    icon,
    className,
    iconArrowRight = "https://c.animaapp.com/mf3repmz3M9ECb/img/frame.svg",
}) {
    return (
        <img
            className={`absolute w-6 h-6 top-0 left-0 ${className}`}
            alt="Icon arrow right"
            src={iconArrowRight}
        />
    );
};
