import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';
import { User } from 'src/app/User';

export interface Claim {
  id?: number;
  user?: User;
  policyNumber: number;
  insuranceType: string;
  claimReason: String;
}

/*
{
 id: '',
 policyNumber: 0,
 insuranceType: '',
 claimReason: '',
 user: user
}
*/

@Injectable({
  providedIn: 'root',
})
export class ClaimDataService {
  constructor(private http: HttpClient) {}

  getClaimData() {
    return this.http.get<Claim[]>('http://localhost:8080/api/claims/list');
  }

  getClaimById(id: number) {
    let claim = this.http
      .get<Claim>(`http://localhost:8080/api/claims/view/${id}`)
      .pipe(take(1));

    return claim;
  }

  createClaim(claim: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    let postRequest = this.http
      .post<Claim>(
        'http://localhost:8080/api/claims/create',
        claim,
        httpOptions
      )
      .subscribe((res) => console.log(res));
  }
}
