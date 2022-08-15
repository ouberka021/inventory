
const React = require('react');
class Login extends React.Component {
    render(){
        
        return (

<html>
<head>
  <title>sign up</title>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
   <link rel="stylesheet" href="css/styles.css"/>
</head>
<body>
  
<div class="container mt-5">
  <h1>Register</h1>

  <div class="row">
    <div class="col-sm-8">
      <div class="card">
        <div class="card-body">
          <form action="/register" method="POST">
            <div class="form-group">
              <label for="name">First Name</label>
              <input type="text" class="form-control" name="firstname"/>
            </div>
            <div class="form-group">
              <label for="name">Last Name</label>
              <input type="text"  class="form-control" name="lastname"/>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" name="username"/>
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password"/>
            </div>
            <button type="submit" class="btn btn-dark">Register</button>
          </form>

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







