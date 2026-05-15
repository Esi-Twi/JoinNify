

export default function Loader() {
    return (
        <div style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            zIndex: 9999
        }}>
            <div className="loader"></div>
        </div>
    );
}



/* HTML: <div class="loader"></div> */
