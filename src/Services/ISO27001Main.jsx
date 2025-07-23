import React, { useState, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import ISO27001 from "./ISO27001/ISO27001.jsx";
import { useNavigate } from "react-router-dom";
import { BiFirstPage } from "react-icons/bi";
import bgImage from '../assets/27001bgI.webp';
import { useTheme, useMediaQuery } from "@mui/material";

export default function ISO27001Main() {
  const [arrowColor, setArrowColor] = useState("#fff");
  const isoRef = useRef(null);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const arrowBottom = isMobile ? "15px" : "20px";
  const centerWidth = isMobile ? "90vw" : "700px";
  const headingFontSize = isMobile ? "1.6rem" : "2.5rem";
  const subHeadingFontSize = isMobile ? "0.9rem" : "1.1rem";
  const centerTopMargin = isMobile ? "100px" : "150px";
  const subHeadingTopMargin = isMobile ? "25px" : "40px";
  const subHeadingBottomMargin = isMobile ? "30px" : "60px";

  const handleArrowClick = () => {
    isoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        style={{
          position: 'relative',
          height: '92vh',
          width: '98.9vw',
          overflow: "hidden",
          color: '#fff',
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Animated background image */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 2.05 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 2,
          }}
        ></div>

        {/* Top label */}
 <Typography
  variant="subtitle2"
  component="h1"
  gutterBottom
  sx={{
    position: 'absolute',
    top: isMobile ? "20px" : "30px",
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: {
      xs: "1.5rem",   // Mobile
      sm: "2.2rem",   // Small tablets
      md: "2.8rem",   // Tablets
      lg: "3.4rem",   // Desktops
      xl: "4rem",     // Large screens
    },
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    padding: isMobile ? "4px 10px" : "6px 12px",
    borderRadius: "20px",
    marginBottom: isMobile ? "50px" : "80px", 
    
    zIndex: 10,
  }}
>
   <span style={{ whiteSpace: "nowrap" }}>ISO 27001 : 2022</span>
</Typography>


        {/* Center content */}
      	        <div
  style={{
    position: "absolute",
    top: isMobile ? "50%" : isTablet ? "46%" : "44%", // increased top % slightly
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 10,
    width: centerWidth,
    padding: isMobile ? "0 10px" : "initial",
  }}
>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              marginTop: centerTopMargin,
               fontSize: {
        xs: "1.8rem",   // Mobile
        sm: "2.2rem",   // Small tablets
        md: "2.8rem",   // Tablets
        lg: "3.4rem",   // Desktops
        xl: "4rem",     // Large screens
      },
              lineHeight: 1.2,
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>Information Security </span><br/>
 
  <span style={{ whiteSpace: "nowrap" }}>Management Systems </span><br/>
  <span style={{ whiteSpace: "nowrap" }}> (ISMS)</span>
  
             
          </Typography>

          <Typography
            variant="h6"
            component="h2"
            sx={{
              textAlign: "center",
            color: "#FFFFFF",
               fontSize: {
        xs: "1rem",    // Mobile
        sm: "1.15rem", // Tablets
        md: "1.3rem",  // Desktop
        lg: "1.5rem",  // Large Desktop
      },
              marginTop: subHeadingTopMargin,
              marginBottom: subHeadingBottomMargin,
            }}
          >
            Protect sensitive data and strengthen stakeholder confidence with ISO 27001:2022 — the global standard that ensures robust information security through effective risk management, controls, and continuous improvement.
          </Typography>
        </div>

        {/* Bottom arrow */}
        <IoIosArrowDropdown
          size={60}
          style={{
            position: 'absolute',
            bottom: arrowBottom,
            left: '50%',
            transform: 'translateX(-50%)',
            color: arrowColor,
            zIndex: 10,
            cursor: "pointer",
            transition: "color 0.3s ease"
          }}
          onMouseEnter={() => setArrowColor("rgb(18, 181, 231)")}
          onMouseLeave={() => setArrowColor("#fff")}
          onClick={handleArrowClick}
        />
      </div>

      {/* Link to ISO27001 section */}
      <div ref={isoRef} style={{ marginTop: "80px" }}>
        <ISO27001 />
      </div>

      {/* Back to services button */}
      <BiFirstPage
        size={45}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          color: '#12b5e7',
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: '50%',
          padding: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          zIndex: 999,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#0d7bc4'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#12b5e7'}
        onClick={() => navigate("/all-iso")}
      />
    </div>
  );
}
