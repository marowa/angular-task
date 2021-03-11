import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  //dropdownList = [];
  selectedItems = [];
  searchSelectedItem: string = "";
  dropdownSettings :IDropdownSettings;
  cities: any =[];
  fields: any = [];
  schools: any = [];
  searchByType: any;
  citySelected: any = [];

  constructor (private httpClient: HttpClient){}

  data: any = [];

  ngOnInit() {

    
    this.httpClient.get("assets/prog.json").subscribe(
      data=>{
        //this.arrCities = data as string [];
        console.log(data[2].data);
        this.data = data[2].data;
      },
      (err: HttpErrorResponse)=>{
        console.log(err.message);
      }
    )

    this.cities = [
      { id : 1, text : 'Paris'},
      { id : 2, text : 'Brest'},
      { id : 3, text : 'Hanoi'},
      { id : 4, text : 'Nice'},
      { id : 5, text : 'Berlin'},
      { id : 6, text : 'Nuremberg'},
      { id : 7, text : 'Nancy'},
      { id : 8, text : 'Singapore'},
      { id : 9, text : 'Angers'},
      { id : 10, text : 'Raleigh'},
      { id : 11, text : 'Suzhou'},
      { id : 12, text : 'Lille'},
      { id : 13, text : 'Sophia-Antipolis'},
      { id : 14, text : 'Raleigh'},
      { id : 15, text : 'Belo Horizonte'},
      { id : 16, text : 'Clermont-Ferrand'},
      { id : 17, text : 'Cergy'},
      { id : 18, text : 'Montpellier'},
      { id : 19, text : 'Toulon'},
      { id : 20, text : 'Bordeaux'},
      { id : 21, text : 'Marseille'},
      { id : 22, text : 'Barcelona'},
      { id : 23, text : 'Toulouse'},
      { id : 24, text : 'Nantes'},
      { id : 25, text : 'Iserlohn'},
      { id : 26, text : 'HAMBURG'},
      { id : 27, text : 'DRESDEN'},
      { id : 28, text : 'Bad Honnef'},
      { id : 29, text : 'Lisbon'},
      { id : 30, text : 'Shanghai'},
      { id : 31, text : 'Budapest'},
      { id : 32, text : 'Cognac'},
      { id : 33, text : 'Angoulême'},
      { id : 34, text : 'Rochefort'},
      { id : 35, text : 'Niort'},
      { id : 36, text : 'Tours'},
      { id : 37, text : 'La Rochelle'},
      { id : 38, text : 'Strasbourg'},
      { id : 39, text : 'Oxford'},
      { id : 40, text : 'Caen'},
      { id : 41, text : 'Le Havre'},
      { id : 42, text : 'Lyon'},
      { id : 43, text : 'Rouen'},
      { id : 44, text : 'Reims'},
      { id : 45, text : 'Rennes'}
    ];

    this.fields = [
      { id : 1, text : 'Computer Science & IT'},
      { id : 2, text : 'Artificial Intelligence'},
      { id : 3, text : 'Computer Engineering'},
      { id : 4, text : 'Technolog'},
      { id : 5, text : 'Supply Chain'},
      { id : 6, text : 'Nuclear Engineering, Environemental'},
      { id : 7, text : 'Hospitality, tourism'},
      { id : 8, text : 'International Business'},
      { id : 9, text : 'Business & Management'},
      { id : 10, text : 'Finance'},
      { id : 11, text : 'Arts, Design & Architecture'},
      { id : 12, text : 'Business Analytics'},
      { id : 13, text : 'Marketing'},
      { id : 14, text : 'Aeronautic'},
      { id : 15, text : 'Luxury, Fashion'},
      { id : 16, text : 'Data science'},
      { id : 17, text : 'Engineering'},
      { id : 18, text : 'Engineering & Technology'}
    ];

    this.schools = [
      { id : 1, text : 'EPITA'},
      { id : 2, text : 'IMT Atlantique'},
      { id : 3, text : 'TOULOUSE BUSINESS SCHOOL'},
      { id : 4, text : 'KEDGE BS'},
      { id : 5, text : 'PARIS SCHOOL OF BUSINESS'},
      { id : 6, text : 'AUDENCIA'},
      { id : 7, text : 'Montpellier BS'},
      { id : 8, text : 'EISTI'},
      { id : 9, text : 'ESC CLERMONT'},
      { id : 10, text : 'SKEMA'},
      { id : 11, text : 'ESAIP'},
      { id : 12, text : 'ESSEC'},
      { id : 13, text : 'ICN'},
      { id : 14, text : 'IESEG'},
      { id : 15, text : 'IPAG'},
      { id : 16, text : 'RENNES BUSINESS SCHOOL'},
      { id : 17, text : 'NEOMA'},
      { id : 18, text : 'ECAM Lyon'},
      { id : 19, text : 'ISEP'},
      { id : 20, text : 'EM NORMANDIE'},
      { id : 21, text : 'EXCELIA'},
      { id : 22, text : 'ESSCA'},
      { id : 23, text : 'Nova SBE'},
      { id : 24, text : 'IUBH'},
      { id : 25, text : 'SRH : Germany'},
      { id : 26, text : 'UE Germany'}
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    this.searchSelectedItem = item;
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  } 

  selectedCity(city){
    //console.log(city);  
    this.citySelected= city;

  }

  search(item){
    this.searchByType = item;
    //this.searchSelectedItem = item2
    console.log(this.searchByType);
    //return console.log('ok');
  }

}