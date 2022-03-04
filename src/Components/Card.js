
const Card = ({icon,title,description,link,languages}) => {
    return (
        <a href={link} target={"_blank"} className="card font1">
            <div className ="icon">
                {icon}
            </div>
            <h2 className = "font1">{title}</h2>
            <div className="description">
                <p className="content font2">{description}</p>
            </div>
            <div className="languages font1">{languages}</div>
        </a>
    )
}

export default Card
