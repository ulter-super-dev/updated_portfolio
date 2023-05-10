import { Injectable, EventEmitter } from '@angular/core';
import { ITag } from './../utils/ITags';
import { tagData } from '../utils/tags-data';

@Injectable({
  providedIn: "root"
})
export class TagsService {
  tags: ITag[];
  onTagUpdate = new EventEmitter();

  constructor() {
    this.tags = tagData
  }

  toggleSelection(tagName: string) {
    const totoalSelection = this.tags.reduce(
      (prev, current) => prev + (current.isSelected ? 1 : 0),
      0
    );
    const selectedSkill = this.tags.find(e => e.displayName === tagName);
    if (totoalSelection <= 1 && selectedSkill.isSelected) return;
    
    selectedSkill.isSelected = !selectedSkill.isSelected;
    this.onTagUpdate.emit({
      tags: this.tags.filter(e => e.isSelected)
    })
  }
}
