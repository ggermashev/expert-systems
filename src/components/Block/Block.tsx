import { FC, useState } from "react"
import { BlockStyled, WrapStyled } from "./Block.styled"
import { IQuestion } from "../../types"
import QuestionsStore from "../../store/Questions.store"
import CloseIcon from '@mui/icons-material/Close';
import VariantsStore from "../../store/Variants.store";
import AnswersStore from "../../store/Answers.store";
import { useDrag, useDrop } from "react-dnd";
import { observer } from "mobx-react-lite";
import { BLUE, RED, WHITE } from "../../constants";


type TType = "question" | "variant"

export interface IBlock {
    id: number;
    text: string;
    store: typeof QuestionsStore | typeof VariantsStore | typeof AnswersStore
    type?: TType
    onClick?: () => void;
}

const Block: FC<IBlock> = observer(({ text, id, store, type, onClick }) => {
    const [value, setValue] = useState(text)

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
                AnswersStore.addItem(dragId)

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
            ref={type === "question" ? dragRef : dropRef}
            onClick={() => {
                if (type === "variant") {
                    AnswersStore.activeVariantId = id
                }
            }}
        >
            <BlockStyled
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                    store?.updateText(id, e.target.value)
                }}
                disabled={!type}
                onClick={onClick}
                style={{
                    borderColor: id === AnswersStore.activeVariantId ? BLUE : WHITE
                }}
            >

            </BlockStyled>
            {<CloseIcon className="close" onClick={() => {
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