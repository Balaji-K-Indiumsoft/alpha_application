import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  constructor(private axiosService: AxiosService) { }

  onLogin(input: any): void {
    this.axiosService.request(
      "post",
      "/login", {
      login: input.login,
      password: input.password
    }
    )
  }
  
}
