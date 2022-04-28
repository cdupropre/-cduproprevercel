import { Navigation } from "./navigation";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Navigation />
        {children}
        <div id="footer" style={{ display: "flex", alignItems: "center" }}>
          <div className="container text-center">
            <p>
              &copy; {new Date().getFullYear()} c du propre plus - Realisation{" "}
              <a
                id="techdigital"
                href="https://tech-digital.fr/"
                target="_blank"
                style={{ color: "#888" }}
              >
                Tech digital
              </a>{" "}
              <Link href="/mentions">
                <span style={{ cursor: "pointer" }}> - Mentions légales</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
