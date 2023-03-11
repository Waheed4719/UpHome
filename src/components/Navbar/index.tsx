import { useState } from "react"
import { useNavigate } from "react-router-dom"
import NavLink from "./NavLink"
import { NavLinkType } from '../../types'

const navLinks: NavLinkType[] = [
    {
        text: "Search",
        link: "/search"
    },
    {
        text: "About",
        link: "/about"
    },
    {
        text: "Help",
        link: "/help"
    },
    {
        text: "Blog",
        link: "/blog"
    }
]

const Navbar = () => {
    const navigate = useNavigate()
    const [activeLink, setActiveLink] = useState<string>("/search")
    const handleLinkSelect = (link: string) => {
        setActiveLink(link)
        navigate(`${link}`)
    }
    return <div className="flex items-center py-3 px-6 border-b">
        <a href="/" className="flex items-center mr-4 text-[24px] font-extrabold text-blue-700 w-[200px] text-left">uphome</a>
        <div className="hidden gap-1 md:flex">
            {navLinks?.map(navLink => <NavLink key={navLink.text} onClick={(link) => handleLinkSelect(link)} navLink={navLink} active={activeLink === navLink.link} />)}
        </div>
        <div />
    </div>
}

export default Navbar
