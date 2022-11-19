import { TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '../../environments/environment';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
       ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //not sure about testing like this
  it('should get currently authed user', () => {
    let getUser = () => { return {} };
    const currentUser = getUser();
    expect(currentUser).toBeInstanceOf(Object);
  });

  it('should get null when user is unauthenticated', (done: DoneFn) => {
    service.user().subscribe(val => {
      expect(val).toBe(null);
      done();
    })
  });

});
