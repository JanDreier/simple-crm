import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = new User();
  allUsers = [];
  birthDate: Date;

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {

  }

  ngOnInit(): void {
    this.firestore.collection('users').valueChanges({idField: 'customIdName'}).subscribe((changes: any) => {
      console.log('changes from database: ', changes);
      this.allUsers = changes;
    });
  }

  openDialog(){
    this.dialog.open(DialogAddUserComponent);
  }

}
