import Mailjet from "node-mailjet"
const mailJetApiKey = "a3e009d86560c6181c4bf8b63c7c26ac"
const mailJetSecretKey = "8ffcd57b1ad3194f2866185748182c99"

   const construc = {
       apiKey: mailJetApiKey,
       apiSecret: mailJetSecretKey,
   }

let mailjet = new Mailjet(construc);

// const mailjet = Mailjet.apiConnect(
//     "a3e009d86560c6181c4bf8b63c7c26ac",
//     "8ffcd57b1ad3194f2866185748182c99"
//   );
  interface request { email:string, message:string, phone?:number, name:string }
export function sendEmail(req:request){
    const {  email, message, phone, name } =req;
  
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "shivamdix@icloud.com",
            Name: "Contact Us RuralRise",
          },
          To: [
            {
              Email: "dixitshivam249@gmail.com",
              Name: "Contact Us Shivam Dixit Portfolio",
            },
          ],
          Subject: "Shivam Dixit Portfolio Contact Message",
          TextPart: "Shivam Dixit Portfolio Customer Support",
          HTMLPart: `<h3>Name: ${name}</h3><br />Sender Email: ${email},Sender Phone: ${phone} <br/>Message: ${message}`,
        },
      ],
    });

    const requestToSender = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: "shivamdix@icloud.com",
              Name: "Shivam Dixit",
            },
            To: [
              {
                Email: email,
                Name: name,
              },
            ],
            Subject: "Automatic Response on Contact Form Submission",
            TextPart: "Thank you for reaching to me",
            HTMLPart: `<h3>Hello ${name}</h3><br />Hope you are doing well thank you for contacting me i will shortly make response this is automatic message so you dont need to make response for this
            <br/> <h2>Your message was</h2><br/><h3>Name: ${name}</h3><br />Your Provided Email: ${email},Your Email Phone: ${phone} <br/>Your Message to me: ${message}`,
          },
        ],
      });

  let returnVal = 0;
    request
      .then((result) => {
        console.log(result.body);
      })
      .catch((err) => {
        returnVal-=2;
        console.log({ error: err.message });
      });

    requestToSender.then((result)=>{
        console.log(result.body);
      }).catch((err)=>{
        returnVal-=3;
        console.log({error:err.message})
      })

      return returnVal;

      
  }