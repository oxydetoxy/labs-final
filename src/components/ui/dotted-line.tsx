import * as React from "react";

interface DottedLineProps {
	className?: string;
	color?: string;
	strokeWidth?: number;
	dashLength?: number;
	gapLength?: number;
}

export default function DottedLine({
	className,
	color = "#4DD1F4",
	strokeWidth = 12,
	dashLength = 80,
	gapLength = 40,
}: DottedLineProps) {
	return (
		<div className={className}>
			<svg width="100%" height={strokeWidth} viewBox={`0 0 100 ${strokeWidth}`} preserveAspectRatio="none" aria-hidden="true">
				<line
					x1="0"
					y1={strokeWidth / 2}
					x2="100"
					y2={strokeWidth / 2}
					stroke={color}
					strokeWidth={strokeWidth}
					strokeLinecap="round"
					strokeDasharray={`${dashLength} ${gapLength}`}
				/>
			</svg>
		</div>
	);
}


