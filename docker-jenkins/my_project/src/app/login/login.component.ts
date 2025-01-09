// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../service/auth.service';
// //import * as $ from 'jquery';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   public userId: string = '';
//   public password: string = '';
//   public logingId: any = '';
//   public success = true

//   sess_msg: any = "";

//   form :any ={
//     "login_id" : this.userId,
//     "password" : this.password,
//     "message" : "",
//     "error" : "",
//   }
  
//   inputError ={
//     "login_id" : "",
//     "password" : "",
//   }
//   constructor(private router: Router, private service : AuthService){ }
//   ngOnInit() {
//     localStorage.removeItem("loginId")
//     if(this.router.url == "/sessionOut"){
//       this.success = false;
//       this.form.message = localStorage.getItem("sess_msg");
//       console.log("ngOnInit-sess_msg-->",localStorage.getItem("sess_msg"));
//     }
//     else{
//       let msg = localStorage.getItem("logout_msg")
//       console.log("logout msg",msg)
//       if (msg != null || msg != "null"){
//         this.success = true;
//         this.form.message = msg;
//         console.log("ngOnit-logout_msg-->",localStorage.getItem("sess_msg"));
//       }
//     }
//   }
    
//     signIn(){
//       var _self = this;
//       console.log("signIn-->");
  
//       this.service.auth(this.form, function(info:any){
//         console.log("info------",info)
//         if (info.form.error){
//           _self.success = false;
//           _self.form.message = info.form.message;
//           _self.inputError = info.form.inputError;
//         }else{
//           localStorage.clear();
//           console.log("signIn--->",info.form.error);
//           localStorage.setItem("loginId",info.form.data.login_id);
//           localStorage.setItem("roleName",info.form.data.role_Name);
//           localStorage.setItem("firstName",info.form.data.firstName);
//           _self.router.navigateByUrl("/welcome");
//         }
//       })
//     }
//     onclick(){
//       this.router.navigateByUrl("/registration");
//     }
  
//   }
  





import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // User credentials
  public userId: string = '';
  public password: string = '';

  // State variables
  public success: boolean = true; // Tracks login success
  public sess_msg: string = ''; // Session message
  public inputError: any = { login_id: '', password: '' }; // Validation errors

  // Login form data
  public form: any = {
    login_id: this.userId,
    password: this.password,
    message: '',
    error: '',
  };

  constructor(private router: Router, private authService: AuthService) {}

  /**
   * Lifecycle hook: Called after component initialization.
   * Handles session or logout messages and clears login state.
   */
  ngOnInit(): void {
    localStorage.removeItem('loginId'); // Clear any existing login ID

    if (this.router.url === '/sessionOut') {
      // Handle session timeout scenario
      this.success = false;
      this.form.message = localStorage.getItem('sess_msg') || '';
      console.log('Session timeout message:', this.form.message);
    } else {
      // Handle logout scenario
      const logoutMessage = localStorage.getItem('logout_msg');
      if (logoutMessage) {
        this.success = true;
        this.form.message = logoutMessage;
        console.log('Logout message:', this.form.message);
      }
    }
  }

  /**
   * Handles user login.
   * Sends credentials to the AuthService and processes the response.
   */
  signIn(): void {
    console.log('Attempting to sign in...');

    // Call the authentication service
    this.authService.auth(this.form, (response: any) => {
      console.log('Auth response:', response);

      if (response.form.error) {
        // Handle login errors
        this.success = false;
        this.form.message = response.form.message;
        this.inputError = response.form.inputError;
      } else {
        // Successful login
        localStorage.clear(); // Clear existing storage
        localStorage.setItem('loginId', response.form.data.login_id);
        localStorage.setItem('roleName', response.form.data.role_Name);
        localStorage.setItem('firstName', response.form.data.firstName);

        console.log('Login successful, redirecting...');
        this.router.navigateByUrl('/welcome'); // Navigate to welcome page
      }
    });
  }

  /**
   * Redirects the user to the registration page.
   */
  onClickRegister(): void {
    this.router.navigateByUrl('/registration');
  }
}
