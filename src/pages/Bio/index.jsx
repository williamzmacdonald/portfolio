export const Bio = () => {
    return (
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
    );
};
