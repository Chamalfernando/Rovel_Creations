import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  setMetaTags(config: {
    title: string;
    description: string;
    keywords: string;
    imageUrl?: string;
  }) {
    this.title.setTitle(`${config.title} | Rovel Creations`);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'keywords', content: config.keywords });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });
    if (config.imageUrl) {
      this.meta.updateTag({ property: 'og:image', content: config.imageUrl });
    }
  }
}
