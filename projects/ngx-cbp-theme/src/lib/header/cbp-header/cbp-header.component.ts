import {
    Component, ContentChild, Inject, Input,
    ViewEncapsulation
} from '@angular/core';
import {CBPUserMenuComponent} from '../../user/user-menu/user-menu.component';
import {CBPFeedbackLinkComponent} from '../../feedback/feedback-link.component';
import {CBPApplicationsMenuComponent} from '../../applications/apps-menu/apps-menu.component';
import {CBPToolbarState, CBP_HEADER_STATE} from '../cbp-toolbar/cbp-toolbar-state';


@Component({
    selector: 'cbp-header',
    templateUrl: './cbp-header.component.html',
    styleUrls: ['./cbp-header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CBPHeaderComponent {

    public toolbarState: CBPToolbarState;
    @Input() cbpAppsMenuExclude: boolean;
    @Input() cbpFeedbackLinkExclude: boolean;
    @Input() cbpUserMenuExclude: boolean;

    @ContentChild(CBPApplicationsMenuComponent) cbpAppsMenu: CBPApplicationsMenuComponent;
    @ContentChild(CBPFeedbackLinkComponent) cbpFeedbackLink: CBPFeedbackLinkComponent;
    @ContentChild(CBPUserMenuComponent) cbpUserMenu: CBPUserMenuComponent;

    constructor(@Inject(CBP_HEADER_STATE) state: CBPToolbarState) {
      this.toolbarState = state;
    };

    isProvided(comp: any): boolean {
      return comp ? true : false;
    }
}
