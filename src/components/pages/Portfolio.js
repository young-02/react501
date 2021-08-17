import React from 'react';
import axios from 'axios';
// import Header from '../layout/Header';
// import Layout from '../layout/Layout';
// import Title from '../basics/Title';
// import FooterInfo from '../basics/FooterInfo';
// import { render } from '@testing-library/react';

function PortInfo({link,image,title,category}){
    return (
        <div className="port__item">
            <figure className="port__item__img">
                <a href={link}>
                    <img src={image} alt={title} />
                </a>
            </figure>
            <div className="port__item__txt">
                <h2>{title}</h2>
                <p>{category}</p>
            </div>
        </div>
    )
}

class Portfolio extends React.Component{
    state = {
        isloading :true,
        ports:[]//포트폴리오 내용 저장할 곳
    }
   
    getPorts = async () => {
        const {
            data:{
                data:{ports},
            }
        } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
        this.setState({isloading :false, ports})
        //console.log(ports.data.data.ports)
    }

    componentDidMount(){
        setTimeout(()=>{
            this.getPorts();
        },3000)
    }

    render(){
        const { isloading , ports} = this.state;
        return(
            <div>
                {isloading ? (
                    <div>로딩중입니다.........</div>
                ) : (
                    <div>
                        {ports.map((port) => (
                            <PortInfo
                                link = {port.link}
                                image = {port.image}
                                title = {port.title}
                                category = {port.category}
                            />
                        ))}
                    </div>
                )}
            </div>
        )
    }
}

export default Portfolio;