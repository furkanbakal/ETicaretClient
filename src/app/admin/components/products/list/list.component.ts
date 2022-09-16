import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { ListProduct } from 'src/app/contracts/list_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {

  constructor(private productService: ProductService,
              spinner: NgxSpinnerService,
              private alertifyService: AlertifyService) {
                super(spinner);
               }
  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updatedDate'];
  dataSource: MatTableDataSource<ListProduct> = null;
  

  async ngOnInit() {
    this.showSpinner(SpinnerType.BallAtom)
    await this.productService.getList(() => this.hideSpinner(SpinnerType.BallAtom),
                                errorMessage => this.alertifyService.message(errorMessage, {
                                  dismissOthers: true,
                                  messageType: MessageType.Error,
                                  position: Position.TopRight
                                }))
  }

}
