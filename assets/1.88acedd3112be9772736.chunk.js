webpackJsonp([1],{658:function(n,e,t){"use strict";function __export(n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}Object.defineProperty(e,"__esModule",{value:!0}),__export(t(683))},680:function(n,e,t){"use strict";var i=this&&this.__decorate||function(n,e,t,i){var o,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,i);else for(var r=n.length-1;r>=0;r--)(o=n[r])&&(l=(a<3?o(l):a>3?o(e,t,l):o(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l};Object.defineProperty(e,"__esModule",{value:!0});var o=t(11),a=function(){function ArchitectureComponent(){}return ArchitectureComponent}();a=i([o.Component({selector:"argo-get-started-architecture",template:t(715),styles:[t(729).toString()]})],a),e.ArchitectureComponent=a},681:function(n,e,t){"use strict";var i=this&&this.__decorate||function(n,e,t,i){var o,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,i);else for(var r=n.length-1;r>=0;r--)(o=n[r])&&(l=(a<3?o(l):a>3?o(e,t,l):o(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l};Object.defineProperty(e,"__esModule",{value:!0});var o=t(11),a=function(){function FeaturesComponent(){}return FeaturesComponent}();a=i([o.Component({selector:"argo-get-started-features",template:t(716),styles:[t(730).toString()]})],a),e.FeaturesComponent=a},682:function(n,e,t){"use strict";var i=this&&this.__decorate||function(n,e,t,i){var o,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,i);else for(var r=n.length-1;r>=0;r--)(o=n[r])&&(l=(a<3?o(l):a>3?o(e,t,l):o(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l};Object.defineProperty(e,"__esModule",{value:!0});var o=t(11),a=function(){function GetStartedComponent(){this.pageTitle="Get started with tutorials, training on workflows for Kubernetes",this.pageDescription="Get started with an overvirew of Argo, an open source workflow engine for Kubernetes. Step through  Installation, Architecture, Features and Tutorials.",this.settings=this}return GetStartedComponent}();a=i([o.Component({selector:"argo-get-started",template:t(717),styles:[t(731).toString()]})],a),e.GetStartedComponent=a},683:function(n,e,t){"use strict";var i=this&&this.__decorate||function(n,e,t,i){var o,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,i);else for(var r=n.length-1;r>=0;r--)(o=n[r])&&(l=(a<3?o(l):a>3?o(e,t,l):o(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l};Object.defineProperty(e,"__esModule",{value:!0});var o=t(11),a=t(54),l=t(233),r=t(682),s=t(685),c=t(680),u=t(681),d=t(686),p=t(684),f=function(){function GetStartedModule(){}return GetStartedModule}();f=i([o.NgModule({declarations:[r.GetStartedComponent,s.OverviewComponent,c.ArchitectureComponent,u.FeaturesComponent,d.TutorialsComponent,p.InstallationComponent],imports:[l.BaseModule,a.RouterModule.forChild([{path:"",component:r.GetStartedComponent,children:[{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:s.OverviewComponent},{path:"architecture",component:c.ArchitectureComponent},{path:"features",component:u.FeaturesComponent},{path:"tutorials",component:d.TutorialsComponent},{path:"installation",component:p.InstallationComponent}]}])]})],f),e.default=f},684:function(n,e,t){"use strict";var i=this&&this.__decorate||function(n,e,t,i){var o,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,i);else for(var r=n.length-1;r>=0;r--)(o=n[r])&&(l=(a<3?o(l):a>3?o(e,t,l):o(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l};Object.defineProperty(e,"__esModule",{value:!0});var o=t(11),a=function(){function InstallationComponent(){}return InstallationComponent.prototype.play=function(){this.showPlayer=!0},InstallationComponent}();a=i([o.Component({selector:"argo-get-started-installation",template:t(718),styles:[t(732).toString()]})],a),e.InstallationComponent=a},685:function(n,e,t){"use strict";var i=this&&this.__decorate||function(n,e,t,i){var o,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,i);else for(var r=n.length-1;r>=0;r--)(o=n[r])&&(l=(a<3?o(l):a>3?o(e,t,l):o(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l};Object.defineProperty(e,"__esModule",{value:!0});var o=t(11),a=function(){function OverviewComponent(){}return OverviewComponent}();a=i([o.Component({selector:"argo-get-started-overview",template:t(719),styles:[t(733).toString()]})],a),e.OverviewComponent=a},686:function(n,e,t){"use strict";var i=this&&this.__decorate||function(n,e,t,i){var o,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(n,e,t,i);else for(var r=n.length-1;r>=0;r--)(o=n[r])&&(l=(a<3?o(l):a>3?o(e,t,l):o(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l};Object.defineProperty(e,"__esModule",{value:!0});var o=t(11),a=function(){function TutorialsComponent(){}return TutorialsComponent}();a=i([o.Component({selector:"argo-get-started-tutorials",template:t(720),styles:[t(734).toString()]})],a),e.TutorialsComponent=a},703:function(n,e){n.exports=".architecture img {\n  margin-bottom: 20px; }\n\n.architecture h3 {\n  font-weight: 500;\n  font-size: 1em;\n  margin: 30px 0 0; }\n\n.architecture ul {\n  padding-left: 10px; }\n\n.architecture li {\n  color: #758692; }\n\n.architecture p {\n  margin: 0; }\n"},704:function(n,e){n.exports="@media screen and (min-width: 768px) {\n  .get-started-features__row {\n    display: flex; } }\n\n.get-started-features__box {\n  padding: .6em; }\n  @media screen and (min-width: 768px) {\n    .get-started-features__box {\n      flex: 1; } }\n  .get-started-features__box .main__box {\n    margin: 0;\n    height: 100%; }\n"},705:function(n,e){n.exports=".get-started {\n  color: #555; }\n  .get-started__content {\n    padding: 60px 0 40px; }\n    .get-started__content p {\n      line-height: 2;\n      margin-bottom: 30px; }\n    .get-started__content h2 {\n      font-size: 1.6em;\n      color: #000; }\n"},706:function(n,e){n.exports="@keyframes show {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.installation {\n  position: relative; }\n  .installation__logo {\n    position: absolute;\n    top: 0;\n    left: calc(50% - 640px - 84px);\n    width: 84px;\n    opacity: 0;\n    animation: show .5s forwards; }\n  .installation__row {\n    margin-bottom: 20px;\n    opacity: 0;\n    animation-name: show;\n    animation-duration: .5s;\n    animation-fill-mode: forwards; }\n    .installation__row:nth-child(1) {\n      animation-delay: 0s; }\n    .installation__row:nth-child(2) {\n      animation-delay: 1s; }\n    .installation__row:nth-child(3) {\n      animation-delay: 2s; }\n    .installation__row:nth-child(4) {\n      animation-delay: 3s; }\n    .installation__row:nth-child(5) {\n      animation-delay: 4s; }\n    .installation__row:nth-child(6) {\n      animation-delay: 5s; }\n    .installation__row:nth-child(7) {\n      animation-delay: 6s; }\n    .installation__row:nth-child(8) {\n      animation-delay: 7s; }\n    .installation__row:nth-child(9) {\n      animation-delay: 8s; }\n    .installation__row:nth-child(10) {\n      animation-delay: 9s; }\n    @media screen and (max-width: 767px) {\n      .installation__row {\n        font-size: .9em; } }\n  .installation__row-bg {\n    display: inline-block;\n    padding: 20px 30px;\n    font-size: 1.16em;\n    line-height: 2;\n    color: #788394;\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n    background-color: #f2f2f9; }\n  .installation pre {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 6px 14px;\n    padding: 8px 14px;\n    font-weight: bold;\n    color: #3e90d1;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.07);\n    white-space: pre-wrap;\n    word-break: break-all; }\n    .installation pre.first {\n      margin-left: 0; }\n  .installation__has-tooltip {\n    position: relative;\n    display: inline-block;\n    color: #4884cd; }\n    .installation__has-tooltip:hover .installation__tooltip {\n      display: block !important; }\n  .installation__tooltip {\n    display: none;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 300px;\n    padding: 8px;\n    color: #ddd;\n    font-size: .6em;\n    background: #333; }\n    .installation__tooltip ul {\n      margin-bottom: 0; }\n  .installation__video {\n    position: relative;\n    overflow: hidden;\n    max-width: 100%;\n    height: auto;\n    margin-top: 30px;\n    padding-bottom: 56.25%;\n    background-color: #000; }\n    .installation__video iframe, .installation__video object, .installation__video embed {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%; }\n  .installation__video-play {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 100px;\n    height: 64px;\n    line-height: 64px;\n    font-size: 24px;\n    text-align: center;\n    color: #fff;\n    background: #474445;\n    border-radius: 10px;\n    cursor: pointer; }\n    .installation__video-play:hover {\n      background-color: #2AA2F2; }\n"},707:function(n,e){n.exports=""},708:function(n,e){n.exports=".tutorials__box {\n  display: block;\n  margin: 1em;\n  padding: 1.2em 1.4em;\n  color: #0055b9;\n  background-color: #fff;\n  border-radius: 4px;\n  border-left: 3px solid #f96822;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  cursor: pointer; }\n  .tutorials__box:hover {\n    color: #0055b9; }\n"},715:function(n,e){n.exports='<div class="main__container">\n    <img src="assets/images/ArgoArchitecture.png" alt="">\n    <div class="architecture">\n        <h3>Argo API Server (aka. AXOPS)</h3>\n        <ul>\n            <li>Serves Argo API</li>\n            <li>YAML verification</li>\n            <li>Manages state needed by UI</li>\n            <li>Handle events from WFE</li>\n            <li>Misc/util logic</li>\n        </ul>\n        <h3>ADC (Admission Controller)</h3>\n        <ul>\n            <li>Limits work in progress. Prevents the system from being overloaded</li>\n            <li>Admits work as resources become available</li>\n            <li>Decides which jobs to admit next (QoS)</li>\n            <li>Launch WFE for new workflows via AX Mon</li>\n            <li>Monitor WFE\'s</li>\n        </ul>\n        <h3>WFE (Workflow Executor)</h3>\n        <ul>\n            <li>\n                Runs a workflow (a graph of sequential and parallel steps)\n                <ul>\n                    <li>Manage workflow state transitions</li>\n                    <li>Launch new steps</li>\n                </ul>\n            </li>\n            <li>One WFE service per workflow and deployment (exits after deployment starts)</li>\n            <li>Restarts itself (via K8s) and failed steps if they are interrupted (e.g. minion restart)</li>\n            <li>Schedules dynamic fixtures</li>\n            <li>Reserves static fixtures</li>\n            <li>Schedules deployments</li>\n        </ul>\n        <h3>Artifact Manager</h3>\n        <ul>\n            <li>Supports querying and searching for artifacts</li>\n            <li>Lifecycle management of artifacts (retention policies etc.)</li>\n            <li>Query/find internal/external artifacts.</li>\n            <li>Serves/manages AXDB table of artifacts</li>\n            <li>Collects and catalogs output artifacts</li>\n        </ul>\n        <h3>Fixture Manager</h3>\n        <ul>\n            <li>Manages a table of static fixtures and persistent volumes</li>\n            <li>Manages reservations for fixtures and volumes (e.g. some fixtures can be shared, others cannot)</li>\n            <li>Create fixtures/volumes (via AX Mon)</li>\n        </ul>\n        <h3>Repo Manager (aka. gateway)</h3>\n        <ul>\n            <li>approval API (merge with AXOPS)</li>\n            <li>Caches git state</li>\n            <li>Provides a query API for git state (commits, branches, etc.)</li>\n        </ul>\n        <h3>Commitdata</h3>\n        <p>Event Trigger</p>\n        <ul>\n            <li>Triggers policies (merge with AX Scheduler, which does the cron jobs today)</li>\n            <li>Events from webhook</li>\n            <li>Polls repos</li>\n            <li>Updates AXDB</li>\n            <li>Submits jobs via AXOPS</li>\n        </ul>\n        <h3>AXDB</h3>\n        <ul>\n            <li>Argo configuration, operational, historical, and stats database</li>\n        </ul>\n        <h3>Kafka</h3>\n        <ul>\n            <li>\n                Collects events\n                <ul>\n                    <li>AX stats</li>\n                    <li>Notification center</li>\n                    <li>WFE events</li>\n                </ul>\n            </li>\n        </ul>\n        <h3>AX Stats</h3>\n        <ul>\n            <li>Talks w/ cadvisor</li>\n            <li>Sends data to Kafka, which saves it in AXDB</li>\n            <li>(eventually replace with prometheus)</li>\n        </ul>\n        <h3>Prometheus</h3>\n        <ul>\n            <li>monitor volume stats</li>\n            <li>filesystem & block device stats (capacity & performances)</li>\n            <li>k8s data from cadvisor</li>\n            <li>Argo stats</li>\n        </ul>\n        <h3>Notification Center</h3>\n        <ul>\n            <li>Processes events from Kafka</li>\n            <li>Logs events to AXDB</li>\n            <li>Distribute events according to system/user preferences including UI</li>\n            <li>(Merge with Notification which does email today)</li>\n        </ul>\n        <h3>Redis</h3>\n        <ul>\n            <li>caching</li>\n            <li>WFE notifications</li>\n        </ul>\n        <h3>AX Mon</h3>\n        <ul>\n            <li>Platform API server (interface to K8s)</li>\n            <li>Abstracts infrastructure services (e.g. K8s & AWS)</li>\n            <li>Create and runs K8s specs</li>\n            <li>Monitor/return job/deployment status</li>\n            <li>Create/modify/delete volumes</li>\n        </ul>\n        <h3>Master Manager</h3>\n        <ul>\n            <li>Monitor the health of the K8s master</li>\n            <li>Terminates unhealthy master</li>\n            <li>Starts new K8s master</li>\n        </ul>\n        <h3>Minion Manager</h3>\n        <ul>\n            <li>Monitors health of all minions</li>\n            <li>Terminates unhealthy minions (ASG\'s automatically start minions)</li>\n            <li>Monitors spot prices, submits bids, switches to on-demand when prices are high</li>\n            <li>Switches back to spot instances when prices drop</li>\n            <li>Reports hourly spot prices for each instance</li>\n        </ul>\n        <h3>Pod Executors (artifacts)</h3>\n        <ul>\n            <li>\n                Init container\n                <ul>\n                    <li>Unpack artifact</li>\n                    <li>Setup env vars</li>\n                    <li>Replaces user entrypoint with wrapper entrypoint</li>\n                </ul>\n            </li>\n            <li>\n                user container wrapper\n                <ul>\n                    <li>Setup env vars</li>\n                    <li>Invoke user entrypoint</li>\n                    <li>Tar output artifacts</li>\n                    <li>Record exit status</li>\n                    <li>Inform wait container that we\'re done</li>\n                </ul>\n            </li>\n            <li>\n                Wait container\n                <ul>\n                    <li>Collect live log from K8s</li>\n                    <li>Upload logs/artifacts</li>\n                    <li>Report status to WFE</li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</div>\n'},716:function(n,e){n.exports='<div class="main__container">\n    <div class="get-started-features">\n        <div class="get-started-features__row">\n            <div class="get-started-features__box">\n                <div class="main__box">\n                    <h3>Open source container-native workflow engine built for Kubernetes</h3>\n                    <p>Develop and deploy applications on Kubernetes as simple and as reliable as possible. Run thousands of concurrent containerized workflows ultra-fast.</p>\n                    <ul>\n                        <li>Each step in the workflow is a container</li>\n                        <li>Arbitrarily compose sub-workflows to create larger workflows</li>\n                        <li>Configuration as code (YAML for everything)</li>\n                        <li>No need to learn tools such as Jenkins, Chef, Cloud Formation</li>\n                    </ul>\n                </div>\n            </div>\n            <div class="get-started-features__box">\n                <div class="main__box">\n                    <h3>Docker-in-Docker</h3>\n                    <ul>\n                        <li>Run DinD (Docker-in-Docker) out of the box</li>\n                        <li>Run Docker builds and other containers from within containerized workflows</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class="get-started-features__row">\n            <div class="get-started-features__box">\n                <div class="main__box">\n                    <h3>Built-in artifact management</h3>\n                    <ul>\n                        <li>Integrated artifact management for storing and passing artifacts</li>\n                        <li>Easily "pass" and reference artifacts between steps in workflows</li>\n                    </ul>\n                </div>\n            </div>\n            <div class="get-started-features__box">\n                <div class="main__box">\n                    <h3>Built-in secret management</h3>\n                    <ul>\n                        <li>Define, store, and access secrets from workflows</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class="get-started-features__row">\n            <div class="get-started-features__box">\n                <div class="main__box">\n                    <h3>Lifecycle management of resources</h3>\n                    <ul>\n                        <li>Managed fixtures – workflow driven lifecycle management for external services</li>\n                        <li>Dynamically create and use containerized services in workflows</li>\n                        <li>Define and create arbitrary external services in YAML</li>\n                    </ul>\n                </div>\n            </div>\n            <div class="get-started-features__box">\n                <div class="main__box">\n                    <h3>Integrated with cloud services</h3>\n                    <ul>\n                        <li>Auto scaling groups, spot instances, DNS, load balancers</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class="get-started-features__row">\n            <div class="get-started-features__box">\n                <div class="main__box">\n                    <h3>Interfaces</h3>\n                    <ul>\n                        <li>CLI</li>\n                        <li>REST APIs and SDK (Python coming soon)</li>\n                        <li>Simple to use GUI</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'},717:function(n,e){n.exports='<div class="get-started">\n    <div class="main__intro">\n        <div class="main__container">\n            <h1>Open source container-native workflow engine for Kubernetes</h1>\n        </div>\n    </div>\n    <div class="main__nav main__nav--hide-sm">\n        <div class="main__container">\n            <a routerLink="./overview" routerLinkActive="active">Overview</a>\n            <a routerLink="./architecture" routerLinkActive="active">Architecture</a>\n            <a routerLink="./features" routerLinkActive="active">Features</a>\n            <a routerLink="./installation" routerLinkActive="active">Installation</a>\n            <a routerLink="./tutorials" routerLinkActive="active">Tutorials</a>\n        </div>\n    </div>\n    <div class="get-started__content">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n'},718:function(n,e){n.exports='<div class="installation">\n    <div class="main__container">\n        <div class="installation__logo">\n            <img src="assets/images/ArgoPro.svg" alt="Argo">\n        </div>\n        <div class="installation__chat">\n            <div class="installation__row">\n                <div class="installation__row-bg">\n                    Argo is super simple to install and set up! Check these\n                    <span class="installation__has-tooltip">prerequisites\n                    <span class="installation__tooltip">\n                        <ul>\n                            <li>Make sure you have an AWS account with Minimum resource quota requirements for Argo running in AWS.\n                            <li>Docker client is installed on your client system.</li>\n                            <li>AWS Command-Line Interface (CLI) is installed on your client system.</li>\n                        </ul>\n                    </span>\n                </span> before you start the installation.\n                </div>\n            </div>\n            <div class="installation__row">\n                <div class="installation__row-bg">\n                    For Mac<br>\n                    <pre class="first">curl -sSL -O https://s3-us-west-1.amazonaws.com/ax-public/argocli/stable/darwin_amd64/argo</pre><br>\n                    For Linux<br>\n                    <pre class="first">curl -sSL -O https://s3-us-west-1.amazonaws.com/ax-public/argocli/stable/linux_amd64/argo</pre>\n                </div>\n            </div>\n            <div class="installation__row">\n                <div class="installation__row-bg">\n                    <pre class="first">chmod +x argo</pre>\n                </div>\n            </div>\n            <div class="installation__row">\n                <div class="installation__row-bg">\n                    Then <pre>./argo cluster</pre> to open the Argo Command Shell\n                </div>\n            </div>\n            <div class="installation__row">\n                <div class="installation__row-bg">\n                    Once you get the prompt, <pre>argo cluster ops> argocluster install </pre> to start the installation\n                </div>\n            </div>\n            <div class="installation__row">\n                <div class="installation__row-bg">\n                    Then enter a name for your cluster and your AWS profile details. Your cluster would be ready in about 20 minutes.\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="installation__video" (click)="play()">\n        <div class="installation__video-play"><i class="fa fa-play"></i></div>\n        <iframe *ngIf="showPlayer" src="https://player.vimeo.com/video/230650625?autoplay=1" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n    </div>\n</div>\n'},719:function(n,e){n.exports='<div class="main__container">\n    <p>Argo is an open source project to provide container-native workflows for Kubernetes. Each step in an Argo workflow is defined as a container. Argo integrates artifact management, admission control, "fixtures," and source code management to create a complete, easy to use system that can be used for a variety of workflow-driven tasks ranging from continuous integration to orchestration and lifecycle management of complex distributed applications.</p>\n    <p>Argo helps you use Docker containers, Kubernetes orchestration, and public cloud APIs without the pain of configuration, maintenance, and upgrades. Driven by YAML templates written in the Argo DSL (Domain Specific Language), argo handles the complexity of deploying, running, and managing containers at scale.</p>\n    <h2>Concepts</h2>\n    <div class="main__box">\n        <h3>Admission Control</h3>\n        <ul>\n            <li>Delays workflows until there are sufficient resources to run the workflow.</li>\n            <li>Allows implementation of QoS (Quality of Service) controls.</li>\n            <li>Prevents overloading Kubernetes with too much work that cannot be scheduled.</li>\n            <li>Prevents resource deadlocks when executing complex workflows.</li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>Workflow</h3>\n        <ul>\n            <li>An argo workflow consists of a sequence of sequential and/or parallel steps.</li>\n            <li>A workflow may be arbitrarily nested.</li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>Step</h3>\n        <ul>\n            <li>A step is the basic execution unit of a workflow.</li>\n            <li>A step is executed by running a container.</li>\n            <li>A step itself may be a workflow, which contains other steps.</li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>Artifact</h3>\n        <ul>\n            <li>An artifact is a collection of files/directories that can be used as input or output to a step in a workflow.</li>\n            <li>Artifacts may be "internal", in which case they may be referenced only within the execution of a particular workflow.</li>\n            <li>Internal artifacts are automatically garbage collected after 7 days.</li>\n            <li>Exported artifacts may be referenced by other workflows.</li>\n            <li>Exported artifacts are automatically garbage collected after 6 months.</li>\n            <li>Any "tagged" artifacts are retained indefinitely and must be manually deleted.</li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>Fixture</h3>\n        <ul>\n            <li>A service needed to run a workflow.\n                <ul>\n                    <li>E.g. A mysql service needed to run a test.</li>\n                </ul>\n            </li>\n            <li>A dynamic fixture is created automatically by the system before executing a workflow by running a specified container that implements the service.</li>\n            <li>\n                A static fixture can be any service that is registered with the Argo system.\n                <ul>\n                    <li>E.g. A Windows VM running SQL Server or any accessible SaaS service.</li>\n                </ul>\n            </li>\n            <li>\n                A static fixture is specified using labels.\n                <ul>\n                    <li>E.g. mem=2mib os=Windows</li>\n                    <li>E.g. db=RDS</li>\n                </ul>\n            </li>\n            <li>\n                A static fixture may be "exclusive" or "shared".\n                <ul>\n                    <li>\n                        An exclusive fixture may only be used by one workflow at a time.\n                        <ul>\n                            <li>Workflows that need a static fixture will wait until it becomes available.</li>\n                        </ul>\n                    </li>\n                    <li>A shared fixture may be used by multiple resources concurrently.</li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>Volume</h3>\n        <ul>\n            <li>A persistent volume used to store data used by workflows.</li>\n            <li>An anonymous volume exists only within the context of a specific executing workflow.</li>\n            <li>A named volume exists independently of workflows.</li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>CMDB (Configuration Management Database aka. AXDB)</h3>\n        <ul>\n            <li>Stores the configuration and operational state of all Argo component and services including active workflows, fixtures, etc.</li>\n            <li>Currently also stores stats but much of that will be moving to Prometheus.</li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>Secret</h3>\n        <ul>\n            <li>An encrypted string that can be included in Argo templates to avoid exposing the secret in source repos.</li>\n            <li>The secret is decrypted just prior to when it is used during the execution of a workflow.</li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>Configuration Parameter</h3>\n        <ul>\n            <li>A parameter that is stored in CMDB and can be referenced by name from within Argo templates.</li>\n            <li>Avoids having to hardwire parameters in source repos.</li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>Policy</h3>\n        <ul>\n            <li>An Argo policy template is used to specify automatically triggered workflows.</li>\n            <li>\n                Common triggers include:\n                <ul>\n                    <li>Time based (e.g. cron)</li>\n                    <li>Commits, pull requests, merges to repos</li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>Project</h3>\n        <ul>\n            <li>An Argo project template is used to create a catalog of workflows that can be executed by users.</li>\n            <li>This allows convenient grouping and identification of commonly used workflows.</li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>Repo</h3>\n        <ul>\n            <li>Generally used to refer to a git repository.</li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>Commit</h3>\n        <ul>\n            <li>Generally refers to a commit made to a git repository.</li>\n        </ul>\n    </div>\n    <div class="main__box">\n        <h3>Image</h3>\n        <ul>\n            <li>A Docker container image.</li>\n        </ul>\n    </div>\n</div>\n'},720:function(n,e){n.exports='<div class="main__container">\n    <div class="tutorials">\n        <argo-nav-button title="Create CI Workflow" [routerLink]="[\'/docs\', {doc: \'yaml%2Fargo_tutorial_1_create_ci_workflow.md\'}]"></argo-nav-button>\n        <argo-nav-button title="Build Docker Image and Deploy Workflow" [routerLink]="[\'/docs\', {doc: \'yaml%2Fargo_tutorial_2_create_docker_image_build_workflow.md\'}]"></argo-nav-button>\n        <argo-nav-button title="Deploy a Stateless App" [routerLink]="[\'/docs\', {doc: \'yaml%2Fargo_tutorial_3_deploy_stateless_mlb_app.md\'}]"></argo-nav-button>\n        <argo-nav-button title="Deploy a Stateful App" [routerLink]="[\'/docs\', {doc: \'yaml%2Fargo_tutorial_4_deploy_stateful_odoo_app_volume.md\'}]"></argo-nav-button>\n        <argo-nav-button title="Deploy Stateful App with AWS RDS" [routerLink]="[\'/docs\', {doc: \'yaml%2Fargo_tutorial_5_deploy_stateful_odoo_app_rds.md\'}]"></argo-nav-button>\n        <argo-nav-button title="Running Nested Workflows" [routerLink]="[\'/docs\', {doc: \'yaml%2Fargo_tutorial_6_execute_selenium_tests.md\'}]"></argo-nav-button>\n        <argo-nav-button title="Deploy Microservices-based App" [routerLink]="[\'/docs\', {doc: \'yaml%2Fargo_tutorial_7_deploy_microservices_sockshop_app.md\'}]"></argo-nav-button>\n    </div>\n</div>\n'},729:function(n,e,t){var i=t(703);"string"==typeof i&&(i=[[n.i,i,""]]);t(92)(i,{});i.locals&&(n.exports=i.locals)},730:function(n,e,t){var i=t(704);"string"==typeof i&&(i=[[n.i,i,""]]);t(92)(i,{});i.locals&&(n.exports=i.locals)},731:function(n,e,t){var i=t(705);"string"==typeof i&&(i=[[n.i,i,""]]);t(92)(i,{});i.locals&&(n.exports=i.locals)},732:function(n,e,t){var i=t(706);"string"==typeof i&&(i=[[n.i,i,""]]);t(92)(i,{});i.locals&&(n.exports=i.locals)},733:function(n,e,t){var i=t(707);"string"==typeof i&&(i=[[n.i,i,""]]);t(92)(i,{});i.locals&&(n.exports=i.locals)},734:function(n,e,t){var i=t(708);"string"==typeof i&&(i=[[n.i,i,""]]);t(92)(i,{});i.locals&&(n.exports=i.locals)}});