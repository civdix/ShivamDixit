import {FaPhone,FaMailBulk,FaAddressCard, FaWhatsapp} from "react-icons/fa"
import { useReducer } from "react"
import "../assets/styles/Contact.css"
// @ts-ignore
// import {sendEmail} from './api/mailjet.js'
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
    // async function handleSubmit(){
    //     const response  = await sendEmail({ email:formData.email, message:formData.message, phone:formData.phone, name:formData.name } )
        
    //     if(response==0){
    //         alert("No Error, Both Email Send")
    //     }
    //     else if(response== -2){
    //        alert("1 Error, Mail to Me doesnt send, But mail to Sender Sended")
    //     }
    //     else if(response == -3){
    //         alert("1 Error, Mail to Sender Does not sednded but Reached to me")
    //     }
    //     else if(response == -5){
    //         alert("2 Error, Both email failed to send")
    //     }
    //     else{
    //         alert("Internal Mailjet api error in mailjet.ts file")
    //     }
    // }
    return <div className="contactUsMain">
    <h1>Contact me</h1>
    <div id="Contact">
    <div className="basic">
        <a className="phone links"  href="tel:+919720965985">
            <div id="icon">
        <FaPhone  size={25}/>
            </div>
            <span>
        +919720965985
            </span>
        </a>
        <a className="email links" href="mailto:dixitshivam249@gmail.com">
            <div id="icon">
            <FaMailBulk size={25}/>
            </div>
            <span>
        dixitshivam249@gmail.com 
            </span>
        </a>
        <a className="address links" href="https://maps.app.goo.gl/vDMkWvYnr1LfnNYo8">
            <div id="icon">
            <FaAddressCard size={25}/>
            </div>
            <address> Vrindavan, Mathura, Uttar-Pradesh, India (Pincode:281121)</address>
        </a>
        <a className="whatsapp links" href="https://wa.me/+919720965985">
            <div id="icon">
            <FaWhatsapp  size={25} />
            </div>
            <span>
        +919720965985
            </span>
        </a>
    </div>
    <hr className="divide" />
<div className="form">
    <div className="name">
        <label htmlFor="name">Name:</label>
    <input type="text" id="name" value={formData.name}  required onChange={(e)=>{dispath({type:"name",value:e.target.value})}}/>
    </div>
    <div className="email">
        <label htmlFor="email">Email:</label>
    <input type="email" id="email" value={formData.email} required onChange={(e)=>{dispath({type:"email",value:e.target.value})}}/>
    </div>
    <div className="phone">
        <label htmlFor="phone">Phone:</label>
    <input type="tel" id="phone" value={formData.phone?formData.phone:""} onChange={(e)=>{dispath({type:"phone",value:parseInt(e.target.value)})}}/>
    </div>
    <div className="message">
        <label htmlFor="message">Message:</label>
    <textarea rows={10} cols={57} style={{padding:"1% 1%"}} value={formData.message} id="message" required onChange={(e)=>{dispath({type:"message",value:e.target.value})}}/>
    </div>
    <div className="submit">
<button >Submit</button>
    </div>
</div>
<hr className="divide" />

    <div className="details" ></div>

    </div>


    
    </div>
}