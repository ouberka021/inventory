const React = require('react');
import { SiGnuprivacyguard } from 'react-icons/si';
class Login extends React.Component {
    render(){
        
        return (
// <%- include('partials/header') %>
<html>
<head>
   
   <title>Sign-in page </title>
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
   <link rel="stylesheet" href="css/styles.css"/>
 </head>
 <body>
<div class="container mt-5">
  <h1>Login</h1>

  <div class="row">
    <div class="col-sm-8">
      <div class="card">
        <div class="card-body">

          <form action="/login" method="POST">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" name="username"/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password"/>
            </div>
            <div id="message"></div>
             
            <button type="submit" class="btn btn-dark">Login</button>
          </form>

        </div>
      </div>
    </div>

     <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <a class="btn btn-block" href="/register" role="button">
           <SiGnuprivacyguard/> Sign up
          </a>
        </div>
      </div>
    </div> 

  </div>
</div>
</body>
</html>
)
    };
};

module.exports = Login;