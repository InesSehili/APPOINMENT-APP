import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  ngOnInit(): void {
    let saveappointment = localStorage.getItem("appointment")
    this.appointment = saveappointment ? JSON.parse(saveappointment): []
  } 
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
     localStorage.setItem("appointment",JSON.stringify(this.appointment))
  }
}

delete(index : number)
{
this.appointment.splice(index,1);
localStorage.setItem("appointment",JSON.stringify(this.appointment))


}


}
