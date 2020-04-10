import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { PokeapiService } from 'src/app/service/pokeapi.service';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListComponent
  ],
  providers: [PokeapiService],
})

export class ListModule { }
