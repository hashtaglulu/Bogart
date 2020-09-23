import { Component, OnInit } from '@angular/core';

import { Pub } from './pub.model';
import { PubsService } from './pubs.service';

@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.page.html',
  styleUrls: ['./pubs.page.scss'],
})
export class PubsPage implements OnInit {
 pubs: Pub[];
  constructor(private pubsService: PubsService) { }

  ngOnInit() {
    this.pubs = this.pubsService.getAllPubs();
  }

}
