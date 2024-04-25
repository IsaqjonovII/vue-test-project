const galleryData = [];
for (let i = 0; i < 15; i++) {
    galleryData.push({
        id: i,
        img: i % 2 === 0 ? "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Inventory/FD/97/FD977C48-5985-44E1-90AF-CA07C303BE00.jpg" : "https://www.webike.es/magazine/wp-content/uploads/2022/10/KAWASAKI_Z1000_01.jpg",
    });
}

export default galleryData;