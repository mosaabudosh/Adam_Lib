import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderDataModel } from '../../projects/adam-shared/src/lib/model/headerDataModel';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Languge } from '../../projects/adam-shared/src/lib/enum/enums';
import { ScreensURL } from './enum/enums';

@Component({
  selector: 'app-root',
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
  currentLanguages: string;

  constructor(
    private translateservice: TranslateService,
    private router: Router,
    private primengConfig: PrimeNGConfig
  ) {
    this.translateservice.setDefaultLang(Languge.en);
    this.translateservice.use(Languge.en);
    this.currentLanguages = Languge.en;
    this.changeLanguage();
    this.primengConfig.ripple = true;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.add('normal-mode');
    }
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
            if (this.currentLanguages == Languge.en) {
              this.currentLanguages = Languge.ar;
            } else {
              this.currentLanguages = Languge.en;
            }
            this.changeLanguage();
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
            this.isDarkMode = !this.isDarkMode;
            if (this.isDarkMode) {
              document.body.classList.replace('normal-mode', 'dark-mode');
            } else {
              document.body.classList.replace('dark-mode', 'normal-mode');
            }
            this.loadHeaderData();
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

  changeLanguage() {
    if (this.currentLanguages == Languge.ar) {
      this.translateservice.setDefaultLang(Languge.ar);
      this.translateservice.use(Languge.ar);
      document.documentElement.dir = "rtl";
    } else {
      this.translateservice.setDefaultLang(Languge.en);
      this.translateservice.use(Languge.en);
      document.documentElement.dir = "ltr";
    }
    this.loadMenuData();
    this.loadHeaderData();
  }

  loadMenuData() {
    this.menuItem = [
      {
        label: "Controles",
        icon: 'pi pi-folder',
        expanded: true,
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
            url: `/${ScreensURL.Button}`,
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
            url: `/${ScreensURL.Toast}`,
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
            url: `/${ScreensURL.Form}`,
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
            url: `/${ScreensURL.Tabel}`,
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
            url: `/${ScreensURL.Calendar}`,
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
            url: `/${ScreensURL.Checkbox}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'File Uploader',
            icon: 'pi pi-upload',
            id: 'file-uploader',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.FileUploader}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Pick List',
            icon: 'pi pi-bars',
            id: 'pick-list',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.PickList}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Tabs',
            icon: 'pi pi-clone',
            id: 'tabs',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.Tabs}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Paginator',
            icon: 'pi pi-arrows-h',
            id: 'paginator',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.Paginator}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Image',
            icon: 'pi pi-image',
            id: 'image',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.Image}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Galleria',
            icon: 'pi pi-images',
            id: 'galleria',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.Galleria}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Carousel',
            icon: 'pi pi-th-large',
            id: 'carousel',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.Carousel}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Input Otp',
            icon: 'pi pi-ellipsis-h',
            id: 'otp',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.Otp}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Stepper',
            icon: 'pi pi-sitemap',
            id: 'stepper',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.Stepper}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Data View',
            icon: 'pi pi-list',
            id: 'data-view',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.DataView}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Radio Button',
            icon: 'pi pi-list',
            id: 'radio-button',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.RadioButton}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Color Picker',
            icon: 'pi pi-palette',
            id: 'color-picker',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.ColorPicker}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Accordion',
            icon: 'pi pi-list',
            id: 'accordion',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.Accordion}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Context Menu',
            icon: 'pi pi-list',
            id: 'context-menu',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.ContextMenu}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Menu',
            icon: 'pi pi-list',
            id: 'menu',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.Menu}`,
            command: (event: any) => {
              this.onMenuCommandClick(event);
            }
          },
          {
            label: 'Rating',
            icon: 'pi pi-list',
            id: 'rating',
            parentId: 'Controles',
            isActive: false,
            expanded: false,
            url: `/${ScreensURL.Rating}`,
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
