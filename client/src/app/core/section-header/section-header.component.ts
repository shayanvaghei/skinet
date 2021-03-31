import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  breadcrumb$: Observable<any[]>; // making our own Observable

  constructor(private bsService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumb$ = this.bsService.breadcrumbs$;
  }

}
