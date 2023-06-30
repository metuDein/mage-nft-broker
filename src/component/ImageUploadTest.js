import React, { useState } from 'react'
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';

import { uuidv4 } from '@firebase/util';

const ImageUploadTest = () => {
    const [image, setImage] = useState(null);
    const [imgList, setImgList] = useState([]);
    const listRef = ref(storage, "images/");

    useState(() => {
        listAll(listRef).then((res) => {
            console.log(res);


            const duplicate = res.items.find(item => item.name === image.name)

            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImgList(prev => [...prev, url]);
                })
            })

        })
    }, [])


    // const uploadImage = () => {
    //     if(image === null) return;

    //     let uploadImage;
    //     const imageRef = ref(storage, `images/${image.name}`)

    //     listAll(listRef).then((res) => {
    //         const duplicate = res.items.find(item => item.name === image.name)
    //         if (duplicate) return window.alert("this asset already exists");


    //         uploadBytes(imageRef, image).then((snapshot) => {

    //             getDownloadURL(snapshot.ref).then((url) => {
    //                 setImgList(prev => [...prev, url]);
    //                 uploadImage = url
    //                 console.log(uploadImage);
    //             })
    //         alert("image uploaded")
    //     })

    //     })


    // }

    const uploadImage = async (listRef, image) => {
        const imageRef = ref(storage, `images/${image?.name}`)

        if(!image) return window.alert("image required");

        let uploadImg;
        try {
            const res = await listAll(listRef);
            const duplicate = res.items.find((item) => item.name === image?.name);
            if (duplicate) {
                window.alert("This asset already exists");
                return;
            }

            const snapshot = await uploadBytes(imageRef, image);
            const url = await getDownloadURL(snapshot.ref);
            setImgList((prev) => [...prev, url]);
            uploadImg = url;
            console.log(uploadImg);
            return uploadImg;
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    // Usage:
    // uploadImage(listRef, image);


    return (
        <div style={{ marginTop: '200px' }}>

            <input type="file" onChange={e => setImage(e.target.files[0])} />
            <button onClick={() => uploadImage(listRef, image)}>Upload image</button>

            {imgList.map(url => (
                <img src={url} width={'400px'} />
            ))}
        </div>
    )
}

export default ImageUploadTest