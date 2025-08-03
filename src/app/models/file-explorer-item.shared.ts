type TItemtype = 'folder' | 'file';

export abstract class FileExplorerItem {
  constructor(
    public id: number,
    public name: string,
    public type: TItemtype,
    public icon: string,
    public bookmarkedType:"default"|"custom" = "default"
  ) {}

  rename() {}

  handleDoubleClick() {}

  handleClick() {}
}
