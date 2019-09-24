import { CreateUserService } from './create-user.service';
import { UserModel } from './../model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers:[CreateUserService]
})
export class CreateUserComponent implements OnInit {

  private user: UserModel;
  private isValid: boolean = true;
  private message: string = "";

  constructor(private createUserService: CreateUserService) { 
    this.user = new UserModel();
  }

  ngOnInit() {
  }
 
  public saveOrUpdate(): void {
    this.isValid = this.createUserService.validate(this.user);
    if(this.isValid){
      this.createUserService.saveOrUpdate(this.user).subscribe(res =>{

      })
    }else{
      this.message = "Not all the information is fill in"
    }
  }

}
