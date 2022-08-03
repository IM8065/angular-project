import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Claim,
  ClaimDataService,
} from 'src/app/service/data/claim-data.service';

@Component({
  selector: 'app-claim-view',
  templateUrl: './claim-view.component.html',
  styleUrls: ['./claim-view.component.css'],
})
export class ClaimViewComponent implements OnInit {
  currentClaim: Claim | undefined;
  constructor(
    private route: ActivatedRoute,
    private service: ClaimDataService
  ) {}

  ngOnInit(): void {
    const claimId = this.route.snapshot.paramMap.get('id');
    this.service.getClaimById(Number(claimId)).subscribe((res) => {
      this.currentClaim = res;
    });
  }
}
