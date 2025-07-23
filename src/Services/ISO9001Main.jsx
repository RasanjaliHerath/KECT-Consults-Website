import React, { useState, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import ISO9001 from "./ISO9001/ISO9001.jsx";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/9001bgI.webp";
import { BiFirstPage } from "react-icons/bi";
import { useTheme, useMediaQuery } from "@mui/material";

export default function ISO9001Main() {
  const [arrowColor, setArrowColor] = useState("#fff");
  const navigate = useNavigate();
  const isoRef = useRef(null);
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
    position: "relative",
    height: '100vh',
          width: '98.9vw',
    overflow: "hidden",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }}
>

        {/* Background animation */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 2.05 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 2,
          }}
        />

        {/* Top label */}
       <Typography
  variant="subtitle2"
  component="h1"
  gutterBottom
  sx={{
    position: "absolute",
    top: isMobile ? "20px" : "30px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: {
      xs: "1.5rem",   // Slightly reduced for mobile
      sm: "2.2rem",
      md: "2.8rem",
      lg: "3.4rem",
      xl: "4rem",
    },
    color: "#FFFFFF",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    textAlign: "center",
    fontWeight: "bold",
    padding: isMobile ? "4px 10px" : "6px 12px",
    borderRadius: "20px",
    zIndex: 10,
    whiteSpace: "nowrap", // Ensures single-line rendering
  }}
>
  <span style={{ whiteSpace: "nowrap" }}>ISO 9001 : 2015</span>
</Typography>


        {/* Center content */}
       <div
  style={{
    position: "absolute",
    top: isMobile ? "40%" : isTablet ? "38%" : "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 10,
    width: centerWidth,
    padding: isMobile ? "0 10px" : "initial",
  }}
>
  {/* Heading */}
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
    Quality Management Systems
  </Typography>

  {/* Subheading */}
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
    Transform your business with ISO 9001:2015 certification.
    Achieve global recognition, improve efficiency, and build
    customer trust with internationally accepted quality standards.
  </Typography>
</div>


        {/* Arrow icon */}
        <IoIosArrowDropdown
          size={60}
          style={{
            position: "absolute",
             
            bottom: arrowBottom,
            left: "50%",
            transform: "translateX(-50%)",
            color: arrowColor,
            zIndex: 10,
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={() => setArrowColor("rgb(18, 181, 231)")}
          onMouseLeave={() => setArrowColor("#fff")}
          onClick={handleArrowClick}
        />
      </div>

      <div ref={isoRef} style={{ marginTop: "30px" }}>
        <ISO9001 />
      </div>

      {/* Back to services button */}
      <BiFirstPage
        size={45}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          color: "#12b5e7",
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: "50%",
          padding: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          cursor: "pointer",
          zIndex: 999,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#0d7bc4")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#12b5e7")}
        onClick={() => navigate("/all-iso")}
      />
    </div>
  );
}
