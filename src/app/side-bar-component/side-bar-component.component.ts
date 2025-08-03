import { Component, OnInit } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { BookmarkedFolderService } from '../services/bookmark-folder.service';
import { BookmarkedFolder } from '../models/bookmarked-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar-component',
  imports: [ButtonModule,CommonModule],
  templateUrl: './side-bar-component.component.html',
  styleUrl: './side-bar-component.component.css'
})
export class SideBarComponentComponent implements OnInit{
  public bookmarked:BookmarkedFolder[] = [];

  constructor(public bookmarkedFolderService:BookmarkedFolderService){};

  ngOnInit(): void {
      this.bookmarked = this.bookmarkedFolderService.bookmarkedFolder;
  }
} 
