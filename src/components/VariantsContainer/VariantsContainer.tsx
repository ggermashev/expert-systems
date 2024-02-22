import { useMemo } from "react";
import { IVariant } from "../../types";
import { VariantsContainerStyled } from "./VariantsContainer.styled";
import Button from "../Button/Button";
import { Variant } from "../Variant/Variant";


const VariantsContainer = () => {

    const variants: IVariant[] = useMemo(() => {
        return []
    }, [])

    return (
        <VariantsContainerStyled>
            <Button onClick={() => {}}>Добавить ответ</Button>
            {variants?.map(v => 
                <Variant key={`variant-${v.id}`} id={v.id} text={v.text}/>
            )}
        </VariantsContainerStyled>
    )
}

export default VariantsContainer;