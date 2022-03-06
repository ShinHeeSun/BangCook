import React from "react";
import logo from "../img/logo.png"
import { faMagnifyingGlass, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "../App.css"



function Header () {

    return (
        
       <header>
           <div>
               <img src={ logo } alt=""/>
           </div>
           <div className="Navbar">
               <ul>
            <li><a href="/"><FontAwesomeIcon icon={faAlignJustify}
               className="faAlignJustify"/>
                  전체 카테고리 
                    </a></li>
                   <li><a href="/">신상품</a></li>
                   <li><a href="/">베스트</a></li>
                   <li><a href="/">알뜰 쇼핑</a></li>
                   <li><a href="/">특가 / 혜택</a></li>
               </ul>
               <div className="Search">
               <input type="search" placeholder="검색어를 입력해주세요." 
               className="searchbar" />
              <FontAwesomeIcon
               icon={faMagnifyingGlass} className="search"/>
               </div>
           </div>
         
              
               
       </header>
    );
}
export default Header;