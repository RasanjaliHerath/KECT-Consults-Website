import React, { useState, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import ISO19011 from "./ISO19011/ISO19011.jsx";
import { useNavigate } from "react-router-dom";
import { BiFirstPage } from "react-icons/bi";
import bgImage from "../assets/19011bgI.webp";
import { useTheme, useMediaQuery } from "@mui/material";

export default function ISO19011Main() {
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
          position: "relative",
          height: "92vh",
          width: "98.9vw",
          overflow: "hidden",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Animated background */}
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

        {/* Top label*/} 
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
        xs: "1.5rem",   // Mobile
        sm: "2.2rem",   // Small tablets
        md: "2.8rem",   // Tablets
        lg: "3.4rem",   // Desktops
        xl: "4rem",     // Large screens
      },
            color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            textAlign: "center",
            fontWeight: "bold",
            padding: isMobile ? "4px 10px" : "6px 12px",
            borderRadius: "20px",
            zIndex: 10,
          }}
        >
          <span style={{ whiteSpace: "nowrap" }}>ISO 19011 : 2018</span>
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
            Auditing Management Systems
          </Typography>

          <Typography
            variant="h6"
            component="h2"
            sx={{
              textAlign: "center",
             color: "#FFFFFF",
              marginTop: subHeadingTopMargin,
              marginBottom: subHeadingBottomMargin,
              fontSize: {
        xs: "1rem",    // Mobile
        sm: "1.15rem", // Tablets
        md: "1.3rem",  // Desktop
        lg: "1.5rem",  // Large Desktop
      },
              lineHeight: 1.2,
            }}
          >
            Drive audit excellence with ISO 19011:2018 — your trusted guide for effective management system audits that strengthen governance, enhance risk control, and power continuous improvement.
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

      <div ref={isoRef} style={{ marginTop: "80px" }}>
        <ISO19011 />
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
