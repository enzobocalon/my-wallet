import { useRef, useState } from "react";
import * as S from "./style";
import { AiOutlineClose } from "react-icons/ai";

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
  const limit = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<String | null>(null);

  const handleLimit = () => {
    if (limit) {
    }
  };
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
            <input type="number" ref={limit} />
          </S.BodyInfo>
          <S.Button>Change Limit</S.Button>
        </S.Body>
      </S.Container>
    </S.BlackOutLayer>
  );
};

export default ChangeLimitModal;
