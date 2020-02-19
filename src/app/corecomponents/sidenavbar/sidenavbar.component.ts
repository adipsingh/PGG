import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MetaDataService } from '../../services/metadata/meta-data.service';
import { TypeList } from '../../services/metadata/typelist.modal';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    public metaservice: MetaDataService
  ) {
    this.menuList = new TypeList();

  }

  public menuList: TypeList;

  ngOnInit() {
    this.menuList = this.metaservice.getMenuList();
  }

}
