// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-industries',
//   standalone: true,
//   imports: [],
//   templateUrl: './industries.component.html',
//   styleUrl: './industries.component.css'
// })
// export class IndustriesComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
/* import { TopHeaderComponent } from '../top-header/top-header.component'; */

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './industries.component.html'
})
export class IndustriesComponent {

  solutions: [string, string, string, string][] = [
    ['store', '#2563EB', 'Retail Store', 'Fast checkout and inventory built for general retail.'],
    ['gem', '#E30613', 'Jewellery Shop', 'Purity, hallmark and making-charge aware billing.'],
    ['utensils', '#F59E0B', 'Restaurant POS', 'Table management, KOT printing and quick billing.'],
    ['shirt', '#10B981', 'Textile Shop', 'Variant-heavy inventory for sizes, colors and fabrics.'],
    ['cookie', '#F59E0B', 'Bakery', 'Perishable stock tracking with expiry alerts.'],
    ['shopping-basket', '#2563EB', 'Supermarket', 'High-volume billing with barcode-first workflows.'],
    ['cpu', '#E30613', 'Electronics', 'Serial number and warranty tracking built in.'],
    ['pill', '#10B981', 'Medical Shop', 'Batch, expiry and schedule-drug compliance.'],
    ['smartphone', '#2563EB', 'Mobile Store', 'IMEI tracking and EMI billing support.'],
    ['footprints', '#F59E0B', 'Footwear', 'Size and style matrix inventory made simple.'],
    ['gift', '#E30613', 'Gift Shop', 'Combo offers and festive season billing.'],
    ['hammer', '#10B981', 'Hardware', 'Bulk unit conversions and supplier-linked stock.']
  ];
}
