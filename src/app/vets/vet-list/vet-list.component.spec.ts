import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {VetListComponent} from './vet-list.component';
import {FormsModule} from '@angular/forms';
import {VetService} from '../vet.service';
import {Router, ActivatedRoute} from '@angular/router';
import {RouterStub, ActivatedRouteStub} from '../../testing/router-stubs';
import {Vet} from '../vet';
import Spy = jasmine.Spy;
import {of} from "rxjs/index";
import {Observable} from "rxjs/Rx";

class VetServiceStub {
  getVets(): Observable<Vet[]> {
    return of();
  }
}

describe('VetListComponent', () => {
  let component: VetListComponent;
  let fixture: ComponentFixture<VetListComponent>;
  let testVet: Vet;
  let vetService: VetService;
  let spy: Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VetListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule],
      providers: [
        {provide: VetService, useClass: VetServiceStub},
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetListComponent);
    component = fixture.componentInstance;
    vetService = fixture.debugElement.injector.get(VetService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
