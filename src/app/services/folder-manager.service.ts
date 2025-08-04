import { Injectable } from '@angular/core';
import { Folder } from '../models/folder.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FolderManagerService {
  private defaulFolders = [
    {
      name: 'Home',
      icon: 'pi pi-home',
    },

    {
      name: 'Documents',
      icon: 'pi pi-file',
    },

    {
      name: 'Downloads',
      icon: 'pi pi-download',
    },

    {
      name: 'Music',
      icon: 'bi bi-music-note-beamed',
    },

    {
      name: 'Pictures',
      icon: 'pi pi-image',
    },

    {
      name: 'Videos',
      icon: 'pi pi-video',
    },

    {
      name: 'Trash',
      icon: 'pi pi-trash',
    },
  ];

  public defaultFoldersList: Folder[] = this.defaulFolders.map(
    (folder, index) => {
      return new Folder(index, folder.name, folder.icon);
    }
  );

  public openedFolder$ = new BehaviorSubject<Folder>(
    this.defaultFoldersList[0]
  );

  public setOpenedFolder(currenttFolderName: string) :void{
    this.openedFolder$.next(
      this.defaultFoldersList.find(
        (folder) => folder.name === currenttFolderName
      ) ?? this.defaultFoldersList[0]
    );
  }
}
