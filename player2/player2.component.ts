import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
import { HttpClient } from'@angular/common/http';
import { map} from 'rxjs/operators'

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {

  
  style: any;
  
  constructor(private http:HttpClient,private ser:SerService) { }
  loadedPosts:any
  randomNumber:any
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') 
    console.log(this.userName)
    setInterval(() => { this.onFetchPosts1() }, 2000);
   
   }
  ticketsData:any 
  userName:any
  name0:any
  point0:any
  name1:any;
  point1:any
  name2:any
  point2:any
  name3:any
  point3:any
  name4:any
  point4:any
  name5:any
  point5:any
  x:any
  y:any
  z:any
  
  clicked=false;
  btnClick(myButton:any){
    myButton.style.background='green';
  }
  
 
    onFetchPosts() {​​​​​​​​
      this.fetchPosts();
        }​​​​​​​
      
      private fetchPosts(){​​​​​​​​
      this.http.get('http://localhost:8080/ticketGeneration')

     .pipe(map(responseData=> {​​​​​​​​
      const postArray = [];
      postArray.push(responseData);
      return postArray;
          }​​​​​​​​ ))
      
      .subscribe(posts=> {​​​​​​​​
      console.log(posts);
      this.loadedPosts =posts;
          }​​​​​​​​);        
}

   
onFetchPosts1() {​​​​​​​​ 
       
  this.http.get('http://localhost:8080/randomNumShow')
 .pipe(map(responseData=> {​​​​​​​​
  const postArray1 = [];
  postArray1.push(responseData);
  return postArray1;
      }​​​​​​​​ ))
  .subscribe(posts1=> {​​​​​​​​
  console.log(posts1);
  this.randomNumber =posts1;
      }​​​​​​​​);        

    }
  
  }

