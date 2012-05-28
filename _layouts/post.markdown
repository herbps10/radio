---
layout: page
---

<div id='content'>
  <div id='left'>
    <article>
      <h1>{{ page.title }}</h1>
      <span class='byline'>BY {{ page.author }} ON {{ page.date | date: "%d %B %Y" }}</span>

      {{ content }}
    </article>
  </div>
</div>
