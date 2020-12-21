import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import {TokenStorageService} from './token-storage.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private token: TokenStorageService, public router: Router) {}
  canActivate(): boolean {
    const token = this.token.getToken();
    if (token == null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
