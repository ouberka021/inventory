const React = require('react');
class Show extends React.Component {
    render(){
        const prod = this.props.product;
        return(

            <html>
<head>
    <title>product - details</title>
    <link rel="stylesheet" href="/styles/admin.css"></link>
</head>
<body>
                <div class="container-fluid">
                            <p></p>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary"> product details!!</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th> <h1></h1>
                                           
            <h2>{prod.name}</h2>
            <img src={prod.img} alt={prod.name} ></img> <p></p>
            <a href="/"><button class="btn btn-primary btn-user btn-block">Back to Main page</button></a><br/>
            <a href="/product"><button class="btn btn-primary btn-user btn-block">View products</button></a>
                   
                        </th>
                                           
                                        </tr>
                                    </thead>
                                 
                                 
                                </table>
                            </div>
                        </div>
                    </div>
                </div>      
</body>
</html>

        )
    };
};

module.exports = Show;