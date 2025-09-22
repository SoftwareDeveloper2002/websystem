import { Component } from '@angular/core';
import { About } from "../about/about";
import { Contact } from "../contact/contact";
import { Navbar } from "../../shared/navbar/navbar";
import { Sidebar } from "../../shared/sidebar/sidebar";
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-main',
  imports: [About, Contact, Navbar, Sidebar, Footer],
  templateUrl: './main.html'
})
export class Main {

}
