# Express.js-EJS-templating-engine
Express.js EJS templating engine


// Registering Templating Engine i.e 'ejs' in this case

app.set('view engine', 'ejs');

// We need to specify this for the location of views and this could also to written for other templating engine

app.set('views','views');

We can rite vairiable name inside-:

<%=     %>


NOTE-:

The speciality of EJS is that we can write Vanilla JS inside <%   %>

EX.    <% for (i of products) { %>

..........code.............

.......<% } %>
