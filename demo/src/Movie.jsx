import React, { useState, useEffect } from 'react'
import './App.css';
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

function Movie({movie,setMovie}) {
    const [search, setsearch] = useState('');
    const [status,setStatus] = useState("");
    const [filterdata,setfilterData] = useState([]); 

    const adventure = () => {
        setfilterData(movie.filter((item) => item.Category === 'Adventure'))
    }
    const comedy = () => {
        setfilterData(movie.filter((item) => item.Category === 'Comedy'))
    }
    const drama = () => {
        setfilterData(movie.filter((item) => item.Category === 'Drama'))
    }
    const family = () => {
        setfilterData(movie.filter((item) => item.Category === 'Family'))
    }
    const fantacy = () => {
        setfilterData(movie.filter((item) => item.Category === 'Fantacy'))
    }
    const romance = () => {
        setfilterData(movie.filter((item) => item.Category === 'Romance'))
    }
    const horror = () => {
        setfilterData(movie.filter((item) => item.Category === 'Horror'))
    }
    const science = () => {
        setfilterData(movie.filter((item) => item.Category === 'Science Fiction'))
    }
    const anime = () => {
        setfilterData(movie.filter((item) => item.Category === 'Anime'))
    }
    useEffect(() => {
        let rec = [...movie]
        let loc = localStorage.setItem("user", JSON.stringify(rec))
        setMovie(loc)
    }, [])
    
    useEffect(() => {
        let old = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
        setMovie(old)
    },[])

    useEffect(()=>{
        if(status!=""){
            let original = [...movie];
            original = movie.filter((curItem)=>{
                return curItem.Status === status
            })
            console.log(original);
            setfilterData(original)
        }
    },[status])

    useEffect(() => {

        if (search.length === 0) {
            let ans = JSON.parse(localStorage.getItem("user"))
            setMovie(ans)
        } else {
            const searchData = movie.filter(val => val.Name.toLowerCase().includes(search.toLowerCase()))
            setMovie(searchData);
        }

    }, [search])

    const filterStatus = (status) => {
        let fil = movie.filter(item => item.Status == status);
        setfilterData(fil);
    }

    const Genral = () => {
        let old = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
        setfilterData(old)
    }

    return (
        <div>
            <div className=''>
                <div style={{ width: "300px", position: "fixed" }} className=''>
                    <header className='d-flex  justify-content-between flex-column' style={{ height: '100VH', position: "fixed" }}>
                        <div className='my-5'>
                            <img src='https://gnodesign.com/templates/movify/assets/images/logo-white.svg' style={{ width: "200px" }} />
                        </div>
                        <ul>
                            <li><button onClick={ () => filterStatus("Trending") } class="btn btn-outline-primary w-100 mb-3 text-white">Trending</button></li>
                            <li><button onClick={ () => filterStatus("Upcoming") } class="btn btn-outline-primary w-100 mb-3 text-white" value="Upcoming">Upcoming</button></li>
                            <li><button onClick={ () => filterStatus("Favorites") } class="btn btn-outline-primary w-100 mb-3 text-white" value="Favorites">Favorites</button></li>
                            <li><button  class="btn btn-outline-primary w-100 mb-3 text-white" onClick={Genral}>General</button></li>
                        </ul>
                        <div class="">
                            <button className='btn btn-primary w-100 mt-5 text-white'>Log IN</button>
                        </div>
                    </header>
                </div>
                <div style={{ marginLeft: "300px", paddingLeft: "20px", marginTop: "10px", paddingRight: "20px" }}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='input d-flex justify-content-between align-items-center'>
                            <input type='text' placeholder='Search' className='text-white' onChange={(e) => setsearch(e.target.value)} value={search} /><IoIosSearch className='text-white fs-4' />
                        </div>
                        <div className='d-flex'>
                            <h4 className='text-white fs-6 me-2'>Tziona</h4>
                            <FaRegUserCircle className='text-white fs-5' />
                        </div>
                    </div>

                    <div className='mt-3 rounded'
                        style={{
                            backgroundImage: `url("https://cdn.s7.shopdisney.eu/is/image/ShopDisneyEMEA/39654_Q322_buzz_lightyear_mb?fit=constrain&cropN=0,0,1,1&fmt=jpeg&qlt=90&wid=1200")`,
                            backgroundRepeat: "no-repeat",
                        }}>
                        <div className="container">
                            <div className="text-end " style={{ paddingTop: "200px" }}>
                                <h5 class="text-white" style={{ fontSize: "30px", padding: '5px 0' }}>Lightyear</h5>
                                <h6 class="text-white pb-5">Adventure</h6>
                            </div>
                        </div>
                    </div>

                    {/* button */}
                    <div style={{ width: "70%" }} className='px-5 d-flex m-auto flex-wrap text-center justify-content-center mt-4'>
                        <button className='border-0 rounded-pill px-3 py-2 mx-2 mb-3 text-white' style={{ backgroundColor: "#2458A3" }} onClick={adventure}>Adventure</button>
                        <button className='border-0 rounded-pill px-3 py-2 mx-2 mb-3 text-white' style={{ backgroundColor: "#2458A3" }}
                            onClick={comedy}>Comedy</button>
                        <button className='border-0 rounded-pill px-3 py-2 mx-2 mb-3 text-white' style={{ backgroundColor: "#2458A3" }}
                            onClick={drama}>Drama</button>
                        <button className='border-0 rounded-pill px-3 py-2 mx-2 mb-3 text-white' style={{ backgroundColor: "#2458A3" }} onClick={family}>Family</button>
                        <button className='border-0 rounded-pill px-3 py-2 mx-2 mb-3 text-white' style={{ backgroundColor: "#2458A3" }}
                            onClick={fantacy}>Fantacy</button>
                        <button className='border-0 rounded-pill px-3 py-2 mx-2 mb-3 text-white' style={{ backgroundColor: "#2458A3" }}
                            onClick={romance}>Romance</button>
                        <button className='border-0 rounded-pill px-3 py-2 mx-2 mb-3 text-white' style={{ backgroundColor: "#2458A3" }} onClick={horror}>Horror</button>
                        <button className='border-0 rounded-pill px-3 py-2 mx-2 mb-3 text-white' style={{ backgroundColor: "#2458A3" }}
                            onClick={science}>Science Fiction</button>
                        <button className='border-0 rounded-pill px-3 py-2 mx-2 mb-3 text-white' style={{ backgroundColor: "#2458A3" }}
                            onClick={anime}>Anime</button>
                    </div>

                    <div className='row '>
                    {
                        filterdata.length!=0 ? ( 
                            filterdata.map((val) => {
                            return (
                                <div class="card m-2 p-3 d-flex my-2 align-items-center" style={{ width: "18rem", backgroundColor: "rgb(255, 255, 255,0.1)" }}>
                                    <img src={val.img} class="card-img-top" style={{ height: "200px", objectFit: "contain", width: "100%" }} />
                                    <div class="card-body">
                                        <h5 class="card-title text-white">{val.Name}</h5>
                                        <p class="card-text text-white">{val.Category}</p>
                                    </div>
                                </div>
                            )
                        })):( 
                            movie.map((val) => {
                            return (
                                <div class="card m-2 p-3 d-flex my-2 align-items-center" style={{ width: "18rem", backgroundColor: "rgb(255, 255, 255,0.1)" }}>
                                    <img src={val.img} class="card-img-top" style={{ height: "200px", objectFit: "contain", width: "100%" }} />
                                    <div class="card-body">
                                        <h5 class="card-title text-white">{val.Name}</h5>
                                        <p class="card-text text-white">{val.Category}</p>
                                    </div>
                                </div>
                            )
                        }))  
                    }
                </div>
                </div>
            </div>


        </div>
    )
}

export default Movie
