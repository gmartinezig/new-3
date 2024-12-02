import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_TABS_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IgxAvatarComponent, IgxCheckboxComponent, IGX_LIST_DIRECTIVES, IGX_CHIPS_DIRECTIVES } from 'igniteui-angular';
import { AccountSampleComponent } from './account-sample.component';

describe('AccountSampleComponent', () => {
  let component: AccountSampleComponent;
  let fixture: ComponentFixture<AccountSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AccountSampleComponent, NoopAnimationsModule, FormsModule, IGX_TABS_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IgxAvatarComponent, IgxCheckboxComponent, IGX_LIST_DIRECTIVES, IGX_CHIPS_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
