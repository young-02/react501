import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

/*
    함수형 컴퍼넌트  --> 클래스 컴퍼넌트 장점 --> 리액트 훅
    component
    component + props
    component + props 생략
    component + props + 객체
    component + props + 객체 + map + API
    class 컴퍼넌트
*/

//class 컴퍼넌트

// 리택트 훅


class Main extends React.Component{
    state = {};

    componentDidMount(){

    }
    render(){
        return (
            <div id="wrap">
                <Header/>
                <main id="main">
                    <section id="mainCont">
                        <div className="main__cont">
                            <div>we provide</div>
                            <div>visual coding</div>
                            <div>solutions</div>
                            <div>for you webs</div>
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Main;