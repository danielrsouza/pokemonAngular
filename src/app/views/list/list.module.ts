import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


import { ListComponent } from './list.component';
import { PokeapiService } from 'src/app/service/pokeapi.service';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports: [
    ListComponent
  ],
  providers: [PokeapiService],
})

export class ListModule { }
