"use client";
import React from "react";
import { Container, Card } from "react-bootstrap";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="py-5 bg-light">
        <Container>
          <h1 className="mb-4 text-center display-4">Policies</h1>

          {/* Privacy Policy */}
          <Card className="shadow-sm mb-4">
            <Card.Body className="p-4">
              <h2 className="h4">1. Privacy Policy</h2>
              <p>
                We collect and process personal and business data to facilitate lead sourcing and disbursement services.
              </p>
              <h5 className="mt-3">Data Collection</h5>
              <p>
                We collect information such as company name, contact details, and lead data provided by partners.
              </p>
              <h5 className="mt-3">Usage</h5>
              <p>
                Data is used to connect partners with financial institutions and improve our services. It may be shared with banks/NBFCs for loan processing.
              </p>
              <h5 className="mt-3">Security</h5>
              <p>
                We implement reasonable security measures to protect your data, in compliance with the Digital Personal Data Protection Act, 2023.
              </p>
              <h5 className="mt-3">Rights</h5>
              <p>
                Users may request access, correction, or deletion of their data by contacting{" "}
                <a href="mailto:support@prefinn.com" className="text-primary">
                  support@prefinn.com
                </a>.
              </p>
            </Card.Body>
          </Card>

          {/* Partnership Policy */}
          <Card className="shadow-sm mb-4">
            <Card.Body className="p-4">
              <h2 className="h4">2. Partnership Policy</h2>
              <p>
                Prefinn collaborates with B2B partners to source loan leads. Partners must sign a separate agreement detailing lead quality standards, commission structures, and disbursement processes.
              </p>
              <p>
                We reserve the right to reject leads that do not meet our criteria or those of our financial partners.
              </p>
            </Card.Body>
          </Card>

          {/* Compliance Policy */}
          <Card className="shadow-sm mb-4">
            <Card.Body className="p-4">
              <h2 className="h4">3. Compliance Policy</h2>
              <p>
                Prefinn adheres to all applicable Indian regulations, including RBI guidelines for financial intermediaries and the IT Act, 2000, for digital operations. Partners are expected to comply with these laws when using our services.
              </p>
            </Card.Body>
          </Card>

          {/* Refund Policy */}
          <Card className="shadow-sm mb-4">
            <Card.Body className="p-4">
              <h2 className="h4">4. Refund Policy</h2>
              <p>
                Fees paid for services (e.g., lead generation) are non-refundable unless Prefinn fails to deliver agreed services due to its own fault. Refund requests must be submitted within 15 days of the issue, subject to review.
              </p>
            </Card.Body>
          </Card>

          {/* Anti-Fraud Policy */}
          <Card className="shadow-sm mb-4">
            <Card.Body className="p-4">
              <h2 className="h4">5. Anti-Fraud Policy</h2>
              <p>
                Prefinn prohibits the submission of fraudulent or falsified lead information. Any detected fraud will result in immediate termination of partnership and potential legal action.
              </p>
            </Card.Body>
          </Card>

          {/* Customer Support Policy */}
          <Card className="shadow-sm mb-4">
            <Card.Body className="p-4">
              <h2 className="h4">6. Customer Support Policy</h2>
              <p>
                We provide support to partners via email and phone during business hours (9 AM–6 PM IST, Monday–Friday). Queries will be addressed within 48 hours.
              </p>
            </Card.Body>
          </Card>

          {/* Confidentiality Policy */}
          <Card className="shadow-sm mb-4">
            <Card.Body className="p-4">
              <h2 className="h4">7. Confidentiality Policy</h2>
              <p>
                Prefinn and its partners agree to keep all sensitive business information (e.g., lead data, commission rates) confidential, except as required by law or for service delivery.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
