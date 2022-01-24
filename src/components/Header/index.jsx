export const Header = () => {
    return (
        <div className="border-2 border-slate-50 p-3 flex justify-around">
            <p className="text-slate-50">Resume</p>
            <a href="https://github.com/williamzmacdonald">
                <img
                    src={`${process.env.PUBLIC_URL}/GitHubLightIcon.png`}
                    alt="github"
                />
            </a>
        </div>
    );
};
