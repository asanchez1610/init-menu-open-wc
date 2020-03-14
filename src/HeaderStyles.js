import { css } from 'lit-element';

export default css`

:host {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #072146;
}

.topnav a {
  float: left;
  display: block;
  color: #fff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

a.logo{
  color: #fff !important;
  padding-right:20px !important;
  text-shadow: 0px 0px 1px #fff;
  font-weight:bold;
}

a.logo:hover{
  color: #fff !important;
  background-color: #072146 !important;

}

.topnav a:hover {
  background-color: #006C6C;
  color: #fff;
}

.topnav a.active {
  background-color: #006C6C;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

`;