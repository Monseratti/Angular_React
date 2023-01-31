import { Component } from '@angular/core';
import {Resume} from "../mock-contacts";
import {ResumeInfo} from "../mock-contacts";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  resume = ResumeInfo;
}

