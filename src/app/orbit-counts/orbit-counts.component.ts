import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  satelliteType: string[]= ["Space Debris", "Communication", "Probe","Positioning", "Space Station", "Telescope"]

  constructor() {
   }

  ngOnInit() {
  }

  count(type){
    let counter=0
    for (let i=0; i<this.satellites.length; i++){
      if (this.satellites[i].type.toLowerCase() === type.toLowerCase()){
        counter += 1
      }
    }
    return counter;
  }

  total(){
    return this.satellites.length;
  }

}
