"use client";

import { useState } from "react";

export default function Counter() {
    //     return value, function name
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Clicked {count} times
        </button>
    );
}