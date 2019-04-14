import { Component, EventEmitter, Output } from '@angular/core';

import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // LoggingService and AccountsService is dependenc injected when added through
  // the constructor.
  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
/*    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });*/

    // You could get access to the LoggingService this way, but this is not
    // dependency injected, which is really bad. Let's do it the Angular way!
/*    const service = new LoggingService();
    service.logStatusChange(accountStatus);*/
    // console.log('A server status changed, new status: ' + accountStatus);

    // Do this in the AccountsService instead
    // this.loggingService.logStatusChange(accountStatus);
  }
}
