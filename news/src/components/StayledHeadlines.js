import styled from 'styled-components'

const StayledHeadlines=styled.div`
.headlines{
    padding:20px 0px;
}
.headlines-wrapper{
    display:flex;
    justify-content:space-between;
    
    flex-wrap:wrap;
}
.article-item{
    width: 24%;
    border: 1px solid gray;
    position:relative;
    margin-bottom: 20px;
}
.article-item-description{
    position: absolute;
    left:0;
    bottom:0;
    background-color:#471629;
    opacity:0.6;
    color:white;
}
.article-item-description h3{
    font-size:15px;
}
.article-item-img{
    height:300px;
   
}


img{
    height:100%;
    object-fit:cover;
    max-width:100%;
    width:100%;
}


`
export default StayledHeadlines