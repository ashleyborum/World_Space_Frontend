import './news.css'
const Feed = ({image, title, link, date, content}) => {
   
    let formatted = {day: "numeric", month: "long", year: "numeric"}
    let articleDate = new Date(date).toLocaleDateString("en-US", formatted)
    
    return (
        <>
            <a className="link" href ={link} target = "_blank" rel= "noopener noreferrer">
                <img className="image" src={image}></img>
                <span className="date">{articleDate}</span>
                <h2 className="title">{title} </h2>
                <p className="content" >{content}</p>   
            </a>

        </>
    )
}

export default Feed;