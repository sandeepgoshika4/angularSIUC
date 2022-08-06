import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
name = '';
email = '';
age = '';
phone = '';
address = '';
comment = ''; 
  constructor(private http:HttpClient) { }
  submit(){
    
    // if(this.name.length < 3){
    //   alert("please provide correct first name");
    //   return;
    // }
    if(this.email.length < 3){
      var emailCheckRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        console.log(this.email);
        if(this.email.length > 0 && !emailCheckRegEx.test(this.email)) {
            alert('Please enter a valid email');
            return;
        }
    }
    if(this.phone.length < 3){
      var phonenoRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      console.log(this.phone)
      if(this.phone.length > 0 && !phonenoRegEx.test(this.phone))
          {
          alert("Please enter the phone number format");
           return;
          };
    }
    if(this.address.length < 7){
      alert("please provide correct address");
      return;
    }

    

    let obj = {
      name : this.name,
      email : this.email,
      phone: this.phone,
      age: this.age,
      address: this.address,
      comment: this.comment
    }

    console.log(obj);

    this.http.post("https://siuassignment5.herokuapp.com/",obj).subscribe((result) => {});

    alert( ' Thank you for submitting the form.');

    this.name = '';
    this.email = '';
    this.phone = '';
    this.age = '';
    this.address = ''
    this.comment = '';
    
  }
}
