import React from "react";
import "./TeamSection.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container2">
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="text-center2 mb-20"
        >
          <h1 className="title2">Meet Our Team</h1>
          <p className="description2">
          Our dedicated team combines agricultural expertise and innovative technology to empower farmers, bridging the gap between them and the market.
            <br></br> Get to know us!
          </p>
        </motion.div>
        <div className="team-grid">
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="team-member"
          >
            <div className="member-info">
              <img alt="team" className="member-img" src="/images/abhi.jpg" />
              <div className="member-details">
                <h2 className="member-name">Abhishek Tripathi</h2>
                <p className="member-role">Backend Developer</p>
              </div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          
          className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="/images/akashyadavadkfj.jpg" />
              <div className="member-details">
                <h2 className="member-name">Akash Yadav</h2>
                <p className="member-role">Backend Developer</p>
              </div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="/images/mohile.jpg" />
              <div className="member-details">
                <h2 className="member-name">Abhishek Mohile</h2>
                <p className="member-role">Front-End Developer</p>
              </div>
            </div>
          </motion.div>
          <motion.div
           variants={fadeIn("right", 0.1)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.9 }}
          className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="/images/shani.jpg" />
              <div className="member-details">
                <h2 className="member-name">Shani Soni</h2>
                <p className="member-role">Front-End Developer</p>
              </div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="team-member">
            <div className="member-info">
              <img
                alt="team"
                className="member-img"
                src="/images/anvesha.jpg"
              />
              <div className="member-details">
                <h2 className="member-name">Anvesha Pandey</h2>
                <p className="member-role">Designer</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
           variants={fadeIn("left", 0.1)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.9 }}
          
          className="team-member">
            <div className="member-info">
              <img
                alt="team"
                className="member-img"
                src="\images\lucky.jpg"
              />
              <div className="member-details">
                <h2 className="member-name">Lokendra Kumar</h2>
                <p className="member-role">Content Manager</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
