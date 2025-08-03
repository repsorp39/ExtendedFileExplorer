import { Component } from '@angular/core';
import { SideBarComponentComponent } from "./side-bar-component/side-bar-component.component";
import { FileExplorerHeaderComponent } from "./file-explorer-header/file-explorer-header.component";

@Component({
  selector: 'app-root',
  imports: [SideBarComponentComponent, FileExplorerHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExtentedFileExplorer';
}
