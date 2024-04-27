/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from '../cafe.service';
import { faker } from '@faker-js/faker';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ],
      providers:[CafeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    for(let i=0; i<3; i++){
      const cafe = new Cafe(
        faker.number.int(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.number.int(),
        faker.image.url.toString()
      );
      component.cafes.push(cafe);
    }
    
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <tr> elements plus header <tr>', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const elements = compiled.querySelectorAll('tr');
    expect(elements.length).toBe(4);
  });

  
});
