import Marquee from "react-fast-marquee";
import Moment from 'react-moment';

export default function RunText() {
    return (
        <div className="flex fixed bottom-0 text-4xl text-gray-900">
            <div className="bg-green-400 p-2">
                <Moment locale="ID" format="LT" />
            </div>
            <div className="pt-2 pb-2">
                <Marquee gradient={false} loop={0}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    );
}





