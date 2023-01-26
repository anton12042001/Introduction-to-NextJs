import Link from "next/link";
import  '../styles/link.module.sass'

interface LinkProps {
    text:string,
    href:string
}

export default function A ({text, href}:LinkProps) {
    return(
        <Link className="navbar__link" href={href} >
            {text}
        </Link>
    )
}
