import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Claim,
  ClaimDataService,
} from 'src/app/service/data/claim-data.service';

@Component({
  selector: 'app-claim-create',
  templateUrl: './claim-create.component.html',
  styleUrls: ['./claim-create.component.css'],
})
export class ClaimCreateComponent implements OnInit {
  claimForm = new FormGroup({
    policyNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    insuranceType: new FormControl('', [Validators.required]),
    claimReason: new FormControl('', [Validators.required]),
  });

  constructor(private claimService: ClaimDataService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    let userDetailsString: string = localStorage.getItem('userdetails') || '';
    console.log(userDetailsString);
    let userDetailsObj = JSON.parse(userDetailsString);

    console.log(userDetailsObj);
    let claim: Claim = {
      policyNumber: this.claimForm.controls['policyNumber'].value,
      insuranceType: this.claimForm.controls['insuranceType'].value,
      claimReason: this.claimForm.controls['claimReason'].value,
      user: userDetailsObj,
    };
    this.claimService.createClaim(claim);
    this.claimForm.reset();
  }
}
