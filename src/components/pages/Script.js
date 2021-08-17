import React from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import Title from '../basics/Title';

function Portfolio(){
    return (
        <>
            <Header/>
            <Layout>
                <section id="scriptCont">
                    <div className="container">
                        <Title
                            text = {["sc","site"]}
                          />
                        <div className="script_title"></div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Portfolio;