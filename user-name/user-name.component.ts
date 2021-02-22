import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  Data:Array<any>

  constructor( private ser:SerService) {
      this.Data = new Array<any>()
   }
  mypass=""
  onSubmit(value:any){
    console.log(value)
  }

  clickMethod(name: { viewModel: any; }) {
    
        var abc=name.viewModel;
        localStorage.setItem("userName", abc)
  }
  getAllDate(){
    // this.ser.getData().subscribe(data =>{
    //   this.Data = data
      
    // })
  }
  
  ngOnInit(): void {
   
  }

}
