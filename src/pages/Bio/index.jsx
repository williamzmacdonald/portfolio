import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

export const Bio = () => {
    return (
        <>
            <div className="flex">
                <img
                    src={`${process.env.PUBLIC_URL}/avatar.jfif`}
                    alt="me"
                    className="w-16 h-auto block rounded-full mr-2"
                />
                <div>
                    <h3 className="text-slate-50 text-3xl">Zach MacDonald</h3>
                    <p className="text-slate-50">Software Engineer</p>
                </div>
            </div>
            <p className="text-slate-50 mt-2">
                I am a software engineer working at Hotel Engine! I am a
                software engineer working at Hotel Engine! I am a software
                engineer working at Hotel Engine!I am a software engineer
                working at Hotel Engine!
            </p>
            <div className="flex mt-2 items-center">
                <GoLocation className="text-slate-50 mr-2" />
                <p className="text-slate-50 mr-2">Houston, TX</p>
                <AiOutlineMail className="text-slate-50 mr-2" />
                <a
                    href="mailto:williamzmacdonald@gmail.com"
                    className="text-slate-50"
                >
                    williamzmacdonald@gmail.com
                </a>
            </div>
        </>
    );
};
