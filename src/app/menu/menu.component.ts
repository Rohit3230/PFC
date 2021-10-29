import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
  ) { 

   

  }

  
  @ViewChild('exampleModal') exampleModal: any;
  selectedItrm: any;
  currentRate = 3.14;
  mainObj: any = [
    {
      catName: 'Recommended', catDes: '', catInfo: {
        items: [
          {
            itemId:1,
            itemName:'Italian Maxican Pizza',
            itemMrp:200,
            itemPrs:199.20,
            itemRating:3.14,
            itemDiscPer:20,
            itemDesc:'Paneer, Onion, tomato, jalapeno, black olives, red paprika and extra chees',
            itemIsRecomm:true,
            itemSelected:true,
            isCustomizable:true
          },
          {
            itemId:2,
            itemName:'7 Heaven Pizza',
            itemMrp:0,
            itemPrs:0,
            itemRating:4,
            itemDiscPer:20,
            itemDesc:'',
            itemIsRecomm:true
          },
          {
            itemId:2,
            itemName:'Napoli Pizza',
            itemMrp:0,
            itemPrs:0,
            itemRating:2,
            itemDiscPer:20,
            itemDesc:'',
            itemIsRecomm:true
          },
        ]
      }
    },
    {
      catName: 'Pizza', catDes: '', catInfo: {
        items: []
      }
    },
    {
      catName: 'Burgers', catDes: '', catInfo: {
        items: []
      }
    },
    {
      catName: 'Snacks', catDes: '', catInfo: {
        items: []
      }
    },
  ]

  ngOnInit(): void {
  }

  selectCategoryItem(categoryObj : any , categoryItem : any){
    console.log('categoryObj***',categoryObj);
    console.log('categoryItem***',categoryItem);
    // categoryItem.itemSelected = !categoryItem.itemSelected;
 
    this.modalService.open(this.exampleModal, { ariaLabelledBy: 'modal-basic-title', centered: true })
    this.selectedItrm = categoryItem;
  }

}
