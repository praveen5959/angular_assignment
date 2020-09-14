import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  responseData;
  constructor(private readonly dataService: DataServiceService) {}

  ngOnInit(): void {
    let url = window.location.href;
    let id = url.substr(url.lastIndexOf('/') + 1);
    this.dataService.getEmployeeData(id).subscribe((response: any) => {
      this.responseData=response;
    });
  }
}
