const React = require('react');

import { BiCommentAdd } from 'react-icons/bi'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { FcHome } from 'react-icons/fc';
import { GoDiffAdded } from 'react-icons/go';
import Collapse from 'react-bootstrap/Collapse';
import { FaEdit } from 'react-icons/fa';
import { FcDeleteRow } from 'react-icons/fc';

class Index extends React.Component {
    render(){
        const { product } = this.props;
       
        return(    
<html>
<head>
    <title>Product - List</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"></link>
    <link rel="stylesheet" href="/styles/style.css"></link>
   <link rel="stylesheet" href="/styles/admin.css"></link>
</head>
<body>

<div id="wrapper">
 <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
    <nav class="navbar navbar-expand navbar-light bg-dark  topbar mb-4 static-top shadow">
        <div class="logo">SYS2M</div>
                <ul class="navbar-nav ml-auto">
                <li class="nav-item  no-arrow mx-1">
                            <a class="nav-link " href="/" >
                            <FcHome/>  Home page 
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
                            <h6 class="m-0 font-weight-bold text-primary">List of All products</h6>
                            <div class="add" ><a href={`/product/new`} class="btn btn-danger-add " type="submit" > Add New  < GoDiffAdded /></a></div>
                            
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Model</th>
                                            <th>Quantity</th>
                                            
                                            <th>Status</th>
                                            <th>Description</th>
                                            <th>Image</th>
                                            <th width="150px"> Action</th>
                                           
                                        </tr>
                                    </thead>
                                 
                                    <tbody>
                                        {product.map((prod) => {
                                            
                                            
                                            return (    <tr>
                                            <td> 
                                                <a href={`/product/${prod.id}`}>{prod.name.charAt(0).toUpperCase() + prod.name.slice(1)}</a>
                                                </td>
                                                <td> {prod.category}</td>
                                                <td> ${prod.price}</td>
                                                <td> {prod.model}</td>
                                                <td> {prod.qty}</td>
                                           
                                                <td> {prod.status}</td>
                                                <td> {prod.desc.slice(0, 19)}</td>
                                                <td ><img src={prod.img} alt="" width='70px' height='auto' /> </td>

                                                <td width="175px">
                                                    <nav>
                                     <form action={`/product/${prod.id}?_method=DELETE`} method="POST">
                                 
                                    <button type="submit" class="btn btn-danger-del btn-circle"><FcDeleteRow /></button>{"\u00a0\u00a0"}
                                
                                <a href={`/product/${prod.id}/edit`} class="btn btn-danger-edit btn-circle" type="submit" >< FaEdit /> </a>
                                </form>
                                </nav>
                            </td> </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
 
               </div>
               </div></div>
               <footer class="sticky-footer bg-white">
                   <div class="container my-auto">
                       <div class="copyright text-center my-auto">
                           <span>Copyright &copy; Taieb OUBERKA 2022</span>
                       </div>
                   </div>
               </footer>
</body>

</html>
        )
    };
};
module.exports = Index;