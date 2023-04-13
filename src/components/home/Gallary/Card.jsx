import { Button, SIZE } from "baseui/button";
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";

const Card = ({ images, caption, hashtags, index, openTemplate, key }) => {
    let hashtag = "";
    if (hashtags !== null || hashtags !== "") {
        hashtag = hashtags.replace(/%23/g, "#");
    }
    return (
        <div className="rounded-[15px] box-shadow-custom relative pb-14" key={key}>
            <div className="relative">
                <div className="w-[400px] h-[200px] overflow-hidden relative rounded-t-[15px]">
                    <img className="translate-x-[-50%]" src={images[0].image_path} alt="image" />
                </div>
                <div className="absolute left-0 top-0 translate-x-[50%]">
                    <div className="w-[400px] h-[200px] overflow-hidden relative rounded-r-[15px]">
                        <img className="translate-x-[-50%]  rounded-r-[15px]" src={images[1].image_path} alt="image" />
                    </div>
                </div>
                <div className="w-[400px] h-[200px] overflow-hidden relative">
                    <img className="translate-x-[-50%]" src={images[2].image_path} alt="image" />
                </div>
                <div className="absolute right-0 bottom-0 translate-x-[50%]">

                    <div className="w-[400px] h-[200px] overflow-hidden relative">
                        <img className="translate-x-[-50%]" src={images[3].image_path} alt="image" />
                    </div>
                </div>
            </div>
            <div className="max-w-[400px] py-4 px-4 font-sm font-poppins leading-[22px]">
                <p>{caption}<span className="font-roboto block mt-1">{hashtag}</span></p>
            </div>
            <div className=" px-4 right-0 bottom-4 absolute">
                <ThemeProvider
                    theme={createTheme(lightThemePrimitives, {
                        colors: {
                            buttonPrimaryFill: "rgb(28,100,242)",
                            buttonPrimaryHover: "rgb(26,86,219)"
                        }

                    })}
                >
                    <Button
                        onClick={() => openTemplate(index)}
                        size={SIZE.compact}>
                        Open template
                    </Button>
                </ThemeProvider>


            </div>
        </div>
    )
}


export default Card;