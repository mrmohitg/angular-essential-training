import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
	name = 'User Order';
	wasWatched(){
		return true;
	}
	
	onDelete(){
		console.log('deleted');
	}
}
