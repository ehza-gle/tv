import Marquee from "react-fast-marquee";
import Moment from 'react-moment';

export default function RunText() {
    return (
        <div className="marquee">
            <div className="time">
                <Moment locale="ID" format="LT" />
            </div>
            <Marquee gradient={false} loop={0}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            <style jsx>
                {`
                    .marquee {
                        margin: 0;
                        padding: 0;
                        bottom: 0;
                        position: fixed;
                        height: 100%;
                        width : 100vw;
                        font-size: 3rem;
                    }
                    .time {
                        padding: 5px;
                        background-color: blue;
                    }

                `}
            </style>
        </div>
    );
}





