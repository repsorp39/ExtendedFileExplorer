import { Component, OnDestroy, OnInit } from '@angular/core';
import { FolderManagerService } from '../services/folder-manager.service';
import { Subscription, tap } from 'rxjs';
import { Folder } from '../models/folder.model';

@Component({
  selector: 'app-file-explorer-header',
  imports: [],
  templateUrl: './file-explorer-header.component.html',
  styleUrl: './file-explorer-header.component.css',
})
export class FileExplorerHeaderComponent implements OnInit, OnDestroy {
  constructor(public folderManagerService: FolderManagerService) {}
  private subscription!: Subscription;
  public openedFolder!: Folder;

  ngOnInit(): void {
    this.subscription = this.folderManagerService.openedFolder$.subscribe(
      (folder: Folder) => (this.openedFolder = folder)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
