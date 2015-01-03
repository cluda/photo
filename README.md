Cluda Photo
====================

A static website for photographers. For displaying images, videos and "about me".

Aims to be easy to use for non-technical users. 
This is done by letting photographers upload their pictures to Flickr and editing the site through prose.io.

[Trello](https://trello.com/b/wZOfqARd/photo)

Set Up
---------------------
1. In `_config.yml` set `name`, "description" and `flickr_user` to your Flickr id. Flickr can be found [here](http://idgettr.com/).
2. In `background_pictures.csv` list links to the pictures you want to use in the slideshow-background. The links should be surrounded with " and each link separated by a ,.
3. In `about.md` write you about-text. The text can be formatted with [markdown](http://daringfireball.net/projects/markdown/syntax).
4. Add galleries.

### To add a gallery:
1. In the root folder create a new file ending in `.html`.
2. Copy the section below into the new file (including the starting and ending `---`):
```ymal
---
layout: black_transparent/gallery
title: Birds
flickr_tag: bilder
description: ""
parent: "do"
---
```
3. A description of the gallery can be written in the content area (below the ending `---`).
### Description:
* `layout:` this is the layout to use for the gallery (see what layouts are available in the "_layouts"-directory).
* `title:` the galleries title
* `flickr_tag:` the tag (on Flickr) on the images you want to be in the gallery.
* `parent:` the galleries parent in the navigation menu. Set empty for no parent (placing the link directly in the menu).

**Warning! IMPORTANT:**
The `flickr_tag` is appended with a number higher number for each new 20 pictures. Starting at 1.
#Example:
If you specify `birds` as the flickr_tag. This means that the 20 first pictures to be included in the gallery should have the tag `birds1` on Flickr, and the next 20 pictures to be included should have the tag `birds2` and so on.

### To add a other pages:
1. In the pages folder create a new file ending in `.md`.
2. Copy the section below into the new file (including the starting and ending `---`):
```ymal
---
layout: black_transparent/page
title: About
parent: ""
---
```
3. Write the page content in the content area (below the ending `---`).

Technologies
---------------------
*   jekyll
*   gh-pages
*   grunt
*   bower
*   scss
*   bourbon
*   neat
*   jquery
*   javascript
*   prose.io
