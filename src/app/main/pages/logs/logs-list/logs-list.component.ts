import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ServerInfoService} from "../../../../../services/server-info.service";
import {Logs} from "../../../../../interface/Logs";


@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.scss']
})
export class LogsListComponent implements OnInit {

    displayedColumns: string[] = ['_id', 'type', 'importance', 'date', 'time', 'description'];
    dataSource: MatTableDataSource<Logs>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
  }

  ngOnInit() {
      this.dataSource = new MatTableDataSource();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      const info = this.getGroups();
  }



    getGroups(): Promise<any> {
        return new Promise((resolve, reject) => {
                ServerInfoService.getLogs()
                    .subscribe((response: Logs[]) => {
                        this.dataSource = new MatTableDataSource(response);
                    }, reject);
            }
        );
    }




    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

}
