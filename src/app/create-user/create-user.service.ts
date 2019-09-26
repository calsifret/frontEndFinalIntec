import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { RestResponse } from '../model/RestResponse.model';
import { UserModel } from '../model/user.model';


@Injectable()
export class CreateUserService {

  constructor(private http: HttpClient) { }

  /**
   * Method too validate the fields 
   */
  public validate(user: UserModel):boolean {
    let isValid = true;
    if(!user.firstName){
      isValid = false;
    }
    if(!user.lastName){
      isValid = false;
    }
    if(!user.address){
      isValid = false;
    }
    if(!user.phone){
      isValid = false;
    }
    if(!user.email){
      isValid = false;
    }    
    return isValid;
  }
  public saveOrUpdate(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8080//saveOrUpdate",JSON.stringify(user));
  }
  
}
