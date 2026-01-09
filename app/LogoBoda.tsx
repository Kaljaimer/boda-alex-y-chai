export function LogoBoda() {
    return (
        <svg
            width="220"
            height="60"
            viewBox="0 0 220 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
        >
            {/* Media luna (símbolo árabe) */}
            <path
                d="M30 30a15 15 0 1 1 0-30"
                stroke="#C084FC"
                strokeWidth="4"
                fill="none"
            />
            {/* Estrella (símbolo español) */}
            <polygon
                points="50,10 53,20 63,20 55,26 58,36 50,30 42,36 45,26 37,20 47,20"
                fill="#F59E42"
                stroke="#F59E42"
                strokeWidth="1"
            />
            {/* Nombres */}
            <text
                x="75"
                y="35"
                fontFamily="serif"
                fontSize="32"
                fill="#B91C1C"
                fontWeight="bold"
            >
                Alex & Chai
            </text>
        </svg>
    )
}
