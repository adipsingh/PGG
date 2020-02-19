
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureRoutingModule } from './routing-secure';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { OrganisationDetailsComponent } from './org-details/organisation-details.component';
import { ProductionUnitDetailsComponent } from './production-unit-details/production-unit-details.component';
import { ManagementDetailsComponent } from './management-details/management-details.component';
// tslint:disable-next-line: max-line-length
import { OrganisationOfficesLocatonsDetailsComponent } from './org-off-loc-details/organisation-offices-locatons-details.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { EmployeeInformationDetailsComponent } from './emp-info-details/employee-information-details.component';
import { SuppliersDetailsComponent } from './suppliers-details/suppliers-details.component';
import { CentreAreasandVillagesComponent } from './centre-areasand-villages/centre-areasand-villages.component';
import { CropsandschemesComponent } from './cropsandschemes/cropsandschemes.component';
import { RawMaterialMasterComponent } from './raw-material-master/raw-material-master.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { FarmersAgreementComponent } from './farmers-agreement/farmers-agreement.component';
import { FeedandInputTransferComponent } from './feedand-input-transfer/feedand-input-transfer.component';
import { PlantationSchedulingComponent } from './plantation-scheduling/plantation-scheduling.component';
import { RawMaterialStocksComponent } from './raw-material-stocks/raw-material-stocks.component';
import { CropRateComponent } from './crop-rate/crop-rate.component';
import { FieldstaffdetailsComponent } from './fieldstaffdetails/fieldstaffdetails.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { NewPoComponent } from './new-po/new-po.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [
    FarmersAgreementComponent,
    FeedandInputTransferComponent,
    PlantationSchedulingComponent,
    RawMaterialStocksComponent,
    OrganisationDetailsComponent,
    ProductionUnitDetailsComponent,
    ManagementDetailsComponent,
    OrganisationOfficesLocatonsDetailsComponent,
    FarmerDetailsComponent,
    EmployeeInformationDetailsComponent,
    SuppliersDetailsComponent,
    CentreAreasandVillagesComponent,
    CropsandschemesComponent,
    RawMaterialMasterComponent,
    ProductAddComponent,
    CropRateComponent,
    FieldstaffdetailsComponent,
    PurchaseOrderComponent,
    NewPoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SecureRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})

export class SecureModule { }
