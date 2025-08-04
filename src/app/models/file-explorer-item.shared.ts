export type TItemtype = 'folder' | 'file';

export abstract class FileExplorerItem {
  constructor(
    public id: number,
    public name: string,
    public type: TItemtype,
    public icon: string,
  ) {}

  rename() {}

  handleDoubleClick() {}

  handleClick() {}
}
