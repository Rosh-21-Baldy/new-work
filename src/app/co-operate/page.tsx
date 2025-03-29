'use client';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card,  } from 'react-bootstrap';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ComfortZone() {
  return (
    <>
    <Navbar/>
    <section className="position-relative text-white" style={{ background: "url('/comfort-zone-bg.jpg') center/cover no-repeat", minHeight: '400px', display: 'flex', alignItems: 'center' }}>
      <div className="container position-relative z-2">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="bg-primary p-4 rounded-circle text-white" style={{ maxWidth: '350px' }}>
              <h2 className="fw-bold">Find your <br /><span className="fw-bold">comfort zone</span></h2>
              <p>Taking the stress out of investing, with a focus on long-term capital growth and a rising dividend.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Side Vertical Button */}
      <div className="position-absolute end-0 top-50 translate-middle-y bg-primary text-white px-3 py-2 rounded-start">
        <a href="#" className="text-white text-decoration-none fw-bold">Invest Now</a>
      </div>
    </section>
    <Footer/>
    </>
  );
}