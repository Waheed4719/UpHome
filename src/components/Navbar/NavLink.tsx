import { NavLinkType } from '../../types'
import { Link } from 'react-router-dom'


type Props = {
    navLink: NavLinkType;
    active: boolean;
    onClick: (navlink: string) => void;
}

const NavLink = ({ navLink, active, onClick }: Props) => {
    const handleLinkSelect = () => {
        onClick(navLink.link)
    }
    return (
        <Link to={navLink.link} role="presentation" className={`${active && "rounded-[20px] bg-blue-500 text-white"} py-2 px-6 list-none cursor-pointer text-[14px]`} onClick={() => handleLinkSelect()}>{navLink.text}</Link>
    )
}

export default NavLink