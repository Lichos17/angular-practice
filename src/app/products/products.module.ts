import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateComponent } from './pages/create/create.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './pages/edit/edit.component';

@NgModule({
  declarations: [DashboardComponent, CreateComponent, EditComponent],
  imports: [CommonModule, ProductsRoutingModule, MaterialModule, FormsModule],
})
export class ProductsModule {}
