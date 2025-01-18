// components/SkillCategories.js
const SkillCategories = ({ skills }) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            {skills.map((skill) => (
                <div
                    key={skill.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        borderRadius: "8px",
                        textAlign: "center",
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)"
                    }}
                >
                    <h3 style={{ margin: "10px 0" }}>{skill.icon} {skill.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default SkillCategories;
