async function sendData() {
    try {
        const response = await fetch("https://render-server-infos-getter.onrender.com/data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                test: "test",
                navigator: navigator.userAgent
            })
        });

        const data = await response.json();
        console.log("Response :", data);
    } catch (err) {
        console.error("Error :", err);
    }
}

sendData();
