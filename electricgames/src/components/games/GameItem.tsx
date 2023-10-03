import IGames from "../../interfaces/IGames";

const GameItem = ({id, title, image, description, platform, releaseYear} : IGames) => {

    const imgstyle = {
        height: '17rem'
    }

    return(
        <article className="col-xg-3 col-lg-4 col-sm-12">
                <div className="p-3 bg-dark text-white text-center rounded">
                    <h3>{title} ({id})</h3>
                    <img className="img-thumbnail" style={imgstyle} src={`https://localhost:7063/images/${image}`}/>
                    <p>{description}</p>
                    <p>{platform}</p>
                    <p>{releaseYear}</p>
            </div>
        </article>
    )

}

export default GameItem;    