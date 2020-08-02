import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  showInfo() {
    this.toastr.info('Info showed', 'Info');
  }

  showSuccess() {
    this.toastr.success('Success showed', 'Success');
  }

  showWarning() {
    this.toastr.warning('Warning showed', 'Warning');
  }

  showError() {
    this.toastr.error('Error showed', 'Error');
  }

}
