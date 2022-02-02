import { AiOutlineMail } from "react-icons/ai";

export const Bio = () => {
    return (
        <>
            <div className="flex">
                <img
                    src={`${process.env.PUBLIC_URL}/avatar.jfif`}
                    alt="me"
                    className="w-16 h-auto block rounded-full"
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
            <div className="flex items-center">
                <AiOutlineMail className="text-slate-50 mr-1" />
                <a href="mailto:williamzmacdonald@gmail.com">
                    <span className="text-slate-50 mt-2 text-sm">
                        williamzmacdonald@gmail.com
                    </span>
                </a>
            </div>
        </>
    );
};
