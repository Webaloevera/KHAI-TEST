import React from 'react';
import {connect} from 'react-redux'
import {getTests} from '../../redux/ListTestsReducer'
import classes from './Test.module.css'
import { NavLink } from 'react-router-dom'
import Loader from '../../UI/Loader/Loader'

class Test extends React.Component{
    
    componentDidMount(){
        this.props.getTests()
    }
   
    render(){
        if(this.props.loading)return <Loader />
    return(
        <div className="container">
            {this.props.login&&<h5 style={{color: '#fff'}}>Login:&nbsp;{this.props.login}</h5>}
            <h4 className={"center"} style={{color: '#fff'}}>Список тестов</h4>
            {this.props.tests.length===0&&<h6 style={{color: '#fff'}}>Новых тестов пока нет...</h6>}
            <ul>
                {this.props.tests&&
                this.props.tests.map((t,i)=>{
                if(this.props.login){
                return <li className={classes.test} key={t.id}>{i+1}.<NavLink to={'/test/'+t.id}>{t.titleTest}</NavLink></li>}
                else{return<li onClick={()=>window.M.toast({html:"Для прохождения теста нужно зарегистрироваться"})} className={classes.test} key={t.id}>{i+1}.{t.titleTest}</li>}
                })
                }
            </ul>
            {this.props.completedTest.length>0&&<div>
                <h4 className={'center'} style={{color:"#fff"}}>Список пройденных тестов</h4>
                    <ul>
                        {this.props.completedTest
                        .map((t,i)=>{
                        return <li className={classes.test} key={i}>{i+1}.{t.titleTest}</li>
                        })
                        }
                    </ul>
         </div>}
        </div>
    )
    }
}

const mapStateToProps=(state)=>{
    return{
        tests:state.listTests.tests,
        login:state.auth.login,
        completedTest:state.listTests.completedTest,
        loading:state.listTests.loading,
    }
}

export default connect(mapStateToProps,{getTests})(Test)