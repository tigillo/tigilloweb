---
title: "Contribute"
permalink: "/contribute.html"
active: "contribute"
---

<form action="https://formspree.io/{{site.email}}" method="POST">    
<p>Guest posts are welcomed!</p>
<p>Please tell about your post to {{site.name}}. We will reply as soon as possible!</p>
<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="name" placeholder="Name*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="_replyto" placeholder="E-mail Address*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="text" name="title" placeholder="Post Title*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="url" name="image" placeholder="Related Image URL*">
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="abstract" placeholder="Abstract*" required></textarea>    
<input class="btn btn-success" type="submit" value="Send">
</form>