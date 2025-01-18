// pages/index.js
import { useState } from "react";
import SkillCategories from "../components/SkillCategories";
import mockSkills from "../components/mockSkills";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState(""); // 検索クエリの状態
    const filteredSkills = mockSkills.filter(skill =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    ); // フィルタリング処理

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center" }}>Choose a Skill Category</h1>
            <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // 状態を更新
                style={{
                    marginBottom: "20px",
                    padding: "10px",
                    width: "100%",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    boxSizing: "border-box"
                }}
            />
            <SkillCategories skills={filteredSkills} />
        </div>
    );
}
