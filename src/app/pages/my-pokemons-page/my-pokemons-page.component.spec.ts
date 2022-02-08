import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPokemonsPageComponent } from './my-pokemons-page.component';

describe('MyPokemonsPageComponent', () => {
  let component: MyPokemonsPageComponent;
  let fixture: ComponentFixture<MyPokemonsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPokemonsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPokemonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
