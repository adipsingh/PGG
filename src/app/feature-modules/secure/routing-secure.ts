
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationDetailsComponent } from './org-details/organisation-details.component';
import { ProductionUnitDetailsComponent } from './production-unit-details/production-unit-details.component';
import { ManagementDetailsComponent } from './management-details/management-details.component';
import { OrganisationOfficesLocatonsDetailsComponent } from './org-off-loc-details/organisation-offices-locatons-details.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { EmployeeInformationDetailsComponent } from './emp-info-details/employee-information-details.component';
import { SuppliersDetailsComponent } from './suppliers-details/suppliers-details.component';
import { CentreAreasandVillagesComponent } from './centre-areasand-villages/centre-areasand-villages.component';
import { CropsandschemesComponent } from './cropsandschemes/cropsandschemes.component';
import { RawMaterialMasterComponent } from './raw-material-master/raw-material-master.component';
import { RawMaterialStocksComponent } from './raw-material-stocks/raw-material-stocks.component';
import { FarmersAgreementComponent } from './farmers-agreement/farmers-agreement.component';
import { PlantationSchedulingComponent } from './plantation-scheduling/plantation-scheduling.component';
import { FeedandInputTransferComponent } from './feedand-input-transfer/feedand-input-transfer.component';
import { CropRateComponent } from './crop-rate/crop-rate.component';
import { FieldstaffdetailsComponent } from './fieldstaffdetails/fieldstaffdetails.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { NewPoComponent } from './new-po/new-po.component';

const routes: Routes = [
  {
    path: 'organisation-details',
    component: OrganisationDetailsComponent
  },
  {
    path: 'production-unit-details',
    component: ProductionUnitDetailsComponent
  },
  {
    path: 'management-details',
    component: ManagementDetailsComponent
  },
  {
    path: 'organisation-offices-locatons-details',
    component: OrganisationOfficesLocatonsDetailsComponent
  },
  {
    path: 'farmer-details',
    component: FarmerDetailsComponent
  },
  {
    path: 'employee-information-details',
    component: EmployeeInformationDetailsComponent
  },
  {
    path: 'suppliers-details',
    component: SuppliersDetailsComponent
  },
  {
    path: 'centre-areasand-villages',
    component: CentreAreasandVillagesComponent
  },
  {
    path: 'cropsandschemes',
    component: CropsandschemesComponent
  },
  {
    path: 'raw-material-master',
    component: RawMaterialMasterComponent
  },
  {
    path: 'raw-material-stocks',
    component: RawMaterialStocksComponent
  },
  {
    path: 'farmers-agreement',
    component: FarmersAgreementComponent
  },
  {
    path: 'plantation-scheduling',
    component: PlantationSchedulingComponent
  },
  {
    path: 'feedand-input-transfer',
    component: FeedandInputTransferComponent
  },
  {
    path: 'crop-rate',
    component: CropRateComponent
  },
  {
    path: 'fieldstaffdetails',
    component: FieldstaffdetailsComponent
  },
  {
    path: 'purchase-order',
    component: PurchaseOrderComponent
  },
  {
    path: 'new-po',
    component: NewPoComponent
  }



//
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule {
}

