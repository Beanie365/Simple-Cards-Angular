import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {s
  posts = [
{title: 'Neat Tree',
imageURL: 'assets/tree.jpeg',
username: '@nature',
content: 'I saw this neat tree today'
},

{title: 'Snowy Mountain',
imageURL: 'assets/mountain.jpeg',
username: '@mountainlover',
content: 'here is a picture of a snowy mountain'
},

{title: 'Mountain Biking',
imageURL: 'assets/biking.jpeg',
username: '@biking2222',
content: 'I did some biking today'
}

  ]
}
