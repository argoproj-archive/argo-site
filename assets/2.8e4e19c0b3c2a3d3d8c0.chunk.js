webpackJsonp([2],{656:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),__export(n(674))},672:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),i=function(){function CommunityOverviewComponent(){}return CommunityOverviewComponent}();i=o([r.Component({selector:"argo-community-overview",template:n(710),styles:[n(723).toString()]})],i),t.CommunityOverviewComponent=i},673:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),i=function(){function CommunityComponent(){this.pageTitle="Community support, forums, release notes",this.pageDescription="Discuss and contribute to Argo, an open source workflow engine for Kubernetes.  GitHub, Slack and Google groups.",this.settings=this}return CommunityComponent}();i=o([r.Component({selector:"argo-community",template:n(711),styles:[n(724).toString()]})],i),t.CommunityComponent=i},674:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),i=n(54),c=n(233),a=n(673),s=n(672),l=n(675),u=function(){function CommunityModule(){}return CommunityModule}();u=o([r.NgModule({declarations:[a.CommunityComponent,s.CommunityOverviewComponent,l.ReleasesComponent],imports:[c.BaseModule,i.RouterModule.forChild([{path:"",component:a.CommunityComponent,children:[{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:s.CommunityOverviewComponent},{path:"releases",component:l.ReleasesComponent}]}])]})],u),t.default=u},675:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),i=function(){function ReleasesComponent(){}return ReleasesComponent}();i=o([r.Component({selector:"argo-community-releases",template:n(712),styles:[n(725).toString()]})],i),t.ReleasesComponent=i},697:function(e,t){e.exports=".community-overview__logos {\n  margin-bottom: 40px; }\n\n.community-overview ul {\n  margin-left: 3em;\n  margin-bottom: 4em; }\n\n.community-overview li {\n  padding: 8px;\n  color: #4884cd;\n  font-weight: 500; }\n"},698:function(e,t){e.exports=".community {\n  color: #555;\n  background-color: #fbfaff; }\n  .community__content {\n    padding: 60px 0 40px; }\n    .community__content p {\n      line-height: 2;\n      margin-bottom: 30px; }\n    .community__content h2 {\n      font-size: 1.6em;\n      color: #000; }\n"},699:function(e,t){e.exports=""},710:function(e,t){e.exports='<div class="main__container community-overview">\n    <h2>Engaging</h2>\n    <p>The Argo project was started at Applatix. Here are some ways to get engaged - join us!</p>\n    <ul>\n        <li><a href="https://github.com/argoproj/argo" target="_blank">GitHub</a></li>\n        <li><a href="https://groups.google.com/forum/#!forum/argoproj" target="_blank">Google Group</a></li>\n    </ul>\n    <h2>Who is using Argo?</h2>\n    <div class="community-overview__logos">\n        <argo-community-logos></argo-community-logos>\n    </div>\n</div>\n'},711:function(e,t){e.exports='<div class="community">\n    <div class="main__intro">\n        <div class="main__container">\n            <h1>Open source container-native workflow engine for Kubernetes</h1>\n        </div>\n    </div>\n    <div class="main__nav main__nav--hide-sm">\n        <div class="main__container">\n            <a routerLink="./overview" routerLinkActive="active">Community</a>\n            <a routerLink="./releases" routerLinkActive="active">Releases</a>\n        </div>\n    </div>\n    <div class="community__content">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n'},712:function(e,t){e.exports='<div class="main__container">\n    <h2>Argo Versions</h2>\n    <div class="main__box">\n        <h3>Latest Stable</h3>\n        <h6><strong>Version 1.0.0</strong></h6>\n        <a routerLink="/get-started/installation">Install</a>\n    </div>\n</div>\n'},723:function(e,t,n){var o=n(697);"string"==typeof o&&(o=[[e.i,o,""]]);n(92)(o,{});o.locals&&(e.exports=o.locals)},724:function(e,t,n){var o=n(698);"string"==typeof o&&(o=[[e.i,o,""]]);n(92)(o,{});o.locals&&(e.exports=o.locals)},725:function(e,t,n){var o=n(699);"string"==typeof o&&(o=[[e.i,o,""]]);n(92)(o,{});o.locals&&(e.exports=o.locals)}});