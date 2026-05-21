import type { ReactNode } from "react";

type Props = {
    no: number;
    title: string;
    children: ReactNode;
};

const FormFrame = ({
        no,
        title,
        children
    }: Props) => {
    return (
        <div className="rounded-xl overflow-hidden text-sm bg-purple-700/90 border-[1.2px] border-purple-500">
            <div className="flex items-center h-9 bg-purple-800">
                <div className="
                    w-9 h-full
                    bg-orange-500
                    flex items-center justify-center
                    text-white
                    font-black
                    text-sm
                ">
                    {no}
                </div>

                <h2 className="px-5 text-white font-bold">
                    {title}
                </h2>
            </div>

            <div className="p-5 text-zinc-300">
                {children}
            </div>
        </div>
    );
};

export default FormFrame;