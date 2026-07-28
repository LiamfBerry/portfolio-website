"use client";

import { useState } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    function handleClick() {
        document.documentElement.classList.toggle("dark");
        setIsDark(!isDark);
    }

    return (
        <button onClick={handleClick}>{isDark ? "Switch to Light" : "Switch to Dark"}</button>
    );
}