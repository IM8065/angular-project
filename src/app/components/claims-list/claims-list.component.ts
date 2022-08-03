import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Claim,
  ClaimDataService,
} from 'src/app/service/data/claim-data.service';

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.css'],
})
export class ClaimsListComponent implements OnInit {
  claimList: Claim[] | undefined;
  constructor(private service: ClaimDataService, private router: Router) {}

  ngOnInit(): void {}

  useClaimData() {
    this.service.getClaimData().subscribe((res: Claim[]) => {
      this.claimList = res;
      console.log(res);
    });
  }

  viewClaim(id: number | undefined) {
    console.log(id);
    this.router.navigate(['view-claim', id]);
  }
}
