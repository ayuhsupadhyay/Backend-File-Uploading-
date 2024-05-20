const File = require("../models/file");

// Local file upload handler function
exports.localFileUpload = async (req, res) => {
    try {
        // File fetching
        const file = req.files.file;
        console.log("File received:", file);

        // Constructing the file path
        let path = __dirname + "/files/" + Date.now() +`.${file.name.split(".")[1]}`
        ;
        console.log("Path:", path);

        // Move the file to the specified path
        file.mv(path, (err) => {
            if (err) {
                console.error("Error moving file:", err);
                return res.status(500).json({
                    success: false,
                    message: "Error uploading file"
                });
            }
            console.log("File uploaded successfully");
            res.json({
                success: true,
                message: "Local file uploaded successfully"
            });
        });

    } catch (error) {
        console.error("Unable to upload the file:", error);
        res.status(500).json({
            success: false,
            message: "Unable to upload the file"
        });
    }
}
