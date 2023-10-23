import React from "react";
import './pie.css';

const Circle = ({ colour, pct }) => {
    const r = 100;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - pct) * circ) / 100;
    return (
        <circle
            r={r}
            cx={75}
            cy={125}
            fill="transparent"
            stroke={strokePct !== circ ? colour : ""}
            strokeWidth={"10px"}
            strokeDasharray={circ}
            strokeDashoffset={pct ? strokePct : 0}
        ></circle>
    );
};

const Text = ({ percentage, y }) => {
    const str = `${y}%`;
    return (
        <text
            x="50%"
            y={str}
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1.5em"}
            className={typeof percentage === 'number' ? 'pie_value' : ''}
        >
            {typeof percentage === 'number' ? `${percentage.toFixed(0)}` : percentage}
        </text>
    );
};

const Pie = (props) => {
    const {
        percentActive,
        percentFinish,
        label,
        hoverValue,
        colorSectorActive,
        colorSectorFinish,
        colorCircle
    } = props;

    return (
        <svg width={250} height={250} className="pie_svg">
            <g transform={`rotate(-90 ${"100 100"})`}>
                <Circle colour={colorCircle} />
                <Circle colour={colorSectorActive} pct={percentActive} />
                <Circle colour={colorSectorFinish} pct={percentFinish} />
            </g>
            <Text percentage={label} y={45} />
            <Text percentage={hoverValue} y={60} />
        </svg>
    );
};

export default Pie;