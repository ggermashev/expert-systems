import { useMemo } from "react";
import { IVariant } from "../../types";
import { VariantsContainerStyled } from "./VariantsContainer.styled";
import Button from "../Button/Button";
import { Variant } from "../Variant/Variant";
import VariantsStore from "../../store/Variants.store";
import Block from "../Block/Block";
import { observer } from "mobx-react-lite";
import AnswersStore from "../../store/Answers.store";


const VariantsContainer = observer(() => {

    return (
        <VariantsContainerStyled>
            <Button onClick={() => {
                VariantsStore.variants = [...VariantsStore.variants, {id: Math.random(), text: ""}]
            }}>Добавить ответ</Button>
            {VariantsStore.variants?.map(v => 
                <Block 
                    key={`variant-${v.id}`} 
                    id={v.id} 
                    text={v.text} 
                    store={VariantsStore}
                    onClick={() => {
                        AnswersStore.activeVariantId = v.id
                    }}
                    type="variant"
                />
            )}
        </VariantsContainerStyled>
    )
});

export default VariantsContainer;