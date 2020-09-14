import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  employeeData;
  constructor(private readonly dataService: DataServiceService) {}

  ngOnInit(): void {
    this.dataService.getEmployees().subscribe((response: any) => {      
      this.employeeData = response.data;
    });
  }
}
