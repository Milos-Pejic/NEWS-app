import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getHealth, getNews } from "../service"

import StayledHeadlines from "./StayledHeadlines"

const Health = () => {
    const [stroies, setStories] = useState([])
    useEffect(() => {
        getHealth().then(res => {
            console.log(res.data.articles)
            setStories(res.data.articles)
        })
    }, [])
    return (
        <>
          <StayledHeadlines>
                <section className="headlines container">
                    <div className="headlines-wrapper">
                        {
                            stroies?.map((article, index) => {
                                console.log(article, 'Ovde je artikal')
                                return (
                                    <div className="article-item">
                                    <Link to={{pathname:`/health/${article.title}`, article}}>
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
export default Health