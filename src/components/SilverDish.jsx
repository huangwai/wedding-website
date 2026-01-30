export default function SilverDish() {
  return (
    <div
      className="silver-dish"
      style={{
        position: "absolute",
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 30% 30%, #e6e6e6, #c0c0c0, #888888)",
        border: "6px solid #777",
        boxShadow:
          "inset 0 10px 15px rgba(255,255,255,0.3), 0 10px 20px rgba(0,0,0,0.4)",
        zIndex: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 40%, #f0f0f0, #b0b0b0)",
          border: "2px solid #999",
          boxShadow: "inset 0 5px 10px rgba(255,255,255,0.4)",
        }}
      />
    </div>
  );
}
