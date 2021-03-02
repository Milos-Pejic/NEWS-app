import axios from 'axios'

//83b090c98253452e90b671dd2c279c70
//http://newsapi.org/v2/top-headlines?country=rs&apiKey=API_KEY
export const getNews=()=>axios.get('http://newsapi.org/v2/top-headlines?country=rs&apiKey=83b090c98253452e90b671dd2c279c70')

export const getHealth=()=>axios.get('http://newsapi.org/v2/top-headlines?country=rs&category=health&apiKey=83b090c98253452e90b671dd2c279c70')

export const getBussines=()=>axios.get('http://newsapi.org/v2/top-headlines?country=rs&category=business&apiKey=83b090c98253452e90b671dd2c279c70')

export const getSport=()=>axios.get('http://newsapi.org/v2/top-headlines?country=rs&category=sports&apiKey=83b090c98253452e90b671dd2c279c70')

export const getTechnology=()=>axios.get('http://newsapi.org/v2/top-headlines?country=rs&category=technology&apiKey=83b090c98253452e90b671dd2c279c70')