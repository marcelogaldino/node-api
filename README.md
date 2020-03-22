# node-api
node-api connected with and deployed on heroku

# How can I use ?

node-api is very simple, you can check the API on this <a href="https://node-api-jshuntt.herokuapp.com/api/products">website</a>

```
{
  baseURL: "https://node-api-jshuntt.herokuapp.com/api"
}
```

Adding the route ```/products``` you can consume the list of techs that are available.
<br>
We limited three techs by page, you can view the next three techs by putting the GET parameter page: ```/products?=page2``` for example
