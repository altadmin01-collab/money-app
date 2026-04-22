"use client";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <h1>🎉 成功了！你的产品上线了</h1>
      <p>这说明部署已经完全成功</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          marginTop: 20,
          background: "black",
          color: "white",
          border: "none",
        }}
      >
        点了 {count} 次
      </button>
    </div>
  );
}
