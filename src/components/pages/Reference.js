import React from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import Title from '../basics/Title';

function Portfolio(){
    return (
        <>
            <Header/>
            <Layout>
                <section id="referCont">
                    <div className="container">
                        <Title
                            text = {["re","site"]}
                          />
                        <div className="refer_title"></div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Portfolio;