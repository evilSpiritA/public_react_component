import "./style.scss";
import { I_children } from '@/Ryan/configs/routes'

type T_ItemProps = {
    propsData: I_children;
    target?: string;
};

const DisplayEle: React.FC<T_ItemProps> = ({ propsData, target }) => {
    const { title, description, href, displayImg } = propsData;

    return (
        <>
            <div className="card">
                <a href={href} target={target}>
                    <div className="card-borders">
                        <div className="border-top"></div>
                        <div className="border-right"></div>
                        <div className="border-bottom"></div>
                        <div className="border-left"></div>
                    </div>
                    <div className="card-content">
                        <img className="pageImg" src={displayImg} />
                        <div className="title">{title}</div>
                        <div className="description">{description}</div>
                        {/* <div className="icons">
                            <a className="icon" href="" target="_blank">
                                <img className="icon"></img>
                            </a>
                        </div> */}
                    </div>
                </a>
            </div>
        </>
    )
}

export default DisplayEle