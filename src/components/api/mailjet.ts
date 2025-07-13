// emailService.js
import emailjs from '@emailjs/browser';

type EmailParse = {
  name:string,
  email:string;
  message:string;
  phone:string;
}
export const sendEmail = async ({ name, email, message,phone }:EmailParse) => {
  try {
    const resultFromSendingMessageMe= await emailjs.send(
      'service_arcorwu',     // Dixitshiva.....
      'template_rrlukam',    // Email Goes to ME
      {
        name: name,
        email: email,
        message: message,
        phone:phone
      },
      'rhGEG25F9oEhiUi_2'      // e.g. A1BcD2EfG3HiJ4KlM
    );

    const resultFromSendingMessageContacter = await emailjs.send(
      'service_arcorwu',     // Dixitshiva.....
      'template_ffxpayg',    // Email Goes to Contacter
      { 
        name: name,
        email: email,
        message: message,
      },
      'rhGEG25F9oEhiUi_2'      // e.g. A1BcD2EfG3HiJ4KlM
    );
    return {success:true}
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
