
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {OnlineTestModel} from '../../model/online-test/online-test.model';
import { OnlineTestService } from '../../services/online-test/online-test.service';
@Component({
  moduleId: module.id,
  selector: 'online-test',
  templateUrl: 'online-test.component.html',
})
export class OnlineTestComponent {
  private model: OnlineTestModel;
  online_test_id: any;
  paramsSub: any;
  constructor(private service: OnlineTestService, private activatedRoute: ActivatedRoute) {
    //this.model = new Array<CompanyModel>
    this.bydefault();
    
  }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => {
      this.online_test_id = Number.parseInt(params['id'], 10);
      if (this.online_test_id > 0)
        this.getOnlineTestByID(this.online_test_id);
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  bydefault() {
    this.model = new OnlineTestModel();
    this.model.online_test_id = 0;
    this.model.company_id = 1;
    this.model.online_test_title = "";
    this.model.test_start_date = "";
    this.model.test_start_time = "";
    this.model.test_end_date = "";
    this.model.test_end_time = "";
    this.model.question_set_id = 0;
    this.model.test_support_text = "";
    this.model.test_experience_years = 2016;
    this.model.created_by = 'Vipin';
    this.model.updated_by = 'Vipin';
  }

  addOnlineTest() {

    // if (this.model.company_title == "") {
    //   alert("Please enter company title.");
    //   return;
    // }
    // if( this.model.company_address ==  ""){
    //     alert("Please enter company address");
    //       return;
    // }
    // if( this.model.company_phone  ==  ""){
    //     alert("Please enter company phone");
    //       return;
    // }
    // if (this.model.company_url == "") {
    //   alert("Please enter company url.");
    //   return;
    // }

    // if (this.model.company_email == "") {
    //   alert("Please enter company title.");
    //   return;
    // }

    // if (this.model.company_hr_phone == "") {
    //   alert("Please enter company hr phone.");
    //   return;
    // }

    // if (this.model.company_hr_emailid == "") {
    //   alert("Please enter company hr emailID.");
    //   return;
    // }

    this.service.saveOnlineTest(this.model).then(result => {
      if (result) {
        alert("Company saved successfully.!");
        this.model.online_test_id = 0;
        this.model.company_id = 0;
        this.model.online_test_title = "";
        this.model.test_start_date = "";
        this.model.test_start_time = "";
        this.model.test_end_date = "";
        this.model.test_end_time = "";
        this.model.question_set_id = 0;
        this.model.test_support_text = "";
        this.model.test_experience_years =2016;
      }
      else {
        alert(result);
      }
    });

  }

  getOnlineTestByID(id: any) {
    this.service.getOnlineTestById(id).then(result => {
      this.model = result;
    })
  }


}