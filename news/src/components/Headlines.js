import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getNews } from "../service"
import OneNews from "./OneNews"
import StayledHeadlines from "./StayledHeadlines"


const Headlines = () => {
    const [stroies, setStories] = useState([])
    useEffect(() => {
        getNews().then(res => {
            //console.log(res.data)
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
                                 <Link to={{pathname:`/headlines/${article.title}`, article}}>

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
export default Headlines

//const [stroies, setStories] = useState([])
//useEffect(() => {
//  getNews().then(res => {
//    console.log(res.data)
//    setStories(res.data.articles)
//  })
//}, [])
//return (
//  <>
//    {stroies.map(el=><p>{el.content}</p>)}
//  </>
//)