import axios from "axios";

const ImageUploadService = (() => {

    const imageUploadEndpoints = "https://localhost:7063/image";

    const UploadImage = async (image: File) => {
        const formData = new FormData();
        formData.append("file", image);

        const result = await axios({
            url: imageUploadEndpoints,
            method: "POST",
            data: formData,
            headers: {"Content-Type" : "multipart/form-data"}
        });

        formData.delete("file");
    }


    return {
        UploadImage
    }


})()

export default ImageUploadService;