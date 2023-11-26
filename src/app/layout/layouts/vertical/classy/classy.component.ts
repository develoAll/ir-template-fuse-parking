import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import { environment } from '@environments/environment';
import { FuseNavigationItem, FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Menu } from '@shared/domain/models/user-auth.model';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';
import { NotificationsComponent } from 'app/layout/common/notifications/notifications.component';
import { UserComponent } from 'app/layout/common/user/user.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'classy-layout',
    templateUrl: './classy.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [FuseVerticalNavigationComponent, NotificationsComponent, UserComponent, NgIf, MatIconModule, MatButtonModule, RouterOutlet],
})
export class ClassyLayoutComponent implements OnInit, OnDestroy {

    isScreenSmall: boolean;
    navigation: FuseNavigationItem[] = new Array<FuseNavigationItem>();
    user: User;
    public isMenuVisible: boolean =  environment.menu;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _userService: UserService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService,
        private _serviceAuth: AuthService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    get currentYear(): number {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    ngOnInit(): void {
        this.initMenuView();

        // Subscribe to the user service
        this._userService.user$
            .pipe((takeUntil(this._unsubscribeAll)))
            .subscribe((user: User) => {
                this.user = user;
            });

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
            });
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    initMenuView(){
        console.log("MENU >>", this._serviceAuth.getDataUser().menu)

        this._serviceAuth.getDataUser().menu.forEach((item:Menu)=>{
            let nav: Array<FuseNavigationItem> | FuseNavigationItem;

            switch (item.nameMenu) {
                default:
                    nav = [{
                        id:item.idMenu.toString(),
                        type:item.type,
                        title:item.nameMenu,
                        link:item.route,
                        icon:item.icon,
                        children: this.getChildrenFromItem(item)
                    }];
                    break;
            }

            this.navigation = [...this.navigation, ...nav];
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private getChildrenFromItem(item: Menu){
        let listChildren = [];

        item.children.forEach((itemChildren:Menu)=>{
            let children: FuseNavigationItem ={
                id:itemChildren.idMenu.toString(),
                type:itemChildren.type,
                title:itemChildren.nameMenu,
                link:itemChildren.route,
                icon:itemChildren.icon,
                children: (itemChildren.children === undefined || itemChildren.children.length === 0) ? [] : itemChildren.children.map(x => {
                    return {
                        id:x.idMenu.toString(),
                        type:x.type,
                        title:x.nameMenu,
                        link:x.route,
                        icon:x.icon,
                    } as FuseNavigationItem;
                })
            };
            
            listChildren.push(children);
        });

        console.log("listChildren => ", listChildren)
        return listChildren;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    toggleNavigation(name: string): void {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if (navigation) {
            // Toggle the opened status
            navigation.toggle();
        }
    }
}
