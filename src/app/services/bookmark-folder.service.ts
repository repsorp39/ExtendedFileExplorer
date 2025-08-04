import { Injectable } from '@angular/core';
import { FolderManagerService } from './folder-manager.service';
import { Folder } from '../models/folder.model';

@Injectable({ providedIn: 'root' })
export class BookmarkedFolderService {
  public bookmarkedFolder:Folder[] = [];

  constructor(folderService:FolderManagerService){
    this.bookmarkedFolder = folderService.defaultFoldersList;
  }
}
