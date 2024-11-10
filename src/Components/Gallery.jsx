export default function Gallery() {
    return (
        <section>
            <h1>Inspiring Sculptures</h1>
            <div className="row">
                <Image src="https://i.imgur.com/ZF6s192.jpg" alt="ajeet" name="Image 1" />
                <Image src="https://i.imgur.com/ZF6s192.jpg" alt="mathur" name="Image 2" />
                <Image src="https://images.pexels.com/photos/11273449/pexels-photo-11273449.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="new song" name="Image 3" />
            </div>
        </section>
    );
}

function Image({ src, alt, name = "default name" }) { // agar koi name pass nhi krega toh default value lega
    return (
        <div className="col-sm-4">
            <img src={src} alt={alt} style={{ width: "200px", height: "200px", borderRadius: "25px" }} />
            <p>{name}</p>
        </div>
    );
}