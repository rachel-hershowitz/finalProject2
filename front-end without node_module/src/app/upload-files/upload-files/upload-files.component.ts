import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/modules/signin/user.service';
import { UploadFilesService } from '../upload-files.service';

@Component({
  selector: 'upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: []
})
export class UploadFilesComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  currentUser: User;
  @Input()
  xx: boolean = false

  fileInfos?: Observable<any>;

  constructor(private uploadService: UploadFilesService, private _userService: UserService) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
    this.currentUser = this._userService.getCurrentUser();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.upload()
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        // this.uploadService.upload(this.currentFile, this.currentUser.identity).subscribe(
        this.uploadService.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              // this.fileInfos = this.uploadService.getFiles();
            }
            this.fileInfos = this.uploadService.getFiles();
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            }
            else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }

  deleteFile(path): void {
    debugger
    this.uploadService.deleteFile(path).subscribe(
      (event: any) => {
        console.log("dddfddddd");
        this.fileInfos = this.uploadService.getFiles();
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

}
