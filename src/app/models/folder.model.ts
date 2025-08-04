import { FileExplorerItem, TItemtype } from './file-explorer-item.shared';

export class Folder extends FileExplorerItem {
  constructor(
    id: number,
    name: string,
    icon: string,
    public isBookmarked = false
  ) {
    super(id, name, 'folder', icon);
  }
}
