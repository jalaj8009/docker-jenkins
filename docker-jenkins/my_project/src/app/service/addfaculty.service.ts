// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AddfacultyService {

//   apiUrl = environment.apiUrl;

//   endpoint = `${this.apiUrl}/ORSAPI/Faculty/`

//   constructor(private http: HttpClient) { }

//   get(id:number, compCB:any){
//     let url = this.endpoint + "get/" + id;
//     var observable = this.http.get(url);
//     observable.subscribe(
//       function success(data){
//         compCB(data);
//       },function fail(data){
//         compCB(data, true);
//       }
//     );
//   }

//   preload(compCB:any){
//     let url = this.endpoint + "preload";
//     var observable = this.http.get(url);
//     observable.subscribe(
//       function success(data){
//         compCB(data);
//       },function fail(data){
//         compCB(data, true);
//       }
//     );
//   }

//   delete(id:number, compCB:any){
//     let url = this.endpoint + "delete/" + id;
//     var observable = this.http.get(url);
//     observable.subscribe(
//       (data) => {
//         compCB(data);
//       },(data) =>{
//         compCB(data, true);
//       }
//     );
//   }

//   search(form:any, compCB:any){
//     let url = this.endpoint + "search";
//     var observable = this.http.post(url,form);
//     observable.subscribe(
//       (data) => {
//         compCB(data);
//       },(data) =>{
//         compCB(data, true);
//       }
//     );
//   }

//   save(form:any, compCB:any){
//     let url = this.endpoint + "save";
//     var observable = this.http.post(url,form);
//     observable.subscribe(
//       (data) => {
//         compCB(data);
//       },(data) =>{
//         compCB(data, true);
//       }
//     );
//   }
// }





import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * AddfacultyService: Handles CRUD operations for managing faculty.
 * Provides methods to fetch, delete, search, and save faculty data.
 */

@Injectable({
  providedIn: 'root', // Makes the service available throughout the app as a singleton.
})
export class AddfacultyService {
  // Base API URL from the environment configuration
  private apiUrl = environment.apiUrl;

  // Full API endpoint for faculty-related operations
  private facultyEndpoint = `${this.apiUrl}/ORSAPI/Faculty/`;

  /**
   * Constructor to inject the HttpClient service for making HTTP requests.
   * 
   * @param http - Angular's HttpClient service
   */
  constructor(private http: HttpClient) {}

  /**
   * Fetches a faculty record by ID.
   * 
   * @param id - The unique identifier of the faculty.
   * @param callback - Function to handle the response or error.
   */
  get(id: number, callback: (response: any, error?: boolean) => void): void {
    const url = `${this.facultyEndpoint}get/${id}`;
    this.http.get(url).subscribe(
      (data) => callback(data),
      (error) => callback(error, true)
    );
  }

  /**
   * Preloads data necessary for the faculty module.
   * 
   * @param callback - Function to handle the response or error.
   */
  preload(callback: (response: any, error?: boolean) => void): void {
    const url = `${this.facultyEndpoint}preload`;
    this.http.get(url).subscribe(
      (data) => callback(data),
      (error) => callback(error, true)
    );
  }

  /**
   * Deletes a faculty record by ID.
   * 
   * @param id - The unique identifier of the faculty to delete.
   * @param callback - Function to handle the response or error.
   */
  delete(id: number, callback: (response: any, error?: boolean) => void): void {
    const url = `${this.facultyEndpoint}delete/${id}`;
    this.http.get(url).subscribe(
      (data) => callback(data),
      (error) => callback(error, true)
    );
  }

  /**
   * Searches for faculty records based on form data.
   * 
   * @param form - The search criteria as a key-value object.
   * @param callback - Function to handle the response or error.
   */
  search(form: any, callback: (response: any, error?: boolean) => void): void {
    const url = `${this.facultyEndpoint}search`;
    this.http.post(url, form).subscribe(
      (data) => callback(data),
      (error) => callback(error, true)
    );
  }

  /**
   * Saves or updates faculty data.
   * 
   * @param form - The faculty data to be saved.
   * @param callback - Function to handle the response or error.
   */
  save(form: any, callback: (response: any, error?: boolean) => void): void {
    const url = `${this.facultyEndpoint}save`;
    this.http.post(url, form).subscribe(
      (data) => callback(data),
      (error) => callback(error, true)
    );
  }
}
