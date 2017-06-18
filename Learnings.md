### CORS
CORS stands for Cross Origin Resource Sharing. It's sole purpose is to protect people from malicious websites. The server usuaully only accepts requests coming from requests whose domain, subdomain and port is the same. The reason why requests with postman work and no CORS error shows up, is because CORS is solely security protection for users in the browser. It's for users who don't want to make ajax requests to some server.

The server-side solution is to allow any requests from any domain, this is usually the case with APi's, we can do this by using an npm package called cors.
