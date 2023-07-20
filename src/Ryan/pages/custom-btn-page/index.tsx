import './style.scss'
import { useState } from 'react';
import Topbar from "@/Ryan/components/topbar";
import CustomBtn from '@/Ryan/components/custom-btn';


const CustomBtnPage: React.FC = () => {

    const [variant, setVariant] = useState<'contained' | "text" | "outlined">('contained');
    const [displayText, setDisplayText] = useState('');
    const [themeColor, setThemeColor] = useState('');
    const [radius, setRadius] = useState('');
    const [spinnerColor, setSpinnerColor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisable] = useState(false);
    const [startIcon, setStartIcon] = useState(false);
    const [endIcon, setEndIcon] = useState(false);

    const startIconImg = (
        <div style={{
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '10px 10px 10px 0',
            borderColor: 'transparent #000000 transparent transparent'
        }}></div>
    )

    const endIconImg = (
        <div style={{
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '10px 0 10px 10px',
            borderColor: 'transparent transparent transparent #000000'
        }}></div>
    )

    return (

        <div className="customBtnPageWrapper">
            <Topbar label={'Button Component'} />
            <div className="middleArea">
                <div className="displayArea">
                    <CustomBtn
                        className='CustomBtnStyle'
                        variant={variant} themeColor={themeColor} isLoading={isLoading} isDisabled={isDisabled} radius={radius}
                        spinnerColor={spinnerColor} startIcon={startIcon && startIconImg} endIcon={endIcon && endIconImg}
                    >{displayText}</CustomBtn>
                </div>

                <div className="selectionArea">

                    <div className="textArea">
                        <span className="title">Change Text :</span>
                        <input type="text" onChange={e => setDisplayText(e.target.value)} />
                    </div>

                    <div className="variantArea">
                        <span className="title">Change Variant</span>
                        <CustomBtn variant={'contained'} onClick={() => { setVariant('contained') }}>Contained</CustomBtn>
                        <CustomBtn variant={'outlined'} onClick={() => { setVariant('outlined') }}>Outlined</CustomBtn>
                        <CustomBtn variant={'text'} onClick={() => { setVariant('text') }}>Text</CustomBtn>
                    </div>

                    <div className="themeColorArea">
                        <span className="title">Change Theme Color : #</span>
                        <input type="text" placeholder='hex color' onChange={e => setThemeColor("#" + e.target.value)} />
                    </div>

                    <div className="isLoadingArea">
                        <span className="title">Change Spinner Color : #</span>
                        <input type="text" placeholder='hex color' onChange={e => setSpinnerColor("#" + e.target.value)} />
                        <CustomBtn variant={'outlined'} onClick={() => { setIsLoading(!isLoading) }}>isLoading</CustomBtn>
                    </div>

                    <div className="radiusArea">
                        <span className="title">Change Border Radius :</span>
                        <input type="text" placeholder='' onChange={e => setRadius(e.target.value)} />
                    </div>

                    <div className="otherArea">
                        <CustomBtn variant={'outlined'} onClick={() => { setIsDisable(!isDisabled) }}>IsDisabled</CustomBtn>
                        <CustomBtn variant={'outlined'} onClick={() => { setStartIcon(!startIcon) }}>StartIcon</CustomBtn>
                        <CustomBtn variant={'outlined'} onClick={() => { setEndIcon(!endIcon) }}>EndIcon</CustomBtn>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CustomBtnPage;