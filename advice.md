---

layout:     post-with-cards
title:      Help you need

nav_list: 
  - href:     "/about.html"
    scrollto: 
    icon:     fa-user
    description: About Luchelle
  - href:     "/listings.html"
    scrollto: 
    icon:     fa-home
    description: I Want to Buy
  - href:     "/advice.html"
    scrollto: 
    icon:     fa-book
    description: I Need Advice
  - href:     "/#contact"
    scrollto: 
    icon:     fa-phone
    description: I Want to Meet You

---

{% for post in site.categories.blog %}
<article class="col-xs-12 col-sm-12 col-md-6 single-card-box single-post">
  {% assign post_url = post.url | prepend: site.baseurl %}
  {% assign post_content = post.content | strip_html %}
  {% include app-card.html url=post_url thumbnail=post.images.card.preview thumbnail_type=post.thumbnail_type description=post_content title=post.title %}
</article> <!--./single post-->
{% endfor %}