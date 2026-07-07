// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product',
//   standalone: true,
//   imports: [],
//   templateUrl: './product.component.html',
//   styleUrl: './product.component.css'
// })
// export class ProductComponent {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
/* import { TopHeaderComponent } from '../top-header/top-header.component'; */

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './product.component.html'
})
export class ProductComponent {

  coreModules: [string, string, string][] = [
    ['receipt', 'Billing', 'Fast, intuitive billing screen built for high-volume counters.'],
    ['package', 'Inventory', 'Track stock levels, batches and variants in real time.'],
    ['shopping-cart', 'Purchase', 'Manage purchase orders and supplier deliveries end-to-end.'],
    ['trending-up', 'Sales', 'Track daily, weekly and monthly sales performance.'],
    ['heart-handshake', 'CRM', 'Build customer profiles and track purchase history.'],
    ['calculator', 'Accounting', 'Simplified books that stay audit-ready year round.'],
    ['truck', 'Supplier', 'Manage supplier ledgers, dues and payment schedules.'],
    ['user', 'Customer', 'Customer database with credit limits and loyalty tracking.'],
    ['wallet', 'Expenses', 'Log and categorize every business expense.'],
    ['arrow-left-right', 'Stock Transfer', 'Move inventory between branches with full traceability.']
  ];

  advModules: [string, string, string][] = [
    ['printer', 'Barcode Printing', 'Design and print custom barcode labels in bulk.'],
    ['qr-code', 'QR Billing', 'Contactless billing with scan-to-pay QR codes.'],
    ['file-text', 'GST Reports', 'One-click GSTR-ready reports for every filing period.'],
    ['bar-chart-3', 'Analytics', 'Deep insights into sales trends and product performance.'],
    ['layout-dashboard', 'Dashboard', 'A single view of your entire business, live.'],
    ['smartphone', 'Mobile App', 'Manage your business on the go, from any device.'],
    ['cloud-upload', 'Cloud Backup', 'Automatic, encrypted backups of every transaction.'],
    ['shield-check', 'Role Management', 'Granular permissions for every team member.'],
    ['tag', 'Offer Management', 'Run discounts, combos and seasonal offers easily.'],
    ['gift', 'Loyalty Points', 'Reward repeat customers automatically.'],
    ['layers', 'Multiple MRP', 'Handle multiple price points per product with ease.'],
    ['bell-ring', 'Reorder Alerts', 'Get notified before stock runs out.'],
    ['calendar-clock', 'Expiry Alerts', 'Track batch expiry dates automatically.'],
    ['credit-card', 'Credit Management', 'Track customer dues and repayment schedules.']
  ];

  ledgerModules: [string, string, string][] = [
    ['book-open', 'Ledger', 'A complete, always up-to-date account ledger.'],
    ['banknote', 'Cash Book', 'Track every cash transaction in real time.'],
    ['landmark', 'Bank Book', 'Reconcile bank transactions without spreadsheets.'],
    ['calendar-days', 'Day Book', 'A daily summary of every transaction, automatically.']
  ];
}
