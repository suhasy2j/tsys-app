import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseConfigService {

  constructor() { }
  getAddress() {

    let ref = {
      area: 'BalajiNagar',
      locality: 'Dhankawadi',
      city: 'Pune',
      state: 'Maharashtra'
    };
    return ref;
  }
  getName() {
    return 'suhas mendhe';
  }
}
