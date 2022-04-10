import * as React from "react"

const Flag = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={12} viewBox={'0 0 1200 800'} {...props}>
        <path fill="#005BBB" d="M0 0h1200v800H0z" />
        <path fill="#FFD500" d="M0 400h1200v400H0z" />
    </svg>
)

export default Flag