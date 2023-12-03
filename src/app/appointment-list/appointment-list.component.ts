import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  title1: string = "";
  date1 : Date =  new Date();
  appointment : Appointment [] = [];

addAppointment() {
  console.log( this.title1.trim.length + " " + this.date1)
  if (this.title1.trim().length && this.date1) {
    let newAppointment : Appointment = {
      id : 1,
      title : this.title1,
      date : this.date1
     }
     this.appointment.push(newAppointment);
     this.title1 = "";
     this.date1 = new Date();


     alert(this.appointment.length);

  }



}




}
