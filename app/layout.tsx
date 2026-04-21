export const metadata = {
  title: "人生决策简化器（赚钱版）",
  description: "输入你的时间、预算、状态和目标，生成一份适合你的赚钱路径报告。",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
