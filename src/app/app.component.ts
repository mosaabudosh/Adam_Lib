import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderDataModel } from '../../projects/adam-shared/src/lib/model/headerDataModel';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isDarkMode: boolean = true;
  headerDataModel: HeaderDataModel;
  menuItem: any[] = [];
  isViewMenu: boolean = true;
  isClosedMenu: boolean;
  title: any;
  constructor(
    private translateservice: TranslateService,
    private router: Router,
    private primengConfig: PrimeNGConfig
  ) {
    this.translateservice.use('en');
    this.loadHeaderData();
    this.loadMenuData();
    this.primengConfig.ripple = true;
  }

  loadHeaderData() {
    this.headerDataModel = {
      avatarImage: 'assets/images/avatar.png',
      logoApp: 'assets/images/Logo-App.png',
      isViewMenu: true,
      isViewLogo: true,
      userName: 'User Name',
      items: [
        { label: 'My Profile', icon: "pi pi-user" },
        { label: 'logOut', icon: "pi pi-sign-out" }
      ],
      icons: [
        {
          label: 'settings',
          icon: "pi pi-cog",
          badge: '',
          tooltip: 'settings',
          tooltipPosition: 'bottom',
          visible: true,
          command: (event: any) => {
            console.log('settings')
          }
        },
        {
          label: 'notification',
          icon: "pi pi-bell",
          badge: '100',
          tooltip: 'notification',
          tooltipPosition: 'bottom',
          visible: true,
          command: (event: any) => {
            console.log('notification')
          }
        },
        {
          label: 'chat',
          icon: "pi pi-comments",
          badge: '10',
          tooltip: 'chat',
          tooltipPosition: 'bottom',
          visible: true,
          command: (event: any) => {
            console.log('chat')
          }
        },
        {
          label: 'languge',
          icon: "pi pi-globe",
          tooltip: 'languge',
          tooltipPosition: 'bottom',
          visible: true,
          command: (event: any) => {
            let isEn = this.translateservice.getLangs()[0] == "en";
            console.log(isEn)
            if (isEn) {
              this.translateservice.use('ar');
            } else {
              this.translateservice.use('en');
            }
            console.log('languge')
          }
        },
        {
          label: 'Normal Mode',
          icon: "pi pi-sun",
          tooltip: 'Normal Mode',
          tooltipPosition: 'bottom',
          visible: this.isDarkMode,
          command: (event: any) => {
            this.isDarkMode = false;
            this.loadHeaderData();
            console.log('Normal Mode')
          }
        },
        {
          label: 'Dark Mode',
          icon: "pi pi-moon",
          tooltip: 'Dark Mode',
          tooltipPosition: 'bottom',
          visible: !this.isDarkMode,
          command: (event: any) => {
            this.isDarkMode = true;
            this.loadHeaderData();
            console.log('Dark Mode')
          }
        },
      ]
    }
  }

  loadMenuData() {
    this.menuItem = [
      {
        label: "Menu 1",
        icon: 'pi pi-home',
        expanded: false,
        isActive: false,
        id: 'Master1',
        items: [
          {
            label: 'Level 2',
            icon: 'pi pi-home',
            id: 'Child2',
            parentId: 'Master1',
            isActive: false,
            expanded: false,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Level 2',
            icon: 'pi pi-home',
            id: 'Child1',
            parentId: 'Master1',
            expanded: false,
            isActive: false,
            items: [
              {
                label: 'Level 3',
                icon: 'pi pi-home',
                id: 'Child1',
                parentId: 'Child1',
                isActive: false,
                expanded: false,
                command: (event: any) => {
                  this.onMenuCommandClick(event);
                }
              },
              {
                label: 'Level 3',
                icon: 'pi pi-home',
                id: 'Child2',
                parentId: 'Child1',
                isActive: false,
                expanded: false,
                command: (event: any) => {
                  this.onMenuCommandClick(event);
                }
              },
            ],
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          }
        ],
        command: (event: any) => {
          this.onMenuCommandClick(event);
        }
      },
      {
        label: "Menu 2",
        icon: 'pi pi-home',
        expanded: false,
        isActive: false,
        id: 'Master1',
        items: [
          {
            label: 'Level 2',
            icon: 'pi pi-home',
            id: 'Child2',
            parentId: 'Master1',
            isActive: false,
            expanded: false,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Level 2',
            icon: 'pi pi-home',
            id: 'Child1',
            parentId: 'Master1',
            expanded: false,
            isActive: false,
            items: [
              {
                label: 'Level 3',
                icon: 'pi pi-home',
                id: 'Child1',
                parentId: 'Child1',
                isActive: false,
                expanded: false,
                command: (event: any) => {
                  this.onMenuCommandClick(event);
                }
              },
              {
                label: 'Level 3',
                icon: 'pi pi-home',
                id: 'Child2',
                parentId: 'Child1',
                isActive: false,
                expanded: false,
                command: (event: any) => {
                  this.onMenuCommandClick(event);
                }
              },
            ],
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          }
        ],
        command: (event: any) => {
          this.onMenuCommandClick(event);
        }
      },
      {
        label: "Menu 3",
        icon: 'pi pi-home',
        expanded: false,
        isActive: false,
        id: 'Master1',
        items: [
          {
            label: 'Level 2',
            icon: 'pi pi-home',
            id: 'Child2',
            parentId: 'Master1',
            isActive: false,
            expanded: false,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Level 2',
            icon: 'pi pi-home',
            id: 'Child1',
            parentId: 'Master1',
            expanded: false,
            isActive: false,
            items: [
              {
                label: 'Level 3',
                icon: 'pi pi-home',
                id: 'Child1',
                parentId: 'Child1',
                isActive: false,
                expanded: false,
                command: (event: any) => {
                  this.onMenuCommandClick(event);
                }
              },
              {
                label: 'Level 3',
                icon: 'pi pi-home',
                id: 'Child2',
                parentId: 'Child1',
                isActive: false,
                expanded: false,
                command: (event: any) => {
                  this.onMenuCommandClick(event);
                }
              },
            ],
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          }
        ],
        command: (event: any) => {
          this.onMenuCommandClick(event);
        }
      },
      {
        label: "Menu 4",
        icon: 'pi pi-home',
        expanded: false,
        isActive: false,
        id: 'Master1',
        items: [
          {
            label: 'Level 2',
            icon: 'pi pi-home',
            id: 'Child2',
            parentId: 'Master1',
            isActive: false,
            expanded: false,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Level 2',
            icon: 'pi pi-home',
            id: 'Child1',
            parentId: 'Master1',
            expanded: false,
            isActive: false,
            items: [
              {
                label: 'Level 3',
                icon: 'pi pi-home',
                id: 'Child1',
                parentId: 'Child1',
                isActive: false,
                expanded: false,
                command: (event: any) => {
                  this.onMenuCommandClick(event);
                }
              },
              {
                label: 'Level 3',
                icon: 'pi pi-home',
                id: 'Child2',
                parentId: 'Child1',
                isActive: false,
                expanded: false,
                command: (event: any) => {
                  this.onMenuCommandClick(event);
                }
              },
            ],
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          }
        ],
        command: (event: any) => {
          this.onMenuCommandClick(event);
        }
      },
      {
        label: "Menu 5",
        icon: 'pi pi-home',
        expanded: false,
        isActive: false,
        id: 'Master1',
        items: [
          {
            label: 'Level 2',
            icon: 'pi pi-home',
            id: 'Child2',
            parentId: 'Master1',
            isActive: false,
            expanded: false,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Level 2',
            icon: 'pi pi-home',
            id: 'Child1',
            parentId: 'Master1',
            expanded: false,
            isActive: false,
            items: [
              {
                label: 'Level 3',
                icon: 'pi pi-home',
                id: 'Child1',
                parentId: 'Child1',
                isActive: false,
                expanded: false,
                command: (event: any) => {
                  this.onMenuCommandClick(event);
                }
              },
              {
                label: 'Level 3',
                icon: 'pi pi-home',
                id: 'Child2',
                parentId: 'Child1',
                isActive: false,
                expanded: false,
                command: (event: any) => {
                  this.onMenuCommandClick(event);
                }
              },
            ],
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          }
        ],
        command: (event: any) => {
          this.onMenuCommandClick(event);
        }
      },
      {
        label: "Controles",
        icon: 'pi pi-folder',
        expanded: false,
        isActive: false,
        id: 'Controles',
        command: (event: any) => {
          this.onMenuCommandClick(event);
        },
        items: [
          {
            label: 'Button',
            icon: 'pi pi-bookmark',
            id: 'button',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: '/button',
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Toast',
            icon: 'pi pi-bolt',
            id: 'toast',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: '/toast',
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Form Controle',
            icon: 'pi pi-book',
            id: 'form',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: '/form',
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Tabel',
            icon: 'pi pi-table',
            id: 'Tabel',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: '/tabel',
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Calendar',
            icon: 'pi pi-calendar',
            id: 'calendar',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: '/calendar',
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'CheckBox',
            icon: 'pi pi-check-square',
            id: 'checkbox',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: '/checkbox',
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          }
        ]
      }
    ];

    this.menuItem.map((p: any) => {
      this.isActivationMenuItem(p, null);
    });
    this.menuItem = [...this.menuItem];
  }

  onMenuClick() {
    this.isViewMenu = !this.isViewMenu;
  }

  onChangeClosedMenu(event: any) {
    this.isClosedMenu = event;
  }

  onMenuCommandClick(event: any) {
    if (event && event.url && this.router.url != event.url) {
      this.router.navigate([event.url]);
    }
    event.isActive = true;
    event.expanded = !event.expanded;
    this.menuItem.map((p: any) => {
      event = this.isActivationMenuItem(p, event);
    });
    this.menuItem = [...this.menuItem];
  }

  isActivationMenuItem(menuItem: any, exception: any) {
    if (!exception) {
      if (menuItem.url == location.href.substring(location.href.lastIndexOf('/'))) {
        menuItem.isActive = true;
        if (menuItem.items && menuItem.items.length > 0) {
          menuItem.expanded = true;
        } else if (this.menuItem.some(p => p.id == menuItem.parentId)) {
          this.menuItem.find(p => p.id == menuItem.parentId).expanded = true;
        }
        exception = menuItem;
      }
    } else {
      if (menuItem.id != exception.id) {
        menuItem.isActive = false;
      }
    }
    if (menuItem.items && menuItem.items.length > 0) {
      menuItem.items.map((p: any) => {
        this.isActivationMenuItem(p, exception);
      })
    }
    return exception;
  }

}
