import React from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import Title from '../basics/Title';

function Portfolio(){
    return (
        <>
            <Header/>
            <Layout>
                <section id="youtubeCont">
                    <div className="container">
                        <Title
                            text = {["yo","site"]}
                          />
                        <div className="youtube_title"></div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Portfolio;