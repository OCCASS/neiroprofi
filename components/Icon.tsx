import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
    name: string
    width: number
    height: number
}

const Icon = ({name, width, height, ...rest}: Props) => {
    return (
        <svg width={width} height={height} {...rest}>
            <use href={`/icons.svg#${name}`}/>
        </svg>
    )
}

export default Icon;