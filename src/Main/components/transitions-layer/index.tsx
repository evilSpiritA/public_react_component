import "./style.scss";
import { clsx } from 'clsx';

type propType = {
    active: boolean;
}

const LeftLayer: React.FC<propType> = ({ active }) => {
    return (
        <>
            <div className={clsx('left-layer', active ? "active" : '')}>
                <div className="left-layer-1"></div>
                <div className="left-layer-2"></div>
                <div className="left-layer-3"></div>
            </div>
        </>
    )

}

const RightLayer: React.FC<propType> = ({ active }) => {
    return (
        <>
            <div className={clsx('right-layer', active ? "active" : '')}>
                <div className="right-layer-1"></div>
                <div className="right-layer-2"></div>
                <div className="right-layer-3"></div>
            </div>
        </>
    )
}

export { LeftLayer, RightLayer };