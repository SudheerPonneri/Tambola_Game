import { map } from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SerService } from './../ser.service';
import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';
import { from } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   checkflg = true;
  constructor( private  http:HttpClient, userSer:SerService) { }
  loadedPosts:any
  earlyfive1:any
  userName:any


  ngOnInit(): void { 
    this.userName = localStorage.getItem('userName') 
    
      //setInterval(() => { this.onFetchPosts(Object)}, 5000);
   
  }

   onFetchPosts(obj:any) {​​​​​​​​
    
    this.http.get('http://localhost:8080/randomNumDisplay')

    .pipe(map(responseData=> {​​​​​​​​
     const postArray = [];
     postArray.push(responseData);
     return postArray;
         }​​​​​​​​ ))
     
     .subscribe(posts=> {​​​​​​​​
     console.log(posts);
     obj.value = posts[0];
     this.loadedPosts =posts;
         }​​​​​​​​); 
      }​​​​​​​
}