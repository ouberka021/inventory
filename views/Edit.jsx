const React = require('react');
import { BiCommentAdd } from 'react-icons/bi'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { FcHome } from 'react-icons/fc';
const Product = require('../models/product.js');
class Edit extends React.Component {

    render() {
        const product = this.props.product;
        
        return (
        
<html>
<head>
    <title>Edit product</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"></link>
    <link rel="stylesheet" href="/styles/style.css"></link>
   <link rel="stylesheet" href="/styles/admin.css"></link>
</head>
<body>





 <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
    <nav class="navbar navbar-expand topbar bg-dark  mb-4 static-top shadow">
        <div class="logo">SYS2M</div>
                <ul class="navbar-nav ml-auto">
                <li class="nav-item  no-arrow mx-1">
                            <a class="nav-link " href="/" >
                            <FcHome/>  Home page 
                            </a>
                       </li>
                       <li class="nav-item  no-arrow mx-1">
                            <a class="nav-link " href="/product/new" > <BiCommentAdd/>  Add New Product
                            </a>
                       </li>
                       <li class="nav-item  no-arrow mx-1">
                            <a class="nav-link " href="/product" >
                            < MdProductionQuantityLimits />  All products  
                            </a>
                       </li>
                      

                     </ul> 
                </nav>
                <div class="container-fluid">

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Update product</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            
                                             
                                 <thead>

                                        <tr>
                                            <th>

    <form action={`/product/${product.id}?_method=PUT`} method="POST">

                                  
  <div  class="form-group">
    <label >Product Name</label>
    <input type="text" class="form-control" value={product.name}  name='name'  />
  </div>
  <div class="form-group">
    <label>Price</label>
    <input type="text" class="form-control" value={product.price}  name='price'  />
  </div>
  <div class="form-group-2">
    
    <label >Confeguration</label>
   
   <table class="config">
    <tr>
    <th> <select name='system' value={product.system}  class="form-control-sm" >
      <option>Mac OS</option>
      <option>Windows</option>
      <option>Linux</option>
    </select></th>
   <th> <input name='display' value={product.display}  class="form-control-sm" /></th>
   <th> <input name='hdd' class="form-control-sm"  value={product.hdd} /></th>
   <th><input name='dimm' class="form-control-sm"  value={product.dimm} /></th>
   </tr>
   </table>
   
  </div>
  <div class="form-group">
    <label >Product Status</label>
    <select name='status' value={product.status}  class="form-control" >
      <option>Active</option>
      <option>Sold</option>
    </select>
  </div>
  <div class="form-group">
    <label >Quantity </label>
    <input type="text" class="form-control" value={product.qty}  name="qty"  />
  </div>
  <div class="form-group">
    <label >Model </label>
    <input type="text"  name='model' value={product.model}  class="form-control"  />
  </div>
  <div class="form-group">

    <label >Category</label>
    <select name='category' value={product.category}  class="form-control" >
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
    <textarea name="desc" id="" class="form-control" value={product.desc}  cols="30" rows="10"></textarea>
  </div>
  <div class="form-group">
   <input type="text" hidden class="form-control " name='img' value={product.img}    placeholder="Enter image" />
  </div>
  <input type="submit" name="" class="btn btn-primary " value="Submit Entry"/></form> </th>
                                        </tr>
                                    </thead>
                                  
                                </table>
                            </div>
                        </div>
                    </div>
                </div>   </div></div>   
                <footer class="sticky-footer bg-white">
                   <div class="container my-auto">
                       <div class="copyright text-center my-auto">
                           <span>Copyright &copy; Taieb OUBERKA 2022</span>
                       </div>
                   </div>
               </footer>
</body>
</html>

        );
    }
}

module.exports = Edit;