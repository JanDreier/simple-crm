import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user: User;
  loading = false;
  birthDate: Date;
  userId:string;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>,private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }

  saveUser(){
    this.loading = true;
    this.firestore.collection('users').doc(this.userId).update(this.user.toJSON()).then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
