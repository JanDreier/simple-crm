import { Component, OnInit } from '@angular/core';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user: User = new User();
  birthDate: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent> ,private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log('user: ', this.user)
    this.loading = true;

    this.firestore.collection('users').add(this.user.toJSON()).then((result:any) => {
      this.loading = false;
      console.log('adding user finished', result)
      this.dialogRef.close();
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
