import SimpleImageSlider from "react-simple-image-slider"
function Third(){

    const sliderImages = [
        {
           url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTdUmK6fRPfPQIMyOxUOjiTnR2VYizvkkWUxLhGoVJNobm5Id3fpRhsIGtPj3H06ujPb4&usqp=CAU"
        },
        {
           url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQduUpBWhSdgkWqqIrSmw5MMU697Xlx3SCjlB4eZSv0Q&s"
        },
        {
           url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTnzApyh1ZmbXLBUg_iFRio23hzRyAJfwBRfnVozXdEnu-NK4jFt2_gsYujKf-CbT6Cr_A&usqp=CAU"
        },
        {
           url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTDnfOIY9gjVyoT4ulMp55roiV5KefqaDByUc0HdD8p3tdpXuwxTaXjhLdyUFeQzZ2ZwE&usqp=CAU"
        },
        {
           url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcR3IVlvufXIDZXxq0O8SVqwU2HeO6y7as0OXJl-YT55BA&s"
        },
        {
           url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQs_7aafRRY4vEbWz2wydowaogMmGI7mRVG6MQfZVtKDFXUGqt5iF-Mu0AYMQBEeznPkU&usqp=CAU"
        },
        {
           url: "https://smartslider3.com/wpcontent/uploads/2019/01/photo_slideshow.jpg"
        },
     ];
  
    return(
        <div>
            <h4>what they have said</h4>
            <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showNavs={true}
            showBullets={true}

            autoPlay={true}
         />



        </div>
    )
}
export default Third