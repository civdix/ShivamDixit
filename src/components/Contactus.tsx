import {FaPhone,FaMailBulk,FaAddressCard, FaWhatsapp} from "react-icons/fa"
import { useReducer } from "react"
export default function Contact(){
    interface fData{
        name:string,
        email:string,
        phone?:number,
        message:string
    }
type Action = { type: "name",value:string } | { type: "email",value:string } | { type: "phone",value:number } | {type:"message",value:string};
    function reducer(formData:fData,action:Action){
        switch(action.type){
            case "name":
                return {...formData,"name":action.value}
            case "email":
                return {...formData,"email":action.value}
            case "phone":
                return {...formData,"phone":action.value}
            case "message":
                return {...formData,"message":action.value}
            default:
                return {...formData}
        }
    }
    const [formData,dispath] = useReducer(reducer,{
        name:"",
        email:"",
        message:"",
        phone:0
    })
    return <>
    <div className="Contact">
    <div className="basic">
        <a className="phone"  href="tel:+919720965985">
        <FaPhone size={30}/>
        +919720965985
        </a>
        <a className="email" href="mailto:dixitshivam249@gmail.com">
            <FaMailBulk size={30}/>
            dixitshivam249@gmail.com
        </a>
        <a className="address" href="https://maps.app.goo.gl/vDMkWvYnr1LfnNYo8">
            <FaAddressCard size={30}/>
            <address> Vrindavan, Mathura, Uttar-Pradesh, India (Pincode:281121)</address>
        </a>
        <a className="whatsapp" href="https://wa.me/+919720965985">
            <FaWhatsapp size={30}/>
            +919720965985
        </a>
    </div>
<div className="form">
    <input type="text" value={formData.name}  required onChange={(e)=>{dispath({type:"name",value:e.target.value})}}/>
    <input type="email" value={formData.email} required onChange={(e)=>{dispath({type:"email",value:e.target.value})}}/>
    <input type="tel" value={formData.phone} onChange={(e)=>{dispath({type:"phone",value:parseInt(e.target.value)})}}/>
    <textarea value={formData.message} required onChange={(e)=>{dispath({type:"message",value:e.target.value})}}/>
</div>






    </div>


    
    </>
}