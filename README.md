# Third-party cookie POC: first-party site

This project simulates a first-party site that allows other sites to set cookies from a third-party context.
This application interacts with the third-party site by either an iframe or redirect.

# Iframe

In the case of an iframe, the first-party site makes a request to another side using the iframe src attribute. 
This iframe loads the third party site and a button to request permission from the user to set a third-party cookie. 

When the user clicks to allow access, a prompt will appear (Safari/Firefox only) asking the user to confirm the use of third-party cookies. 

# Redirect

The redirect approac is less of an example of third-party cookies, but more of a display of how to set first-party cookies on another domain. For example, you may want to authorize a legacy application inline with a new application. 
In this case, the new application could request an auth token under it's domain and redirect to the legacy application so it can request a token for itself. 

TODO: environment setup
