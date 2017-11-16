---

layout:     post-with-cards
title:      Your choices

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
  - href:     "/contact.html"
    scrollto: 
    icon:     fa-phone
    description: I Want to Meet You

description: If you're looking to buy real estate, these are some projects and listings you can check. I'm also here to assist you with these projects. Just contact me through email or give me a call.

---

{% assign page_listings_sorted_by_stars = site.categories.listing | sort: 'star' | reverse %}
{% for post in page_listings_sorted_by_stars %}
<article class="col-xs-12 col-sm-12 col-md-6 single-card-box single-post">
  {% assign post_url = post.url | prepend: site.baseurl %}
  {% assign post_content = post.content | strip_html %}
  {% include app-card.html url=post_url thumbnail=post.images.card.preview thumbnail_type=post.thumbnail_type description=post_content title=post.title %}
</article> <!--./single post-->
{% endfor %}