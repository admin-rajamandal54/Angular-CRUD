import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Common {
  readonly url = environment.apiurl;
  constructor(private http:HttpClient){}
  
  AddData(UserData:any):Observable<any>{
    return this.http.post(this.url+'/UserData',UserData);
  }

  GetData():Observable<any>{
    return this.http.get(this.url+'/UserData');
  }

   GetDetailById(id: any): Observable<any> {
    return this.http.get(this.url+'/UserData/'+id);
  }

  UpdateData(UserData:any):Observable<any>{
    return this.http.put(this.url+'/UserData/'+UserData.id,UserData);
  }

  DeleteRecord(id:any):Observable<any>{
    return this.http.delete(this.url+'/UserData/'+id);
  }
}
