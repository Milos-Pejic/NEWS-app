import styled from 'styled-components'
const StyledNav= styled.div`
.nav{
  background-image: linear-gradient(90deg,#471629 15%,#712744 49%,#471629 85%);
  display: flex;
  align-items: center;
  padding: 0 0 0 40px;
  margin-bottom:5px;
}
ul{
  padding: 0 10px;
}
li{
  list-style: none;
}
a{
        color: white;
        border-radius:5px;
        font-weight:550;
        letter-spacing:1px;
    }
    a:hover{
        color: #74b9ff;
        transition: 0.3s ease; 
    }
.nav-logo{
  color: black;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 10px;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  display: block;
  margin-right:300px;
  margin-left:60px;
}
.nav-links{
  display: flex;
  justify-content: space-around;
  text-align: center;
  background-color: 2e2873;
  color: white;
  list-style: none;
  padding: 10px;
  flex-wrap: wrap;
  width: 60%;
  text-transform:uppercase;
 
}
`
export default StyledNav