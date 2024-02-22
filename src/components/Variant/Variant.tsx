import { FC } from "react"
import { IVariant } from "../../types"
import { VariantStyled } from "./Variant.styled"


const Variant: FC<IVariant> = ({text}) => {
    return (
        <VariantStyled>
            <p>{text}</p>
        </VariantStyled>
    )
}

export {Variant}