import {InMemoryDbService} from 'angular-in-memory-web-api';

import {AnalyticsDashboardDb} from 'app/fake-db/dashboard-analytics';
import {ContactsFakeDb} from './contacts';

export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
            // Dashboards

            'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets,

            // Calendar

            'contacts-contacts': ContactsFakeDb.contacts,
            'contacts-user'    : ContactsFakeDb.user,


            // E-Commerce


            // Academy


            // Mail


        };
    }
}
