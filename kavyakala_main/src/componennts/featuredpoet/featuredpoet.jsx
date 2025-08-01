import { useEffect, useState } from "react"
import axios from 'axios'
 export function Featuredpoet(){
    const [poet,setpoets]=useState([])
    useEffect(()=>{
        getallpoets()
    },[])

   async function getallpoets(){
        try{
            const response = await axios.get('http://localhost:5000/api/poets/all')
            if(response.status===200){
                setpoets(response.data.slice(0,3)) /////only limit 3 
            }
        }
        catch(error){
            console.log(error)
        }
    }
    return(
        <>
            <section className="featured-poets py-5">
    <div className="text-center mb-4">
        <h2 className="fw-bold">प्रमुख कवि</h2>
        <p className="text-secondary">हिंदी साहित्य के महान व्यक्तित्व</p>
    </div>

    <div className="container d-flex justify-content-center gap-4 flex-wrap">
        {/* Poet Card 1 */}
        <div className="poet-card p-4 rounded shadow-sm text-center" style={{ background: "linear-gradient(to right, #e8c264, #d96e1e)", color: "#fff", minWidth: "280px" }}>
            <div className="circle-avatar bg-white text-orange fw-bold mb-2" style={{ width: 40, height: 40, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#d96e1e" }}>ह</div>
            <h5 className="fw-bold">हरिवंशराय बच्चन</h5>
            <p className="text-white-50">15 रचनाएं</p>
            <div className="progress bg-white" style={{ height: "6px" }}>
                <div className="progress-bar" style={{ width: "75%", backgroundColor: "#fff" }}></div>
            </div>
        </div>

        {/* Poet Card 2 */}
        <div className="poet-card p-4 rounded shadow-sm text-center" style={{ background: "linear-gradient(to right, #e8c264, #d96e1e)", color: "#fff", minWidth: "280px" }}>
            <div className="circle-avatar bg-white text-orange fw-bold mb-2" style={{ width: 40, height: 40, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#d96e1e" }}>म</div>
            <h5 className="fw-bold">महादेवी वर्मा</h5>
            <p className="text-white-50">12 रचनाएं</p>
            <div className="progress bg-white" style={{ height: "6px" }}>
                <div className="progress-bar" style={{ width: "60%", backgroundColor: "#fff" }}></div>
            </div>
        </div>

        {/* Poet Card 3 */}
        <div className="poet-card p-4 rounded shadow-sm text-center" style={{ background: "linear-gradient(to right, #e8c264, #d96e1e)", color: "#fff", minWidth: "280px" }}>
            <div className="circle-avatar bg-white text-orange fw-bold mb-2" style={{ width: 40, height: 40, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#d96e1e" }}>स</div>
            <h5 className="fw-bold">सूर्यकांत त्रिपाठी निराला</h5>
            <p className="text-white-50">18 रचनाएं</p>
            <div className="progress bg-white" style={{ height: "6px" }}>
                <div className="progress-bar" style={{ width: "90%", backgroundColor: "#fff" }}></div>
            </div>
        </div>
    </div>

    <div className="text-center mt-4">
        <button className="btn btn-orange px-4">सभी कवि देखें</button>
    </div>
</section>
        </>
    )
}