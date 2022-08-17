const React = require('react');


import { BiCommentAdd } from 'react-icons/bi'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { FcHome } from 'react-icons/fc';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
class New extends React.Component {
    render() {
        return (
<html>
<head>
    <title> Add New Product</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"></link>
    <link rel="stylesheet" href="/styles/admin.css"></link>
    <link rel="stylesheet" href="/styles/style.css"></link>
</head>
<body>
<div id="wrapper">
 <div id="content-wrapper" class="d-flex flex-column">
    <div id="content"></div>


<nav class="navbar navbar-expand navbar-light bg-dark topbar mb-4 static-top shadow">
<div class="logo">SYS2M</div>
                <ul class="navbar-nav ml-auto">
                <li class="nav-item  no-arrow mx-1">
                            <a class="nav-link " href="/" >
                            <FcHome/>  Home page 
                            </a>
                       </li>
                       <li class="nav-item  no-arrow mx-1">
                            <a class="nav-link " href="product/new" > <BiCommentAdd/>  Add New Product
                            </a>
                       </li>
                       <li class="nav-item  no-arrow mx-1">
                            <a class="nav-link " href="product" >
                            < MdProductionQuantityLimits />  All products  
                            </a>
                       </li>
                     </ul> 
                </nav>
                <div class="container-fluid">
                   <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Add New Product</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th> 
                    <form action="/product" method="POST">
  <div class="form-group">
    <label >Product name</label>
    <input type="text" class="form-control"  name='name'  placeholder="Enter Product Name" />
  </div>
  <div class="form-group">
    <label>Price</label>
    <input type="text" class="form-control" name='price' placeholder="Enter Price" />
  </div>
  <div class="form-group-2">
    
    <label >Confeguration</label>
   
   <table class="config">
    <tr>
    <th> <select name='system' class="form-control-sm" placeholder="Operation system">
      <option>Mac OS</option>
      <option>Windows</option>
      <option>Linux</option>
    </select></th>
   <th> <input name='display' class="form-control-sm" placeholder="Display size"/></th>
   <th> <input name='hdd' class="form-control-sm"  placeholder="Hard dirive size"/></th>
   <th><input name='dimm' class="form-control-sm"  placeholder="DIMMs size"/></th>
   </tr>
   </table>
   
  </div>
  <div class="form-group">
    <label >Product Status</label>
    <select name='status' class="form-control" placeholder="Select Product Status">
      <option>Active</option>
      <option>Sold</option>
    </select>
  </div>
  <div class="form-group">
    <label >Quantity </label>
    <input type="text" class="form-control" name="qty"  placeholder="Enter Quantity" />
  </div>
  <div class="form-group">
    <label >Model </label>
    <input type="text"  name='model' class="form-control" placeholder="Enter Model" />
  </div>
  <div class="form-group">

    <label >Category</label>
    <select name='category' class="form-control" placeholder="Enter Category">
    <option>TV </option>
    <option>Home Theater</option>
    <option>Computers</option>
    <option>Camera</option>
    <option>Wearable Technology</option>
    <option>Car Electronics</option>
    <option>Portable Audio</option>
    <option>Cell Phones</option>
    <option>Office Electronics</option>
    <option>Musical Instruments</option>
    <option>Amazon Devices</option>
    <option>Active</option>
      
    </select>
  </div>
  
  <div class="form-group">
    <label >Description</label>
    <textarea name="desc" id="" class="form-control" cols="30" rows="10"></textarea>
  </div>
  <div class="form-group">
    <label >Image </label>
    <input type="text" class="form-control " name='img'   placeholder="Enter image" />
  </div>
  <input type="submit" name="" class="btn btn-primary " value="Submit Entry"/>


</form> 
     </th>
         </tr>
            </thead>               
                </table>
                    </div>
                        </div>
                    </div>
                </div>  </div></div>  
                <footer class="sticky-footer bg-white">
                   <div class="container my-auto">
                       <div class="copyright text-center my-auto">
                           <span>Copyright &copy; YTaieb OUBERKA 2022</span>
                       </div>
                   </div>
               </footer>
</body>
</html>
  
        );
    }
}

module.exports = New;