import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AddContact } from './add-contact/add-contact';
import { Users } from './users';

describe('Users', () => {
  let component: Users;
  let fixture: ComponentFixture<Users>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Users],
    }).compileComponents();

    fixture = TestBed.createComponent(Users);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter and update VIP contacts', () => {
    component.setFilter('vip');
    expect(component.filteredContacts).toHaveLength(2);

    component.toggleVip(component.contacts[0]);
    expect(component.filteredContacts).toHaveLength(1);
  });

  it('should add a contact from the new-contact form', () => {
    const addButton = fixture.nativeElement.querySelector('.add-contact') as HTMLButtonElement;
    addButton.click();
    fixture.detectChanges();

    const formComponent = fixture.debugElement.query(By.directive(AddContact)).componentInstance;
    formComponent.contact = {
      name: 'דנה ישראלי',
      email: 'dana@example.com',
      phone: '050-111-2233',
      vip: true,
    };

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    fixture.detectChanges();

    expect(component.contacts[0]).toMatchObject({
      name: 'דנה ישראלי',
      initials: 'די',
      email: 'dana@example.com',
      phone: '050-111-2233',
      vip: true,
    });
    expect(fixture.nativeElement.textContent).toContain('dana@example.com');
    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeNull();
  });
});
