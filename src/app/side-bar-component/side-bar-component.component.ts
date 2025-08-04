import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BookmarkedFolderService } from '../services/bookmark-folder.service';
import { BookmarkedFolder } from '../models/bookmarked-model';
import { CommonModule } from '@angular/common';
import { FolderManagerService } from '../services/folder-manager.service';
import { Subscription } from 'rxjs';
import { Folder } from '../models/folder.model';

@Component({
  selector: 'app-side-bar-component',
  imports: [ButtonModule, CommonModule],
  templateUrl: './side-bar-component.component.html',
  styleUrl: './side-bar-component.component.css',
})
export class SideBarComponentComponent implements OnInit, OnDestroy {
  public folders: Folder[] = [];
  private subscription!: Subscription;
  public currentOpened!: Folder;

  constructor(public folderManagerService: FolderManagerService) {}

  ngOnInit(): void {
    this.folders = this.folderManagerService.defaultFoldersList;
    this.subscription = this.folderManagerService.openedFolder$.subscribe(
      (folder) => {
        this.currentOpened = folder;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openFolder(folderName: string): void {
    this.folderManagerService.setOpenedFolder(folderName);
  }
}
