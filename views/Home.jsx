const React = require('react');

import { BsCart4 } from 'react-icons/bs'
import { BiCommentAdd } from 'react-icons/bi'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { FcHome } from 'react-icons/fc';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
class Home extends React.Component {
    render(){
        const { product } = this.props;
        return (
 <html>
<head>
    <title>home page</title>
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
 <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
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

                  
                    <div class="container-fluid">
                        <p></p>
                    <div class="card shadow mb-4">
                       
                        <div class="card-body">
                            <div class="table-responsive">
                            {product.map((prod) => {
                                            
                                            
                                            return (  


<div class="container-cad">
     
{prod.qty != 0 ? (
        <div id="img"> <img src={prod.img} width="90%" height='auto'  /></div>
      ) : (
        <div id="img"> <img src="https://t3.ftcdn.net/jpg/04/30/38/40/360_F_430384041_1G6UymaKYOJBE7wx5QmSHBeTJInkcQJT.jpg" width="90%" height='auto'  /></div>
      )}

   <div class="product-info">
    <div class="detail-product">{prod.desc.slice(0, 150)}</div>
<div id="auther">
<div class="price">${prod.price}</div>
<div class="config-product">
<div id="conf">
<div class="display">
Display Size <br />
<div class="number">{prod.display}inches</div> 
</div>
<div class="disk">Disk Size <br /><div class="number">{prod.hdd}</div></div>
<div class="ram">Ram  <br /> <div class="number">{prod.dimm}Go</div></div>
<div class="system">System <br /> <div class="number" >{prod.system}</div></div>
</div>

</div>

</div>



{prod.qty != 0 ? (
        <a href='#'> <div class="cart1"><BsCart4/></div>
       <div class="cart">Add to cart</div> </a>
      ) : (
        <div class="cart2"><MdOutlineRemoveShoppingCart/></div>
      )}

   </div>
</div>
    );
})}
                            </div>
                        </div>
                    </div>
                </div>      
                </div>
               
            </div>
           
        
          
</div>

        </div>
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

module.exports = Home;