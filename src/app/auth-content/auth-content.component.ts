import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.scss']
})
export class AuthContentComponent {

  data:string[]=[];

  constructor(private axiosService: AxiosService){}

  ngOnInit(): void{
    this.axiosService.request(
      "GET",
      "/messages",
      (null)
    ).then(
      (r)=> this.data = r.data
    );
  }
}
