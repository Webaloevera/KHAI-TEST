import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';

const NavBar = (props)=>{

    return(
        <header>
            <nav style={{backgroundColor: '#333'}}>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo hide-on-med-and-down" style={{padding: "0 2rem", fontSize: "1.5rem"}}>Test-KHAI</a>
                    <ul className="right">
                        {props.auth?<>
                                <li><NavLink to="/">Список Тестов</NavLink></li>
                                {props.login==="admin@gmail.com"&&
                                <li><NavLink to="/addTest">Добавить Тест</NavLink></li>}
                                <li><NavLink to="/logout">Выйти</NavLink></li></>
                            :<><li><NavLink to="/">Главная</NavLink></li>
                                <li><NavLink to="/auth">Авторизация</NavLink></li></>
                        }
                    </ul>
                </div>
            </nav>

        </header>
    )
}

const mapStateToProps=(state)=>{
    return{
        login:state.auth.login
    }
}

export default connect(mapStateToProps,null)(NavBar)