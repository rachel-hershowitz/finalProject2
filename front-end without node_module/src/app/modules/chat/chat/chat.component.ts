import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';
import { AngularEditorConfig } from '../../angular-editor/src/public-api';
import { UserService } from '../../signin/user.service';
import { ChatService } from '../chat.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  // config1: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   minHeight: '5rem',
  //   maxHeight: '15rem',
  //   placeholder: 'Enter text here...',
  //   translate: 'no',
  //   sanitize: false,
  //   toolbarPosition: 'top',
  //   outline: true,
  //   defaultFontName: 'Comic Sans MS',
  //   defaultFontSize: '5',
  //   showToolbar: false,
  //   defaultParagraphSeparator: 'p',
  //   customClasses: [
  //     {
  //       name: 'quote',
  //       class: 'quote',
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText'
  //     },
  //     {
  //       name: 'titleText',
  //       class: 'titleText',
  //       tag: 'h1',
  //     },
  //   ],
  //   toolbarHiddenButtons: [
  //     ['bold', 'italic'],
  //     ['fontSize']
  //   ]
  // }; 

  // onChange(event) {
  //   debugger
  //   console.log('changed');
  // }

  // onBlur(event) {
  //   debugger
  //   console.log('blur ' + event);
  // }

  // onChange2(event) {
  //   debugger
  //   console.warn(this.messageForm.value);
  // }

  messageForm: FormGroup;
  messageCurrent: Message = new Message();
  @Input()
  currentUser: User;
  @Input()
  isManager: boolean = false
  listAllMessages: Message[];
  htmlContent1 = '';
  htmlContent2 = '';

  config2: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'yes',
    sanitize: true,
    toolbarPosition: 'bottom',
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

  constructor(private _chatService: ChatService, private _userService: UserService) { }

  ngOnInit() {
    this.currentUser = this._userService.getCurrentUser()

    this.getListMessagesOfCurrentUser()

    this.messageForm = new FormGroup({
      "dataMessage": new FormControl(this.messageCurrent.dataMessage, Validators.required)
    })
  }

  getListMessagesOfCurrentUser() {
    this._chatService.getListMessagesOfCurrentUser(this.currentUser.identity).subscribe(
      (data) => { this.listAllMessages = data },
      (err) => { debugger }
    )
  }

  sendMessage() {
    if (this.messageForm.controls.dataMessage.invalid) {
      return
    }
    debugger
    this.messageCurrent.dataMessage = this.messageForm.controls.dataMessage.value;
    this.messageCurrent.fromCustomer = !this.isManager

    this._chatService.createMessageByUserId(this.messageCurrent, this.currentUser.identity).subscribe(
      data => {
        this.getListMessagesOfCurrentUser()
      },
      err => {
        console.log("failed create new message!!")
      });
  }

}
