---
title: 'When to use Static Generation v.s. Server-side Rendering'
date:'2020-01-02'
---
We recommend usinng **Static Generation** (with and without data) whenever possible because your page can be built once and served by cdn, which makes it much faster than having a server render the page on every reqest.

You can use Static Generation for many types of pages, including:
- Marketing pages 
- Blog posts
- E-commerce products listings
- Help and documentation

You should ask yourself: "Can i pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.
 On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your pages shows frequently updated data, and the page content changes on every request.
 In the case, you use **Server-side Rendering**. it will be slower, but the pre-rendered pages will always be up-to-date. or you can skip pre-Rendering and use client-side JavaScript to populate data.