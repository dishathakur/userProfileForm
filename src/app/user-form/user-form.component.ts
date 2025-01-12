import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  users: User[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      let user: User = this.userForm.value;

      this.userService.addUser(user).subscribe(() => {
        this.users.push(user);
        console.log(this.users);
      });
    }
  }
}
