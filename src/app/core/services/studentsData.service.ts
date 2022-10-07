import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {
  constructor() {}

  private studentsData = [
    // Students when they are Picked UP
    // { 'id': 0, 'name': 'Clare Cornau', 'nid': '892', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false },
    // { 'id': 1, 'name': 'Edouard Elsmore', 'nid': '958', 'isReady': true, 'isAvailableForCall': true, 'isPickedToday': false },
    // { 'id': 2, 'name': 'Aeriel Elldred', 'nid': '722', 'isReady': true, 'isAvailableForCall': true, 'isPickedToday': true },
    // { 'id': 3, 'name': 'Abagael Meachem', 'nid': '62', 'isReady': true, 'isAvailableForCall': true, 'isPickedToday': false },
    // { 'id': 4, 'name': 'Jeremiah Hadwen', 'nid': '65', 'isReady': false, 'isAvailableForCall': true, 'isPickedToday': true },
    // { 'id': 5, 'name': 'Rollin Wainscoat', 'nid': '733', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false },
    // { 'id': 6, 'name': 'Micah Braddock', 'nid': '861', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': true },
    // { 'id': 7, 'name': 'Jayme Crotty', 'nid': '8143', 'isReady': false, 'isAvailableForCall': true, 'isPickedToday': true },
    // { 'id': 8, 'name': 'Margo Braker', 'nid': '928', 'isReady': false, 'isAvailableForCall': true, 'isPickedToday': true },
    // { 'id': 9, 'name': 'Bertie Bosman', 'nid': '25', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false },
    // { 'id': 10, 'name': 'Darelle Rowlands', 'nid': '7', 'isReady': false, 'isAvailableForCall': false, 'isPickedToday': true },
    // { 'id': 11, 'name': 'Neile Keets', 'nid': '12', 'isReady': false, 'isAvailableForCall': true, 'isPickedToday': true },
    // { 'id': 12, 'name': 'Shari Bussen', 'nid': '720', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false },
    // { 'id': 13, 'name': 'Arron Drivers', 'nid': '4', 'isReady': false, 'isAvailableForCall': true, 'isPickedToday': true },
    // { 'id': 14, 'name': 'Carola Balasin', 'nid': '7', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false },
    // { 'id': 15, 'name': 'Clarinda Barrick', 'nid': '600', 'isReady': false, 'isAvailableForCall': false, 'isPickedToday': true },
    // { 'id': 16, 'name': 'Inglis Treweela', 'nid': '83', 'isReady': false, 'isAvailableForCall': true, 'isPickedToday': true },
    // { 'id': 17, 'name': 'Yardley Georgeot', 'nid': '967', 'isReady': true, 'isAvailableForCall': true, 'isPickedToday': false },
    // { 'id': 18, 'name': 'Hestia Palffrey', 'nid': '8', 'isReady': false, 'isAvailableForCall': false, 'isPickedToday': true },
    // { 'id': 19, 'name': 'Gwendolyn Mordon', 'nid': '474', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false },

    // Students when they are NOT Picked UP
    { 'id': 0, 'name': 'Clare Cornau', 'nid': '892', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false },
    { 'id': 1, 'name': 'Edouard Elsmore', 'nid': '958', 'isReady': true, 'isAvailableForCall': true, 'isPickedToday': false },
    { 'id': 2, 'name': 'Aeriel Elldred', 'nid': '722', 'isReady': true, 'isAvailableForCall': true, 'isPickedToday': false },
    { 'id': 3, 'name': 'Abagael Meachem', 'nid': '62', 'isReady': true, 'isAvailableForCall': true, 'isPickedToday': false },
    { 'id': 4, 'name': 'Jeremiah Hadwen', 'nid': '65', 'isReady': false, 'isAvailableForCall': true, 'isPickedToday': false },
    { 'id': 5, 'name': 'Rollin Wainscoat', 'nid': '733', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false },
    { 'id': 6, 'name': 'Micah Braddock', 'nid': '861', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false },
    { 'id': 7, 'name': 'Jayme Crotty', 'nid': '8143', 'isReady': false, 'isAvailableForCall': true, 'isPickedToday': false },
    { 'id': 8, 'name': 'Margo Braker', 'nid': '928', 'isReady': false, 'isAvailableForCall': true, 'isPickedToday': false },
    { 'id': 9, 'name': 'Bertie Bosman', 'nid': '25', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false },
    { 'id': 10, 'name': 'Darelle Rowlands', 'nid': '7', 'isReady': false, 'isAvailableForCall': false, 'isPickedToday': false },
    { 'id': 11, 'name': 'Neile Keets', 'nid': '12', 'isReady': false, 'isAvailableForCall': true, 'isPickedToday': false },
    { 'id': 12, 'name': 'Shari Bussen', 'nid': '720', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false },
    { 'id': 13, 'name': 'Arron Drivers', 'nid': '4', 'isReady': false, 'isAvailableForCall': true, 'isPickedToday': false },
    { 'id': 14, 'name': 'Carola Balasin', 'nid': '7', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false },
    { 'id': 15, 'name': 'Clarinda Barrick', 'nid': '600', 'isReady': false, 'isAvailableForCall': false, 'isPickedToday': false },
    { 'id': 16, 'name': 'Inglis Treweela', 'nid': '83', 'isReady': false, 'isAvailableForCall': true, 'isPickedToday': false },
    { 'id': 17, 'name': 'Yardley Georgeot', 'nid': '967', 'isReady': true, 'isAvailableForCall': true, 'isPickedToday': false },
    { 'id': 18, 'name': 'Hestia Palffrey', 'nid': '8', 'isReady': false, 'isAvailableForCall': false, 'isPickedToday': false },
    { 'id': 19, 'name': 'Gwendolyn Mordon', 'nid': '474', 'isReady': true, 'isAvailableForCall': false, 'isPickedToday': false }
  ];

  get student() {
    return this.studentsData;
  }
}