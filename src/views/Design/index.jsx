

const Preview = ({ data }) => {
    const { title, description, image } = data;
    return (
        <div className="preview">
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} alt="preview" />
        </div>
    );
}