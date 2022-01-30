import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthConfigService } from 'src/config/authconfig.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string = null;

  constructor(private readonly oauthService: OAuthService, private authConfigService: AuthConfigService) { }

  ngOnInit() {
    const userClaims: any = this.oauthService.getIdentityClaims();

    if(userClaims){
      this.name = userClaims.name ? userClaims.name : "";
    }    
  }

  login() {
    this.authConfigService.initAuth();
  }

  logout() {
    this.oauthService.logOut();
  }

  get token(){
    let claims:any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }

}
