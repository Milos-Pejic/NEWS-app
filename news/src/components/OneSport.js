import StyledOne from "./StyledOne"

const OneSport = (props) => {
    console.log(props)
    const articleItem = props.location.article
    console.log(articleItem, 'Pejic')
    return (
        <>
        <StyledOne>
            <div className="container">
                <div className="singleItem">
                    <p className="single-item-source">{articleItem?.source.name}</p>
                    <h1>{articleItem?.title}</h1>
                    <div className="single-item-image">
                        <img src={articleItem?.urlToImage}></img>
                    </div>
                    <div className="single-item-description">{articleItem?.content}</div>
                </div>
            </div>
            </StyledOne>
        </>
    )
}
export default OneSport
