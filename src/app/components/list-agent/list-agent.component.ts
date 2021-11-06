import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.css']
})
export class ListAgentComponent implements OnInit {
  employerData!: any
  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.getAllEmployer();
  }
  getAllEmployer() {
    this.api.getEmployer().subscribe(res => {
      this.employerData = res
    })
  }
}
