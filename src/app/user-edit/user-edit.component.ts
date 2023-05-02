import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  @Input() editedUser: any;
  @Output() userUpdated = new EventEmitter<any>();
  @Output() editCancelled = new EventEmitter<void>();

  onSubmit(form: any) {
    this.userUpdated.emit(this.editedUser);
  }

  onCancel() {
    this.editCancelled.emit();
  }
}
