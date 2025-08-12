import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { createPortal } from "react-dom";
import InfoIcon from "./info-icon.png";

type Props = {
  isDark?: boolean;
  previewSrc?: string;
};

const RecommendationIcon: React.FC<Props> = ({ previewSrc }) => {
  const { isDark, isMobile } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const iconStyle: React.CSSProperties = {
    width: 12,
    height: 12,
    filter: isDark ? "invert(1)" : "invert(0)",
    transition: "transform 0.2s",
    cursor: "pointer",
    marginLeft: "0.4vw",
  };

  return (
    <>
      {/* Inline icon — remains inline wherever it’s used */}
      <span
        style={{ display: "inline-flex", lineHeight: 0 }}
        onMouseEnter={(e) =>
          ((e.target as HTMLElement).firstElementChild as HTMLElement | null)
            ?.style &&
          ((
            (e.target as HTMLElement).firstElementChild as HTMLElement
          ).style.transform = "scale(1.1)")
        }
        onMouseLeave={(e) =>
          ((e.target as HTMLElement).firstElementChild as HTMLElement | null)
            ?.style &&
          ((
            (e.target as HTMLElement).firstElementChild as HTMLElement
          ).style.transform = "scale(1)")
        }
        onClick={() => setOpen(true)}
        aria-label="Open recommendation letter"
        role="button"
      >
        <img src={InfoIcon} alt="Recommendation" style={iconStyle} />
      </span>

      {/* Fixed overlay via portal */}
      {open &&
        createPortal(
          <div
            onClick={() => setOpen(false)} // click outside closes
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.55)", // shadowish backdrop
              backdropFilter: "blur(2px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
            aria-modal="true"
            role="dialog"
          >
            {/* Modal panel */}
            <div
              onClick={(e) => e.stopPropagation()} // prevent backdrop close
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "85vh",
                borderRadius: 12,
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                overflow: "hidden",
                background: isDark ? "#0b0b0b" : "#fff",
                marginTop: isMobile ? "25vh" : "5vh",
              }}
            >
              {/* Close button (X) */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  width: 32,
                  height: 32,
                  border: "none",
                  borderRadius: 8,
                  background: isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(0,0,0,0.06)",
                  color: isDark ? "#fff" : "#111",
                  fontSize: 18,
                  lineHeight: "32px",
                  cursor: "pointer",
                }}
              >
                ×
              </button>

              {/* Image */}
              <img
                src={previewSrc}
                alt="Recommendation Letter"
                style={{
                  display: "block",
                  maxWidth: "90vw",
                  maxHeight: "85vh",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default RecommendationIcon;
