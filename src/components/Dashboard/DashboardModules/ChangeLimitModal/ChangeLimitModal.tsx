import { useRef, useState, useContext } from "react";
import * as S from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { DBContext } from "../../../../context/DBContext";

interface Props {
  handleModal: () => void;
}

const valueFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const ChangeLimitModal = ({ handleModal }: Props) => {
  const {updateLimit} = useContext(DBContext)
  const limit = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<String | null>(null);

  const submitData = () => {
    if (limit.current?.value) {
      setError(null);
      updateLimit(limit.current.value)
      handleModal()
    } else {
      setError("Please insert a valid value.")
    }
  }

  return (
    <S.BlackOutLayer>
      <S.Container>
        <S.Header>
          <h1>Insert your new credit card limit</h1>
          <AiOutlineClose onClick={handleModal} />
        </S.Header>

        <S.Body>
          <S.BodyInfo>
            <span>Your current limit:</span>
            <span>{valueFormatter.format(14000)}</span>
          </S.BodyInfo>
          <S.BodyInfo>
            <span>Your new limit:</span>
            <div>
              <input type="number" ref={limit} />
              <span>{error}</span>
            </div>
          </S.BodyInfo>
          <S.Button onClick={submitData}>Change Limit</S.Button>
        </S.Body>
      </S.Container>
    </S.BlackOutLayer>
  );
};

export default ChangeLimitModal;
