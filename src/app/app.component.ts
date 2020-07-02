import { Component, VERSION } from '@angular/core';
import { KatexOptions } from 'ngx-markdown';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  angularVersion = VERSION.full;
  ngxMarkdownVersion = '10.0.0';

  markdown = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Emoji
I :heart: ngx-markdown

### Lists
1. Ordered list
2. Another bullet point
  - Unordered list
  - Another unordered bullet point

### Blockquote
> Blockquote to the max`;

public options: KatexOptions = {
  displayMode: true,
  throwOnError: false,
  errorColor: '#cc0000'
};
}
