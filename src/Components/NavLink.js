
const NavLink = ({id,section,target}) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={id} target={target}>
                {section}
            </a>
        </li>
    )
}

export default NavLink
