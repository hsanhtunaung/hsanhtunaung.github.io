import { AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import { Player } from "../player";
import { PlayersService } from "../players.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-list',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'ShirtNo', 'Name', 'Position', 'Appearances', 'Goal','Edit'];
  dataSource: MatTableDataSource<Player>;
  players: Player[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public playersService: PlayersService) { }


  ngOnInit(): void {
    this.playersService.getPlayers().subscribe((data: Player[]) => {
      this.players = data;
      this.dataSource = new MatTableDataSource(data);   

     this.dataSource.paginator = this.paginator;   
    });
  }
    
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deletePlayer(id) {
    this.playersService.deletePlayer(id).subscribe(res => {
      this.players = this.players.filter(item => item.id !== id);
    });
  }
}

