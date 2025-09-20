import { Component } from '@angular/core';
import { About } from "../about/about";
import { Contact } from "../contact/contact";
import { Navbar } from "../../shared/navbar/navbar";
import { Sidebar } from "../../shared/sidebar/sidebar";
@Component({
  selector: 'app-main',
  imports: [About, Contact, Navbar, Sidebar],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
