import React from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import FooterInfo from '../basics/FooterInfo';

function Contact(){
    return (
        <>
            <Header/>
            <Layout>
                <section id="contactCont">
                    <div className="container">
                      
                        <div className="contact_title"></div>
                    </div>
                </section>
            </Layout>
            <FooterInfo />
        </>
    );
}

export default Contact;