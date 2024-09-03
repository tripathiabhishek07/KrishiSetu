import React from 'react';
import './FeatureSection.css'; // Import the CSS file
import {motion} from 'framer-motion';
import {fadeIn} from "../../variants";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="container1">
        <motion.div 
        variants = {fadeIn("down", 0.1)}
        initial = "hidden"
        whileInView = {"show"}
        viewport = {{once:false, amount:0.9}}
        
        
        className="header1">
          <div className="text-container1">
            <h1 className="title1">How it Works ?</h1>
            <div className="underline1"></div>
          </div>
          <p className="description1">
          Following steps guide you to the Krishi Setu platform and also specifies its features.
          </p>
        </motion.div>
        <div className="card-container1">
          <div className="card1">
            <img className="card-image1" src="/images/login.jpg" alt="content" />
            <motion.div 
            variants = {fadeIn("right", 0.1)}
            initial = "hidden"
            whileInView = {"show"}
            viewport = {{once:false, amount:0.9}}>
            <h2 className="card-title1">User Registration and Onboarding</h2>
            <p className="card-description1"><strong>Voice Assistance:</strong>Farmers register using voice commands for ease.<br/>
<strong>Toll-Free Number:</strong>Dedicated helpline for registration support.<br/>
<strong>CSC Centers:</strong>On-site help at Common Service Centers.<br/>
<strong>Phone and Aadhar Verification:</strong>Secure and reliable authentication.
            </p></motion.div>
          </div>
          <div className="card1">
            <img className="card-image1" src="/images/agreement.jpg" alt="content" />
            <motion.div 
            variants = {fadeIn("left", 0.1)}
            initial = "hidden"
            whileInView = {"show"}
            viewport = {{once:false, amount:0.9}}>
            <h2 className="card-title1">Agreement with Government on MSP</h2>
            <p className="card-description1"><strong>Digital MSP Agreement:</strong> Farmers digitally accept government-set minimum prices.<br/>
            <strong>Produce Details: </strong> Capture details of produce for legal backing.<br/></p>
            </motion.div>
          </div>
          <div className="card1">
            <img className="card-image1" src="/images/storage.jpg" alt="content" />
            <motion.div 
            variants = {fadeIn("right", 0.1)}
            initial = "hidden"
            whileInView = {"show"}
            viewport = {{once:false, amount:0.9}}>
            <h2 className="card-title1">Produce Collection and Storage</h2>
            <p className="card-description1">
            <strong>Pickup Scheduling:</strong> Schedule produce pickup via the app.<br/>
            <strong>Quality Verification: </strong>Cold storage agents assess and store produce.<br/>
            <strong>Real-Time Updates: </strong> Notifications on produce status.<br/>
            </p>
            </motion.div>
          </div>
          <div className="card1">
            <img className="card-image1" src="/images/payment.jpg" alt="content" />
            <motion.div 
            variants = {fadeIn("left", 0.1)}
            initial = "hidden"
            whileInView = {"show"}
            viewport = {{once:false, amount:0.9}}>
            <h2 className="card-title1">Financial Transactions and Support</h2>
            <p className="card-description1">
            <strong>Direct Bank Transfer:</strong> Quick payment to farmer’s bank account.<br/>
            <strong>Flexible EMI Repayment: </strong>Various EMI options for loan repayment.<br/>
            <strong>Dashboard Tracking: </strong> Track payments and manage finances<br/>
              </p>
            </motion.div>
          </div>
          <div className="card1">
            <img className="card-image1" src="/images/market.jpeg" alt="content" />
            <motion.div 
            variants = {fadeIn("left", 0.1)}
            initial = "hidden"
            whileInView = {"show"}
            viewport = {{once:false, amount:0.9}}>
            <h2 className="card-title1">Market Access and Sales</h2>
            <p className="card-description1">
            <strong>Customer Pre-Orders:</strong> Consumers can pre-order produce directly.<br/>
            <strong>Efficient Packaging and Delivery:</strong>Secure packaging and timely delivery.<br/>
            <strong>Revenue Generation: </strong> Direct sales increase farmer income and market reach.<br/>
              </p>
            </motion.div>
          </div>
          <div className="card1">
            <img className="card-image1" src="/images/feedback.png" alt="content" />
            <motion.div 
            variants = {fadeIn("left", 0.1)}
            initial = "hidden"
            whileInView = {"show"}
            viewport = {{once:false, amount:0.9}}>
            <h2 className="card-title1">Additional Features and Benefits</h2>
            <p className="card-description1">
            <strong>Real-Time Tracking:</strong> Order and delivery status updates.<br/>
            <strong>Feedback System:</strong>Users provide feedback for improvements.<br/>
            <strong>Sustainable Practices: </strong> Reduces waste and promotes economic stability<br/>
            <strong>Community Support:</strong> Educational resources and customer support.<br/>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;






