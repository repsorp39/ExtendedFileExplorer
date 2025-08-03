import { Injectable } from '@angular/core';
import { BookmarkedFolder } from '../models/bookmarked-model';

@Injectable({ providedIn: 'root' })
export class BookmarkedFolderService {
  private defaultBookmarkedFolders = [
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

  public bookmarkedFolder: BookmarkedFolder[] =
    this.defaultBookmarkedFolders.map((folder, index) => {
      return new BookmarkedFolder(index, folder.name, 'folder', folder.icon);
    });
}
