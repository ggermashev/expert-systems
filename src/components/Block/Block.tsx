import { FC, useEffect, useRef, useState } from "react"
import { BlockStyled, WrapStyled } from "./Block.styled"
import { IQuestion } from "../../types"
import QuestionsStore from "../../store/Questions.store"
import CloseIcon from '@mui/icons-material/Close';
import VariantsStore from "../../store/Variants.store";
import AnswersStore from "../../store/Answers.store";
import { useDrag, useDrop } from "react-dnd";
import { observer } from "mobx-react-lite";
import { BLUE, RED, WHITE } from "../../constants";


type TType = "question" | "variant" | "answer"

export interface IBlock {
    id: number;
    text: string;
    store: typeof QuestionsStore | typeof VariantsStore | typeof AnswersStore
    type: TType
    onClick?: () => void;
}

const Block: FC<IBlock> = observer(({ text, id, store, type, onClick }) => {
    const [value, setValue] = useState(text)
    const [isPositive, setIsPositive] = useState(AnswersStore.isPositive(id))

    useEffect(() => {
        if (type === "answer") {
            setIsPositive(AnswersStore.isPositive(id))
        } else {
            setIsPositive(true)
        }
    }, [AnswersStore.activeVariantId])

    const [{ isDragging }, dragRef] = useDrag({
        type: `${type}`,
        item: { dragId: id, dragType: type },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            opacity: 0,
        })
    })

    const [{ isOver }, dropRef] = useDrop({
        accept: "question",
        drop: ({ dragId, dragType }: { dragId: number, dragType: TType }) => {
            if (dragType === "question" && type === "variant") {
                AnswersStore.activeVariantId = id;
                AnswersStore.addPositiveItem(dragId)

                console.log(AnswersStore.answers)
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })

    })

    return (
        <WrapStyled 
            draggable 
            ref={type === "question" ? dragRef : (type === "variant" ? dropRef : null)}
            onClick={() => {
                onClick?.();
                if (type === "answer") {
                    setIsPositive(!isPositive)
                }
                if (type === "variant") {
                    AnswersStore.activeVariantId = id
                }
            }}
        >
            <BlockStyled
                value={value}
                onChange={e => {
                    if (type !== "answer") {
                        setValue(e.target.value);
                        store?.updateText(id, e.target.value)
                    }
                }}
                style={{
                    borderColor: id === AnswersStore.activeVariantId ? BLUE : (isPositive ? WHITE : RED)
                }}
            >

            </BlockStyled>
            {<CloseIcon className="close" onClick={(e) => {
                e.stopPropagation()
                store.removeItem(id)
                if (type === "question") {
                    AnswersStore.removeItem(id)
                }
                if( type === "variant") {
                    AnswersStore.removeVariant(id)
                }
            }} />}
        </WrapStyled>
    )
});

export default Block