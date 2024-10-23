import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public isSending: boolean = false; 
  public confirmationMessage: string | null = null;

  constructor() {
    emailjs.init('6gUT7d20EkpHD-838'); 
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    this.isSending = true; // Set sending flag to true

    emailjs.sendForm('service_yc00uou', 'template_o3j8udz', e.target as HTMLFormElement, '6gUT7d20EkpHD-838')
      .then((result: EmailJSResponseStatus) => {
        console.log('Email sent successfully:', result);
        this.confirmationMessage = "Your message has been sent successfully!"; // Set confirmation message
        (e.target as HTMLFormElement).reset(); // Reset the form
      }, (error: any) => {
        console.error('Error sending email:', error);
        this.confirmationMessage = "There was an error sending your message. Please try again."; // Set error message
      })
      .finally(() => {
        this.isSending = false; // Reset sending flag after process is complete
      });
  }
}