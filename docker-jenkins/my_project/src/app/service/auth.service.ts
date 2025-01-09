// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

// /**
//  * Provides REST CRUD operations of User functionality
//  * Each method of this class receives response callback method
//  * Response callback method is called by Observable and passed data and error
//  */


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   // Rest endpoint
//   apiUrl = environment.apiUrl;

//   endpoint = `${this.apiUrl}/ORSAPI/Login/`
//   locatar : any;
//   form : any;

//   /** Constructor injects Http service
//    * 
//    * @param http
//    */

//   constructor(private http: HttpClient) {
//     console.log("------>Auth service")
//    }
//      /**
//    * 
//    * @param form
//    * 
//    */
//   auth(form:any, compCB:any){
//     let url = this.endpoint + "auth";
//     this.http.post(url,form).subscribe(
//     (data) =>{
//       console.log("data-----", data)
//       compCB(data);
//     },
//     (data) =>{
//       compCB(data, true);
//     }
//     );
//   }
  
// }




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/**
 * AuthService: Handles user authentication by communicating with the backend API.
 * Provides a method for making authentication requests and processing responses.
 */

@Injectable({
  providedIn: 'root', // Makes this service available application-wide as a singleton.
})
export class AuthService {

  // Base API URL from the environment configuration
  private apiUrl = environment.apiUrl;

  // Full endpoint for authentication-related API requests
  private authEndpoint = `${this.apiUrl}/ORSAPI/Login/`;

  // Optional fields for additional data, currently unused
  private locator: any;
  private form: any;

  /**
   * Constructor to inject the HttpClient service for making HTTP requests.
   * 
   * @param http - Angular's HttpClient service
   */
  constructor(private http: HttpClient) {
    console.log("AuthService initialized");
  }

  /**
   * Sends a POST request to the authentication endpoint with user credentials.
   * 
   * @param form - The data to be sent in the request body (e.g., username, password).
   * @param callback - A function to handle the response or error.
   * 
   * Example usage:
   * this.authService.auth(credentials, (response, error) => {
   *   if (!error) {
   *     console.log('Login successful:', response);
   *   } else {
   *     console.error('Login failed:', response);
   *   }
   * });
   */
  auth(form: any, callback: (response: any, error?: boolean) => void): void {
    // Full URL for the auth request
    const url = `${this.authEndpoint}auth`;

    // Sending POST request
    this.http.post(url, form).subscribe(
      // Success callback: response received successfully
      (response) => {
        console.log("Response received:", response);
        callback(response);
      },
      // Error callback: handle HTTP or other errors
      (error) => {
        console.error("Error occurred:", error);
        callback(error, true);
      }
    );
  }
}
