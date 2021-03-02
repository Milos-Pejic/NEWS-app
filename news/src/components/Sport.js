import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getSport } from "../service"
import StayledHeadlines from "./StayledHeadlines"

const Sport = () => {
    const [stories, setStoreis] = useState([])
    useEffect(() => {
        getSport().then(res => {
            console.log(res.data.articles)
            setStoreis(res.data.articles.slice(0, 3))
        })
    }, [])
    return (
        <>
            <StayledHeadlines>
                <section className="headlines container">
                    <div className="headlines-wrapper">
                        {
                            stories?.map((article, index) => {
                                console.log(article, 'Ovde je artikal')
                                return (
                                    <div className="article-item">
                                        <Link to={{ pathname: `/bussines/${article.title}`, article }}>
                                            <article className="" key={index}>
                                                <div className="article-item-wrapper">
                                                    <div className="article-item-img">
                                                        <img src={article.urlToImage}></img>

                                                    </div>
                                                    <div className="article-item-description">
                                                        <p>{article.source.name}</p>
                                                        <h3>{article.title}</h3>
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </StayledHeadlines>

        </>
    )
}
export default Sport