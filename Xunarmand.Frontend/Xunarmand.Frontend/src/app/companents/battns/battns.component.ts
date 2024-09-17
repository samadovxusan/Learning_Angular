import {Component, signal} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-battns',
  standalone: true,
  imports: [MatChipsModule, CdkDropList, MatIcon, MatIconButton, RouterLink],
  templateUrl: './battns.component.html',
  styleUrl: './battns.component.scss'
})

export class BattnsComponent {

  readonly vegetables = signal<Vegetable[]>([
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},



  ]);
  drop(event: CdkDragDrop<Vegetable[]>) {
    this.vegetables.update(vegetables => {
      moveItemInArray(vegetables, event.previousIndex, event.currentIndex);
      return [...vegetables];
    });
  }

}
