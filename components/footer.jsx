// components/footer.jsx
"use client";

import React from "react";
import Link from "next/link";
import "./styleProject.css";

function Footer() {
    return (
        <footer className="Footer">
            <div className="Container">
                <h2>@2025. SuperIntro. All rights reserved</h2>
                <Link className="termsAndconditions" href="/terms-and-conditions">Terms & Conditions</Link>
				<Link className="privacyPolicy" href="/privacy-policy">Privacy Policy</Link>
            </div>
        </footer>
    );
}

export default Footer;
