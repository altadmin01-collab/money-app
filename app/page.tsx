"use client";
import { useState } from "react";

const resultsMap = {
  content: {
    title: "AI图文内容发布（极简副业）",
    reason:
      "你当前时间少、预算低、没有明确技能，并且不愿意频繁社交，所以不适合接单型和服务型项目。更适合从低门槛、可复制、可长期积累的内容型路径开始。",
    actions: [
      "确定一个主题，例如“AI赚钱工具”",
      "写出3个标题",
      "发布第1条图文内容",
    ],
  },
  service: {
    title: "AI辅助接单（快速变现）",
    reason:
      "你愿意社交，并且有更多可投入时间，这意味着你更适合先从可以快速拿到结果的接单型路径开始。",
    actions: [
      "确定一个可售卖的小服务，例如“AI写文案”",
      "写一段接单介绍",
      "把服务发到朋友圈或平台测试反馈",
    ],
  },
  product: {
    title: "数字产品售卖（长期型副业）",
    reason:
      "你有预算并且目标是长期副业，更适合做可复用产品。",
    actions: [
      "确定一个主题，例如“AI副业模板包”",
      "整理一个简单模板",
      "发布并测试是否有人愿意购买",
    ],
  },
};

export default function Page() {
  const [streak, setStreak] = useState(0);
  const [time, setTime] = useState("30分钟");
  const [budget, setBudget] = useState("0");
  const [social, setSocial] = useState("不愿意");
  const [goal, setGoal] = useState("每天多赚100块钱");

  const [result, setResult] = useState(resultsMap.content);

  const handleGenerate = () => {
    const hasMoreTime = time === "2小时" || time === "4小时以上";
    const isSocial = social === "愿意" || social === "一般";
    const hasBudget = budget === "500以内" || budget === "1000以上";
    const wantsLongTerm = goal === "找到长期副业";

    if (hasBudget && wantsLongTerm) {
      setResult(resultsMap.product);
    } else if (hasMoreTime && isSocial) {
      setResult(resultsMap.service);
    } else {
      setResult(resultsMap.content);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>人生决策简化器（赚钱版）</h1>

      <div style={{ display: "flex", gap: 40 }}>
        <div>
          <h3>用户输入</h3>

          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option>30分钟</option>
            <option>1小时</option>
            <option>2小时</option>
            <option>4小时以上</option>
          </select>

          <br /><br />

          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option>0</option>
            <option>100以内</option>
            <option>500以内</option>
            <option>1000以上</option>
          </select>

          <br /><br />

          <select value={social} onChange={(e) => setSocial(e.target.value)}>
            <option>不愿意</option>
            <option>一般</option>
            <option>愿意</option>
          </select>

          <br /><br />

          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option>每天多赚100块钱</option>
            <option>先赚到第一笔钱</option>
            <option>找到长期副业</option>
          </select>

          <br /><br />

          <button onClick={handleGenerate}>
            生成赚钱路径
          </button>
        </div>

        <div>
          <h3>结果</h3>
          <h2>{result.title}</h2>
          <p>{result.reason}</p>

          <ul>
            {result.actions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button onClick={() => setStreak(streak + 1)}>
            我今天完成了
          </button>

          <p>连续 {streak} 天</p>
        </div>
      </div>
    </div>
  );
}
