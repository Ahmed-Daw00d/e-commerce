import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent {
  id: any;
  item: any;

  constructor(
    router: ActivatedRoute,
    private service: ProductsService,
    private pageRouter: Router
  ) {
    this.id = router.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.getproduct();
  }

  getproduct() {
    try {
      this.item = this.service.allItem.find((res) => res.id == this.id);
      if (this.item == undefined) {
        this.pageRouter.navigate(['products']);
      }
    } catch {
      this.pageRouter.navigate(['error']);
    }
  }
}
