import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private http: HttpClient){

  }
  
  logError(data: {statusCode: number, errorMessage: string, datetime: Date}){
      this.http.post('https://task-management-49a91-default-rtdb.firebaseio.com/log.json', data)
      .subscribe();
  }

  fetcherrors(){
      this.http.get('https://task-management-49a91-default-rtdb.firebaseio.com/log.json')
      .subscribe((data) => {
          console.log(data);
      })
  }
}
