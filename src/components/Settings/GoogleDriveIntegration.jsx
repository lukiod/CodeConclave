const GoogleDriveIntegration = ({ onConnected }) => {
  return (
    <div style={{ marginTop: "16px" }}>
      <button
        onClick={onConnected}
        style={{
          padding: "10px 16px",
          backgroundColor: "#3182ce",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Connect to Google Drive
      </button>
    </div>
  );
};

export default GoogleDriveIntegration;
