import { Component, OnInit } from '@angular/core';

import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent implements OnInit {

  constructor(private dialogSvc: DialogService) { }

  ngOnInit(): void {
  }

  onDialogSimple(): void {
    const message = 'Hola, soy un Dialog Simple'
    this.dialogSvc.simple(message);
  }

  onDialogConfirm(): void {
    const message = 'eliminar un registro';
    const message2 = 'Registro eliminado exitosamente';

    this.dialogSvc.confirm(message)
      .then(resolve => {
        if (resolve.isConfirmed) {
          this.dialogSvc.success(message2);
        }
      })
  }

  onDialogError(): void {
    const message = 'Así luce un mensaje de error en el sistema';
    this.dialogSvc.error(message);
  }

}
