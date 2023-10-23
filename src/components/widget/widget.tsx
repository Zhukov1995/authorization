import React, { useEffect, useState } from "react";
import './widget.scss';
import Pie from "../UI/pie/pie";
import type IStatistic from "../../interfaces/IStatistic";

interface Props {
    data: IStatistic
    label: string
}

const Widget = ({ data, label }: Props): JSX.Element => {
    const [allCount, setAllCount] = useState<number>(0);
    const [hoverValue, setHoverValue] = useState<number>(0);
    const [colorSectorActive, setColorSectorActive] = useState<string>('silver');
    const [colorSectorFinish, setColorSectorFinish] = useState<string>('rgb(167, 166, 166)');
    const [colorCircle, setColorCircle] = useState<string>('lightgrey');

    useEffect(() => {
        const count = data.active + data.completed + data.inactive;
        setAllCount(count);
        setHoverValue(count);
    }, [data])

    const arrInfo = [
        { name: 'Всего', value: data.active + data.completed + data.inactive },
        { name: 'Активных', value: data.active },
        { name: 'Неактивных', value: data.inactive },
        { name: 'Завершенных', value: data.completed }
    ];

    const hoverMouseEnter = (item: { value: number, name: string }) => {
        setHoverValue(item.value);
        switch (item.name) {
            case 'Всего': {
                setColorSectorActive('rgb(254, 197, 90)');
                setColorSectorFinish('rgb(220, 151, 2)');
                setColorCircle('rgb(165, 165, 165)');
            };
                break;
            case 'Активных': {
                setColorSectorActive('rgb(254, 197, 90)');
                setColorSectorFinish('rgb(220, 151, 2)');
            }
                break;
            case 'Неактивных': {
                setColorSectorActive('lightgrey');
                setColorSectorFinish('lightgrey');
                setColorCircle('rgb(165, 165, 165)');
            }
                break;
            case 'Завершенных': {
                setColorSectorActive('lightgrey');
                setColorSectorFinish('rgb(220, 151, 2)');
            }
                break;
            default: {
                setColorSectorActive('rgb(254, 197, 90)');
                setColorSectorFinish('rgb(220, 151, 2)');
            };
        }
    }


    const hoverSectorMouseEnter = (e: any) => {
        const state = e.target.getAttribute('data-name');
        switch (state) {
            case 'active': {
                setColorSectorActive('rgb(254, 197, 90)');
                setHoverValue(data.active);
            };
                break;
            case 'inactive': {
                setColorSectorActive('lightgrey');
                setColorSectorFinish('lightgrey');
                setColorCircle('rgb(165, 165, 165)');
                setHoverValue(data.inactive);
            };
                break;
            case 'completed': {
                setColorSectorFinish('rgb(220, 151, 2)');
                setHoverValue(data.completed);
            };
                break;
            default: setColorSectorActive('rgb(254, 197, 90)');;
        }
    }

    const hoverMouseLeave = () => {
        setHoverValue(allCount);
        setColorSectorActive('silver');
        setColorSectorFinish('rgb(167, 166, 166)');
        setColorCircle('lightgrey');
    }

    const viewArrInfo = arrInfo.map((item, index) => {
        return (
            <div
                className="widget__info__item"
                key={index}
                onMouseEnter={() => hoverMouseEnter(item)}
                onMouseLeave={() => hoverMouseLeave()}
            >
                <span>{item.name}</span>
                <span>{item.value}</span>
            </div>
        )
    })

    return (
        <div className="widget">
            <Pie
                percentActive={((data.active + data.completed) * 100) / allCount}
                percentFinish={(data.completed * 100) / allCount}
                label={label}
                hoverValue={hoverValue}
                colorSectorActive={colorSectorActive}
                colorSectorFinish={colorSectorFinish}
                colorCircle={colorCircle}
                hoverSectorMouseEnter={hoverSectorMouseEnter}
                hoverMouseLeave={hoverMouseLeave}
            />
            <div className="widget__info">
                {viewArrInfo}
            </div>
        </div>
    )
}

export default Widget;