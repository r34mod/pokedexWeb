import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() =>{
      this._router.navigate(['/home']);
    }, 4000);
  }

}
